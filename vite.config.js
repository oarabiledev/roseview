import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: './src/roseview.core.js',
      name: 'roseview',
      formats: ['es'],
      fileName: (format) => `core.${format}.js`
    },

    rollupOptions: {
      input: {
        core: path.resolve(__dirname, './src/roseview.core.js'),
        state: path.resolve(__dirname, './src/state.js'),
        router: path.resolve(__dirname, './src/router.js'),
        translater: path.resolve(__dirname, './src/translater.js')
      },
      output: {
        entryFileNames: '[name].js', 
        format: 'es',
        dir: path.resolve(__dirname, 'dist')
      },
    },
  },
});
