import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    fs: {
      allow: ['..']
    }
  },
  base: '/countries-info/'
})
