/// <reference types="vitest" />
import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';

export default defineConfig({
  plugins: [hydrogen()],
  resolve: {
    alias: [{find: /^~\/(.*)/, replacement: '/src/$1'}],
  },
  optimizeDeps: {
    include: [
      '@headlessui/react',
      'clsx',
      'react-use',
      'typographic-base',
      '@nosto/lib-test',
      '@nosto/nosto-react',
    ],
    exclude: [],
  },
  ssr: {noExternal: ['@nosto/lib-test', '@nosto/nosto-react']},
  test: {
    globals: true,
    testTimeout: 10000,
    hookTimeout: 10000,
    maxThreads: 1,
    minThreads: 1,
  },
});
