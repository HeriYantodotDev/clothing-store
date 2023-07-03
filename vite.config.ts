import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import {resolve} from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${resolve(__dirname, 'src/styles/variables.scss')}";`,
      },
    },
  },
});
