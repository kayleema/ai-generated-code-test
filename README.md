# MerryMixer

## Introduction
MerryMixer is an interactive activity selection application designed to enhance team building and social interaction for remote teams. With a simple and intuitive interface, MerryMixer allows teams to choose from various engaging activities, facilitating connection and fun in a virtual environment.

**Try it out at http://www.kaylee.jp/ai-generated-code-test/**

## Features
- Activity randomizer for spontaneous team fun
- Customizable activity durations to fit various schedules
- Selection of activity categories for diverse interests
- Real-time updates and notifications to keep the team in sync

## Installation

To install MerryMixer, follow these steps:

```bash
git clone <url>
cd merrymixer
npm install
```

## Usage

To run MerryMixer, execute the following command:

```bash
npm start
```
Navigate to http://localhost:5173/ai-generated-code-test/
in your web browser to access the application.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
