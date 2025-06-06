import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173, // Port used by docker container
    strictPort: true,
    watch: {
      usePolling: true
    }
  }
})
