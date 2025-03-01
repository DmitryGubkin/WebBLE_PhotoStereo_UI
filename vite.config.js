import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  base: '/WebBLE_PhotoStereo_UI/', // Change this to your GitHub repo name
  build: {
    outDir: 'dist',
    emptyOutDir: true, // also necessary
  },
  server: {
    port: 8080
  }
});
