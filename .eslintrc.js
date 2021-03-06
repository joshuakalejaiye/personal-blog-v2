module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "next"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "comma-dangle": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "require-jsdoc": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "import/extensions": "off",
    "react/jsx-props-no-spreading": "off",
    semi: "off",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        controlComponents: ["Field"],
        depth: 3,
      },
    ],
  },
  settings: {
    react: {
      version: "latest",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
}
