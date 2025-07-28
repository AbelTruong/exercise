const dataInput = {
  cart: {
    buyerIdentity: {
      customer: {
        id: "gid://shopify/Customer/7783784153392",
        email: "abeltruong.arena@gmail.com",
        hasTags: [
          {
            hasTag: true,
            tag: "staff",
          },
        ],
      },
    },
    lines: [
      {
        quantity: 1,
        merchandise: {
          __typename: "ProductVariant",
          id: "gid://shopify/ProductVariant/48922502693168",
          product: {
            id: "gid://shopify/Product/9552236609840",
            vendor: "BB Exclusive",
            hasTags: [
              {
                hasTag: false,
                tag: "Stickers:Sale",
              },
            ],
          },
        },
        cost: {
          subtotalAmount: {
            amount: "69.99",
            currencyCode: "AUD",
            __typename: "MoneyV2",
          },
        },
        id: "gid://shopify/CartLine/0",
      },
      {
        quantity: 1,
        merchandise: {
          __typename: "ProductVariant",
          id: "gid://shopify/ProductVariant/48922502758704",
          product: {
            id: "gid://shopify/Product/9552236609840",
            vendor: "BB Exclusive",
            hasTags: [
              {
                hasTag: false,
                tag: "Stickers:Sale",
              },
            ],
          },
        },
        cost: {
          subtotalAmount: {
            amount: "69.99",
            currencyCode: "AUD",
            __typename: "MoneyV2",
          },
        },
        id: "gid://shopify/CartLine/1",
      },
      {
        quantity: 2,
        merchandise: {
          __typename: "ProductVariant",
          id: "gid://shopify/ProductVariant/48922502201648",
          product: {
            id: "gid://shopify/Product/9552236544304",
            vendor: "BB Exclusive",
            hasTags: [
              {
                hasTag: true,
                tag: "Stickers:Sale",
              },
            ],
          },
        },
        cost: {
          subtotalAmount: {
            amount: "179.9",
            currencyCode: "AUD",
            __typename: "MoneyV2",
          },
        },
        id: "gid://shopify/CartLine/2",
      },
      {
        quantity: 1,
        merchandise: {
          __typename: "ProductVariant",
          id: "gid://shopify/ProductVariant/48922502725936",
          product: {
            id: "gid://shopify/Product/9552236609840",
            vendor: "BB Exclusive",
            hasTags: [
              {
                hasTag: false,
                tag: "Stickers:Sale",
              },
            ],
          },
        },
        cost: {
          subtotalAmount: {
            amount: "69.99",
            currencyCode: "AUD",
            __typename: "MoneyV2",
          },
        },
        id: "gid://shopify/CartLine/3",
      },
    ],
  },
  discountNode: {
    metafield: {
      value:
        '{"active":"active","staffDiscountRules":{"found-basics":{"percent_discount":0.6,"message":"60% Off Found Basics"},"eclat-jewellery":{"percent_discount":0.6,"message":"60% Off Eclat Jewellery"},"the-edit":{"percent_discount":0.6,"message":"60% Off The Edit"},"eclat":{"percent_discount":0.6,"message":"60% Off Eclat Jewellery"},"bb-exclusive":{"percent_discount":0.6,"message":"60% Off BB Exclusive here"},"9-0-swim":{"percent_discount":0.6,"message":"60% Off 9.0 Swim"},"beginning-boutique":{"percent_discount":0.2,"message":"20% Off Staff Discount"},"bb-x-lily":{"percent_discount":0.4,"message":"40% Off Staff Discount"},"bbx":{"percent_discount":0.4,"message":"40% Off Staff Discount"},"bb-gift-card":{"percent_discount":0,"message":"No Staff Discount"},"fallback-discount":{"percent_discount":0.2,"message":"20% Off Staff Discount"},"emma-rose-x-beginning-boutique":{"percent_discount":0.6,"message":"60% Off BB Exclusive"},"beginning-boutique-x-demetra-dias":{"percent_discount":0.2,"message":"20% Off Demetra"},"ecocart":{"percent_discount":0,"message":"No Staff Discount"}},"productOutletSale":"Stickers:Sale"}',
    },
  },
};

const EMPTY_DISCOUNT = {
  discountApplicationStrategy: "First",
  discounts: [],
};

function checkStaffInvalid(input) {
  if (!input.cart.buyerIdentity) return false;

  if (!input.cart.buyerIdentity.customer?.hasTags[0].hasTag) return false;

  return true;
}

function percentageDiscountCalc(lineDiscount) {
  return {
    calculate: function (lineItem) {
      return (lineItem.cost.subtotalAmount.amount * lineDiscount) / 100;
    },
  };
}

function run(input) {
  console.log("input", input);
  if (!checkStaffInvalid(input)) return EMPTY_DISCOUNT;

  if (
    !input.discountNode.metafield ||
    input.discountNode.metafield?.value == "{}"
  )
    return EMPTY_DISCOUNT;

  const staffDiscountRules = JSON.parse(
    input.discountNode.metafield?.value
  )?.staffDiscountRules;

  let productsApplies = [];

  input.cart.lines.forEach((lineItem) => {
    let productVendor = lineItem.merchandise.product.vendor
      .toLowerCase()
      .trim()
      .replace(/ /g, "-")
      .replace(/\./g, "-");

    let rule = Object.entries(staffDiscountRules).find(
      ([key, value]) => key === productVendor
    );

    rule = rule
      ? rule[1]
      : Object.entries(staffDiscountRules).find(
          ([key, value]) => key === "fallback-discount"
        )[1];

    let isOutletSale = lineItem.merchandise.product.hasTags[0].hasTag;

    console.log("isOutletSale", isOutletSale);

    let lineDiscount = parseFloat(rule.percent_discount) * 100;
    let message = rule.message;

    if (!isOutletSale) {
      let discount = percentageDiscountCalc(lineDiscount).calculate(lineItem);
      console.log("🚀 ~ input.cart.lines.forEach ~ discount:", discount);

      console.log("lineItem", lineItem);

      let newLinePrice = lineItem.cost.subtotalAmount.amount - discount;
      productsApplies.push({
        ...lineItem,
        newLinePrice,
        message,
      });
    }
  });

  console.log("productsApplies", productsApplies);

  const discountItems = {
    discountApplicationStrategy: "First",
    discounts: productsApplies
      .filter((item) => item)
      .map((item) => ({
        targets: [
          {
            productVariant: {
              id: item.merchandise.id,
              quantity: item.quantity,
            },
          },
        ],
        value: {
          fixedAmount: {
            amount: item.newLinePrice,
          },
        },
        message: item.message,
      })),
  };

  console.log("discountItems", discountItems);

  console.log("productsApplies", productsApplies);

  return EMPTY_DISCOUNT;
}

document.addEventListener("DOMContentLoaded", run(dataInput));
