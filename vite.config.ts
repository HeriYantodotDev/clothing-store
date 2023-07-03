import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${resolve(__dirname, 'src/styles/variables.scss')}";`,
      },
    },
  },
});
