import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    allowedHosts: ['59d4-2409-40f0-5041-a94c-4441-3cb2-e9aa-3502.ngrok-free.app'],
    // Optionally expose it to all network interfaces
    host: true,
    port: 5173, // or whatever port you're using
  },
});
