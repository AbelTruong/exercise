async function logger(ctx, next) {
  console.log(`Received ${ctx.method} request to ${ctx.url}`);

  await next();
}

module.exports = logger;
