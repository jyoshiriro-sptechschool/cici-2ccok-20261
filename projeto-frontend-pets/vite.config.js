import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  
  const env = loadEnv(mode, process.cwd());
  const host = env.VITE_IP_PORTA_API;

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: host,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
