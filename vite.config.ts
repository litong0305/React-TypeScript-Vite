import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteEslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  server: {
    port: 8080, // 端口号
    open: true, // 启动项目时是否自动打开浏览器
    proxy: {
        // 配置代理
    },
},
  plugins: [react(), viteEslint({
    failOnError: false, // 配置这个参数是因为不想在开发阶段因为 ESLint 的错误打断开发，默认不传递参数。
  })],
})
