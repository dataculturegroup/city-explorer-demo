import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  base: '/city-explorer-demo/',
  plugins: [svelte()],
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})
