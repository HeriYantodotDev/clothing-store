# Clothing Store Project

This is my first React Project that is using TypeScript.

# Project Goals

- Create an ecommerce site that has navigation + routing which: 
  - Takes us do different pages of categories of item
  - From these items, we're able to add them to our cart
  - We can see the direct update items in our cart
- The Cart funtionality: 
  - We're about to check out
  - Increase or decrease these items 
  - Instant updated reflected in our app 
- Integrate with a Stripe API (test version only)
- Integrate with Firebase to handle Auth and the storage: 
  - Sign in and sign up feature

# Development
To start: `npm run dev` 

And here are my several approach during the development process.

## To do
This is the to do list: 
- Testing Navigation
  - Test Navigation Links
  - Test the default value and also when accepting arguments
  - Test the outlet? **Question** should it be tested in the `App` component? 

## Branching Names

- Feature branches: If you're creating a branch to work on a specific feature or user story, you can prefix the branch name with "feature/"/ For example: 
  - 📝 `feature/user-registration`
  - 📝 `feature/payment-integration`
- Bug fix branches: If you're fixing a bug or addressing an issue, you can prefix the branch name with "bug/". For example:
  - 📝 `bug/login-redirect-issue`
  - 📝 `bug/database-connection-error`
- Hotfix branches: Hotfix branches are used to quickly address critical issues in production. You can prefix the branch name with "hotfix/". For example:
  - 📝 `hotfix/security-vulnerability`
  - 📝 `hotfix/critical-data-loss`
- Refactor branches: If you're refactoring or improving code without adding new features or fixing bugs, you can prefix the branch name with "refactor/". For example:
  - 📝 `refactor/database-schema`
  - 📝 `refactor/cleanup-css-styles`

## Naming
- File Name: 
  - For react component, start with the Capital, and then use `.component`.
    For example: `CategoryItem.component.tsx` 
  - For styling, start with the Capital, and then use `.styles`.
    For example: `CategoryItem.styles.scss` 
  - For others we can use camelCase. 
- Function Name:
  - Component Function: Start with the Capital then use the camelCase
    For example: `CategoryItem`
  - Normal functions & variables: camelCase 
    For example: `defaultValue` 
  - Classes: Start with the Capital then use the camelCase

## Styling Configuration
- Using [saas](https://www.npmjs.com/package/sass)
- Here's the set up in the vite.config.ts: (Don't forget to create the file in the corresponding folder)
  ```
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import {resolve} from 'path';

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${resolve(__dirname, 'src/styles/variables.scss')}";`,
        },
      },
    },
  });
  ```
- Jest doesn't understand and handle SCSS files by default. To resolve this issue, you can mock the SCSS imports in your Jest test environment. And here's the config in the jest: (Don't forget to create the file in the corresponding folder)
  ```
  {
    "testEnvironment": "jsdom",
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "setupFilesAfterEnv": [
      "@testing-library/jest-dom/extend-expect"
    ],
    "moduleNameMapper": {
      "\\.(scss|css)$": "<rootDir>/style-mock.ts"
    }
  }
  ```


## Linting

The detail of the linting rules is this file `.eslintrc.cjs` :
- Indent tab: 2 
- Semi colon: always
- Quotes: single
- Comma Dangle: always

## Testing
I'm using several packages for this : 
- `@testing-library/jest-dom": "^5.16.5`
- `@testing-library/react": "^14.0.0`
- `@types/jest": "^29.5.2"` 
- `jest": "^29.5.0`
- `jest-environment-jsdom": "^29.5.0"`
- `ts-jest": "^29.1.1`

This is a good way to start the React TypeScript test: 
- [Medium Article: Starting Jest](https://medium.com/tinyso/react-hero-typescript-jest-react-testing-library-setup-c2ecce18ec96)

Reading List:
- [Use Query](https://testing-library.com/docs/queries/about/)
- [Common Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)





# The React App Overview

## Routes
### [Home](./src/routes/home/Home.component.tsx)
**To-do item** Improve it 
### [Navigation](./src/routes/navigation/Navigation.component.tsx)
**To-do item** Improve it 
## Component
### [CategoryItem](./src/components/CategoryItem/CategoryItem.component.tsx)
![Category Component Example](./__docImages__/CategoryItem.png)
### [Directory](./src//components//Directory/Directory.component.tsx)
![Directory Component Example](./__docImages__/Directory.png)


## Styles
- [Google Fonts: Obitron](https://fonts.google.com/specimen/Orbitron)

## Authentication

## Database
For this project, I'm using Firebase Realtime Database