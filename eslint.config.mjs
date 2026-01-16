import { defineConfig, globalIgnores } from 'eslint/config';

import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

import prettierConfig from 'eslint-config-prettier/flat';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([

  ...nextVitals,
  ...nextTs,

  prettierConfig,
    {
    files: ['**/*.{js,jsx,ts,tsx}'],

    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
     
      'prettier/prettier': 'warn',
      
      'import/no-duplicates': 'error',
      'import/prefer-default-export': 'off',
      'import/no-cycle': 'off',

      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          // 'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

    
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
    
      'react/react-in-jsx-scope': 'off',
      'react/jsx-fragments': 'off',
      'react/no-array-index-key': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-boolean-value': 'off',
      'react/no-danger': 'off',
      'react/self-closing-comp': 'off',

           'jsx-a11y/alt-text': 'off',
      'jsx-a11y/iframe-has-title': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',

         'no-undef': 'error',
      'no-param-reassign': 'off',
      'no-return-assign': 'off',
      'spaced-comment': 'off',
      'object-shorthand': 'off',

     
      '@next/next/inline-script-id': 'off',
    },
  },

  
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);
