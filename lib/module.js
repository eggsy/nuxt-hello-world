import { resolve } from "path";

export default function() {
  const { nuxt } = this;

  nuxt.options.cli.badgeMessages.push("⚡️ Hello World Module Activated");

  this.addPlugin({
    src: resolve(__dirname, "middleware.js"),
    fileName: "hello-world-middleware.js",
  });

  nuxt.hook("build:extendRoutes", (routes) => {
    routes.push({
      name: "hello-world",
      path: "/hello-world",
      component: resolve(__dirname, "../pages/hello-world.vue"),
    });
  });

  nuxt.hook("generate:done", () => {
    console.log("⚡️ Thank you for using the Hello World module!");
  });
}
