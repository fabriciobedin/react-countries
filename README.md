# React Countries
University of Passo Fundo SPA class project that consume the `restcountries.eu/rest/v2` API.

## Application running
https://spa-react-countries.firebaseapp.com/

## Commands

yarn add axios react-router-dom redux-localstore styled-components styled-media-query react-redux redux

### Integrating Prettier + ESLint + Airbnb Style Guide in VSCode

npx install-peerdeps --dev eslint-config-airbnb
npm install -D eslint prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier

> Create files in root

.eslintrc.json

```
{
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"]
  },
}
```

.prettierrc

```
{
  "printWidth": 100,
  "singleQuote": true
}
```

> (Reference)[https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a]
