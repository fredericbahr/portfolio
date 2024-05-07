/*
 * COPYRIGHT (C) 2024 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

module.exports = {
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "simple-import-sort", "header", "eslint-plugin-tsdoc", "react"],
  ignorePatterns: ["node_modules/**", "dist/**", "coverage/**", "public/**", "assets/*", "packages/**/node_modules"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "simple-import-sort/imports": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "header/header": [
      "error",
      "block",
      {
        pattern: "COPYRIGHT",
        template: `\n * COPYRIGHT (C) ${new Date().getFullYear()} Frederic Bahr\n * \n * The PROGRAM is protected by national and international copyright laws and conventions.\n * The copyright lies with Frederic Bahr, unless expressly stated otherwise.\n * All rights reserved.\n * Especially the reproduction and distribution of the PROGRAM without written permission of\n * the copyright owner is prohibited.\n * \n * See LICENSE for licensing information.\n`,
      },
      2,
    ],
    "tsdoc/syntax": "error",
  },
};
