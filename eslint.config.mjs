import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules/**', '.next/**', 'public/**'],
  },

  // Next.js 프로젝트 설정
  {
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'eslint:recommended',
      'prettier',
      'plugin:prettier/recommended',
    ],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier: prettierPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/self-closing-comp': 'warn',
      'react/jsx-pascal-case': 'warn',
      'prefer-const': 'warn',
      'prettier/prettier': 'warn',
    },
  },
];
