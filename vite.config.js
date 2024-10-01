import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.reed.co.uk',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/1.0/search'),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            proxyReq.setHeader('Authorization', 'Basic ' + Buffer.from('015d1446-67bc-4e33-bbf7-4aaf83312649:').toString('base64'));
          });
        }
      }
    }
  }
});