import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{

    port:51730,
    strictPort:true,
    open:true,
    proxy: {
      '/api':{
        target: 'https://bookapi.rajansudhan0.workers.dev/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
  base: "/Book-Reader/"
})