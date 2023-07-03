# Clothing Store Project

This is my first React Project that is using TypeScript. 

## Development

This rule outlines my approach to the development process.

### Branching Names

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

### Linting

The detail of the linting rules is this file `.eslintrc.cjs` :
- Indent tab: 2 
- Semi colon: always
- Quotes: single
- Comma Dangle: always

### Testing

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

