/*eslint-env node*/

module.exports = {
  extends: "eslint:recommended",

  rules: {
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "brace-style": ["error", "stroustrup"],
    "comma-dangle": ["error", "always-multiline"],
    curly: ["error", "multi-line"],
    indent: ["error", 2],
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-trailing-spaces": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    quotes: ["error", "double"],
    semi: ["error", "never"],
    strict: ["error", "global"],
  },

  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
}
