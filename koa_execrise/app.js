const Koa = require("koa");
const Router = require("koa-router");
const logger = require("./logger");
const routes = require("./routes");
const router = new Router();
const app = new Koa();

app.use(logger);

// app.use(async (ctx, next) => {
//   ctx.body = "My name is Abel Truong";
// });

// Use the router middleware
app.use(routes.routes()).use(routes.allowedMethods());

app.listen(3000, () => {
  console.log("server run on port 3000");
});
