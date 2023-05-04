module.exports = {
  extends: ["eslint:recommended", "prettier"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  plugins: ["babel", "react", "prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-console": 1,
    "no-empty": 0,
    semi: ["error", "never"],
    "keyword-spacing": 2,
    "require-atomic-updates": 0,
    "react/no-string-refs": 2,
    "react/no-find-dom-node": 2,
    "react/no-is-mounted": 2,
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-curly-spacing": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
  },
}

