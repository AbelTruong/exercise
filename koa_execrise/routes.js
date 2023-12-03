const Router = require("koa-router");
const router = new Router();

router.get("/", async (ctx) => {
  console.log("this is a home page");
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SEO title</title>
      </head>
      <body>
        <div id="app">
          HTML file
        </div>
        <p>this is a homepage</p>
      </body>
    </html>
  `;
  ctx.body = html;
});

router.get("/about", async (ctx) => {
  console.log("this is a about page");
  ctx.body = "this is a about page";
});

module.exports = router;
