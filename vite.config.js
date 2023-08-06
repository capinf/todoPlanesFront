import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/uploads': 'https://todoplanesback.onrender.com'  // Cambia la URL del servidor backend si es diferente
    }
  }
})
