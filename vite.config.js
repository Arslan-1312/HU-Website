import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['react-countup', 'react-intersection-observer'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
  },
  server: {
    host: true,
    proxy: {
      // Security Layer: Route all /api requests to an actual backend server
      // This prevents the frontend code from exposing backend secrets/endpoints to the public.
      '/api': {
        target: 'http://localhost:5000', // Example: replace with actual backend API URL
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
