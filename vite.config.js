import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/WebBLE_PhotoStereo_UI/', // Change this to your GitHub repo name
  build: {
    outDir: 'dist',
    emptyOutDir: true, // also necessary
  },
  server: {
    port: 8080
  }
});
