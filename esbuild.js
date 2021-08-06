"use strict";
const esbuild = require("esbuild");

const dev = process.env.JEKYLL_ENV !== "production";

esbuild.buildSync({
  bundle: true,
  define: {
    "process.env.NODE_ENV": JSON.stringify(dev ? "development" : "production"),
  },
  entryPoints: ["_ts/admin.tsx"],
  minify: !dev,
  outdir: "_site/assets",
  sourcemap: dev && "inline",
  platform: "browser",
});
