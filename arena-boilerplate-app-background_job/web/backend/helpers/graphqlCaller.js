import validateParams from './validateParams.js'
import shopify from './../../shopify.js'

/**
 * https://github.com/Shopify/shopify-api-node
 * https://github.com/Shopify/shopify-api-node/blob/main/docs/usage/graphql.md
 */

const graphqlCaller = async ({ shop, accessToken, query, variables }) => {
  try {
    validateParams({ shop, accessToken, query })

    const client = new shopify.api.clients.Graphql({ session: { shop, accessToken } })

    let data = query && variables ? { query, variables } : query

    let res = await client.query({ data }).then((res) => res.body)

    // check userErrors
    let userErrors = res.data[Object.keys(res.data)[0]]?.userErrors
    if (userErrors?.[0]?.message) throw userErrors[0]

    return res.data
  } catch (error) {
    let err = error

    if (error.response?.errors?.[0]?.message) {
      err = error.response?.errors?.[0]
    }

    console.log('graphqlCaller error :>> ', err)
    throw err
  }
}

export default graphqlCaller
