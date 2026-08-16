// @ts-check
import { dts } from "rolldown-plugin-dts";
/**
 * @type {import("rolldown").RolldownOptions[]}
 */
export default [
  {
    plugins: [dts()],
    input: "./src/index.ts",
    platform: "node",
    external: ["@minecraft/server"],
    output: [
      {
        entryFileNames: "[name].js",
        minify: true,
        dir: "./dist",
        cleanDir: true,
        format: "esm",
        postBanner:
          "/*License: MIT, https://github.com/RuanhoR/mcbe-vanilla-lootdata*/",
      },
    ],
  },
];
