import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/roseview.es.js'),
      name: 'Roseview',
      formats: ['es'],
      fileName: () => `roseview.esm.js`,
    }
  }
});
