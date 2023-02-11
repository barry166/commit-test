/** @type {import('vite').UserConfig} */
import react from '@vitejs/plugin-react'

export default {
  base: './', // index.html文件所在位置
  root: './',
  server: {
    host: 'localhost',
    port: 3000
  },
  plugins: [react()],
}
