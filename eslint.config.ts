import js from "@eslint/js"
import pluginVue from "eslint-plugin-vue"
import tseslint from "typescript-eslint"
import prettier from "eslint-config-prettier"

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  ...pluginVue.configs["flat/recommended"],

  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser"
      }
    }
  },

  {
    rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-unused-vars": "off"
    }
  },

  prettier
]
