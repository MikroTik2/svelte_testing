import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import legacy from '@vitejs/plugin-legacy';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    legacy({
      modernPolyfills: true,
      renderLegacyChunks: false
  })
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});