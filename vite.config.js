import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  base: 'https://hedgedotdev.github.io/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2015',
    minify: 'terser'
  }
})