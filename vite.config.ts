/**
 * @file Vite configuration.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    vue(),
    checker({
      vueTsc: true,
      eslint: {
        lintCommand:
          'eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore --config ./.eslintrc.cjs',
      },
      stylelint: {
        lintCommand: 'stylelint ./src/**/*.{css,vue,sass,scss}',
      },
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
