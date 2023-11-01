import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

export const resolve = {
  alias: {
    'react-router-dom': '/path/to/react-router-dom',
  },
};