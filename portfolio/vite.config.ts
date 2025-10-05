import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          icons: ['react-icons/fa6']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000
  },
  // Optimize development server
  server: {
    hmr: {
      overlay: false // Reduce overlay interference on mobile testing
    }
  }
})
