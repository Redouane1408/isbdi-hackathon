# Application Documentation- ( Challenge 1 & Challenge 2 )

# Overview

This application is built using React, TypeScript, and Vite. It features a landing page and a dashboard that enables users to manage various functionalities efficiently.

# Navigation
#Landing Page
The landing page introduces the application's core features and benefits. Currently, due to local hosting constraints, it is not connected to the dashboard via internal navigation.

# Accessing the Dashboard
To access the dashboard directly, please follow these steps:

Open your preferred web browser.

Enter the following URL into the address bar:
http://localhost:YOUR_PORT/dashboard

Press Enter to load the dashboard interface.

Note: Replace YOUR_PORT with the actual port number used by your local development server (commonly 5173 when using Vite).

# Hosting Limitations
At this stage, the application is not deployed online. As a result, direct navigation between the landing page and the dashboard is not supported and requires manual URL entry as explained above.

# Planned Improvements
Once the application is deployed to a production environment, we aim to:

Enable smooth internal routing between the landing page and dashboard.

Improve the user experience with seamless navigation and routing transitions.






# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
