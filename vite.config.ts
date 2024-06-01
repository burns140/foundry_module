import path from "path";
import copy from "rollup-plugin-copy";
import { defineConfig } from "vite";

export default defineConfig({
 build: {
   sourcemap: true,
   rollupOptions: {
     input: "src/ts/test.ts",
     output: {
       dir: path.resolve('./scripts'),
       entryFileNames: "bundle.js",
       format: "es",
     },
   },
 },
 plugins: [
   copy({
     targets: [{ src: "src/module.json", dest: "dist" }],
     hook: "writeBundle",
   }),
 ],
});