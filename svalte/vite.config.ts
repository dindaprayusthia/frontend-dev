import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        dev: true
      },
      preprocess: [],
      onwarn: (warning, handler) => {
        if (warning.code.startsWith('a11y-')) return;
        handler(warning);
      }
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    },
    dedupe: ['svelte'],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.svelte']
  },
  optimizeDeps: {
    exclude: ['svelte-hmr']
  }
})
