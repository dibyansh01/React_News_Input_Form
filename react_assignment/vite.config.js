import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // esbuild: {
  //   // Set the target to 'es6' or 'esnext' to enable CommonJS module support
  //   target: 'es6',
  // },
})
