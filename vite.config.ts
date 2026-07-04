import  react  from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 200,
    rollupOptions: {
      output: {
        // Split off i18next only: it's framework-agnostic (no React
        // Context created at module scope) so it's safe to isolate into
        // its own cacheable chunk. React/react-router/framer-motion/Radix
        // all create Context objects at module load time and reference
        // each other, so forcing them into separate manual chunks risks a
        // chunk-load-order race ("Cannot read properties of undefined
        // (reading 'createContext')") — leave those to Rollup's default
        // algorithm, which keeps them safely together.
        manualChunks(id) {
          if (id.includes('node_modules') && id.includes('i18next')) return 'vendor-i18n';
        },
      },
    },
  },
  // I need to use @ import alias
  resolve: {
    alias: {
      '@': '/src'
    }
  },
})
