// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  { ignores: ['node_modules/', 'dist/'] },
  {
    files: ['apps/frontend/**/*.{js,jsx,ts,tsx}', 'apps/backend/src/**/*.ts'],
    plugins: { prettier: prettierPlugin },
    rules: {
      ...prettier.rules,
      'prettier/prettier': [
        'error',
        { singleQuote: true, semi: true, trailingComma: 'all' },
      ],
    },
  },
);
