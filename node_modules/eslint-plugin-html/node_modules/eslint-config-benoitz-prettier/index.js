/*eslint-env node*/

module.exports = {
  extends: [ "eslint:recommended", "benoitz", "prettier" ],
  plugins: [ "prettier" ],
  rules: {
    "prettier/prettier": [ "error", { trailingComma: "all", semi: false } ],
  },
}
