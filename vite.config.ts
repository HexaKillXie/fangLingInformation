import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    
// Element Plus按需导入
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-imports.d.ts',
      // 自动导入element相关函数，如：ElMessage, ElMessageBox..
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 指定自动导入的组件位置，默认是 src/components
      // dirs: ['src/components','src/todo'],
      // 自动导入element相关函数，如：ElMessage, ElMessageBox..
      resolvers: [ElementPlusResolver()],
    }),

  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
