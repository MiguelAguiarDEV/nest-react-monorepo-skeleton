import { defineConfig } from 'vitest/config';
// @ts-expect-error: el plugin no declara default pero sí funciona en tiempo de ejecución
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
