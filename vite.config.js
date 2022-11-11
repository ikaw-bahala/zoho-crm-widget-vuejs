import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const renameIndexPlugin = newFilename => {
  if (!newFilename) return

  return {
    name: 'renameIndex',
    enforce: 'post',
    generateBundle(options, bundle) {
      const indexHtml = bundle['index.html']
      indexHtml.fileName = newFilename
      console.log('renaming index.html to', indexHtml.fileName)
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    renameIndexPlugin('widget.html'),
  ],
  base: '',
  publicPath: '',
  build: {
    outDir: "build/app",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
