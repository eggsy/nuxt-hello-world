export default function(ctx) {
  ctx.app.router.beforeEach((t, f, next) => {
    console.log("%c Hello World!", "font-size:50px;color:green;");
    next();
  });
}
