import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      // Enable TypeScript checking
      dev: true,
      // Generate TypeScript definitions
      enableTypeChecking: true,
    }
  })],
  resolve: {
    alias: {
      // Add path aliases if needed
      '@': '/src',
    }
  }
})
