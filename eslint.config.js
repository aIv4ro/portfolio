import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      semi: ['error', 'never'],
      'astro/semi': ['error', 'never'],
      quotes: ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-single']
    }
  }
]