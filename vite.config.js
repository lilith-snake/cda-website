import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/cda-website/',
  build: { rollupOptions: { input: { main: resolve(__dirname, 'index.html'), survey: resolve(__dirname, 'survey.html') } } },
  server: { port: 3000, open: true },
})
