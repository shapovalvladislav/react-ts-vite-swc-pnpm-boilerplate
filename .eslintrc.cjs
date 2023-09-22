module.exports = {
  root: true,
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    'import/extensions': 0,
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'arrow-body-style': 'off',
    'import/no-cycle': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
  ignorePatterns: [
    'vite.config.js',
    '.eslintrc.cjs',
    'vite.config.ts',
    'dist',
    'node_modules',
  ],
};
