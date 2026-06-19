import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cda-website/',     // GitHub Pages 项目站点前缀
  server: {
    port: 3000,
    open: true
  }
})
