import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  publicDir: './public',
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      types: path.resolve(__dirname, './src/types'),
      services: path.resolve(__dirname, './src/services'),
      hooks: path.resolve(__dirname, './src/hooks'),
      context: path.resolve(__dirname, './src/context'),
      styles: path.resolve(__dirname, './src/styles'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [react()],
})
