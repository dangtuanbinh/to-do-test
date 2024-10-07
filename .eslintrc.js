// module.exports = {
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//       project: 'tsconfig.json',
//       tsconfigRootDir: __dirname,
//       sourceType: 'module',
//   },
//   globals: {
//       document: true,
//       localStorage: true,
//       window: true,
//       history: true,
//       location: true,
//       sessionStorage: true,
//       navigator: true,
//       alert: true,
//       requestAnimationFrame: true,
//   },
//   plugins: ['@typescript-eslint/eslint-plugin', 'react-hooks', 'prettier'], 
//   extends: [
//       'plugin:@typescript-eslint/recommended',
//       'plugin:react-hooks/recommended',
//       'prettier'
//     //   'plugin:prettier/recommended',
//   ],
//   root: true,
//   env: {
//       node: true,
//       jest: true,
//   },
//   ignorePatterns: ['.eslintrc.js'],
//   rules: {
//       'no-undef': 'error',
//       '@typescript-eslint/interface-name-prefix': 'off',
//       '@typescript-eslint/explicit-function-return-type': 'off',
//       '@typescript-eslint/explicit-module-boundary-types': 'off',
//       '@typescript-eslint/no-explicit-any': 'off',
//       '@typescript-eslint/no-empty-function': 'off',
//       'lines-between-class-members': ['error', 'always'],
//       '@typescript-eslint/ban-ts-comment': 'off',
//       camelcase: [2, { properties: 'never' }],
//       '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
//       'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
//       'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
//       'prettier/prettier': 'error', // Optionally enforce prettier errors as ESLint errors
//   },
// };
