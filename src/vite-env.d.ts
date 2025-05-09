// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // ...other options
  },
  build: {
    // ...other options
  },
  // This is important for SPA routing
  resolve: {
    alias: {
      // ...your aliases
    }
  }
});