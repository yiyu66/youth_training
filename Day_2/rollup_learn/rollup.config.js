import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
export default {
    input: "./index.js",
    output: [
        {
            file: "dist/bundle.cjs.js",
            format: "cjs",
        },
        {
            file: "dist/bundle.esm.js",
            format: "esm",
            plugins: [terser()]
        }
    ],
    plugins: [json()],
    // 使用 external 告诉 rollup 什么模块不打包进到 bundle 内
    external: ["vue"]
};
