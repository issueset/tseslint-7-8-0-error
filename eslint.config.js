import tseslint from 'typescript-eslint'

const parser = tseslint.parser
const plugin = tseslint.plugin

export default [
  {
    name: 'typescript-eslint/base',
    languageOptions: {
      parser,
      sourceType: 'module',
      parserOptions: {
        EXPERIMENTAL_useProjectService: true,
      },
    },
    plugins: {
      '@typescript-eslint': plugin,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    rules: {
      'prefer-const': 'error', // ts provides better types with const
      'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
      'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
    },
  },
  {
    ignores: ['**/temp'],
  },
]
