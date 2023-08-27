/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { UserProvider } from '../context/user.context';

import { ValidationErrorsEnum } from '../services/utils/Enum/ValidationErrors.enum';

import { FormFieldsSignIn } from '../Types';

function setup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

const defaultFormInput: FormFieldsSignIn = {
  email: 'aguan@gmail.com',
  password: 'Terlalu@123',
};

function Main() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

describe('Sign In Form Validation', () => {
  test.each`
    field         | value   | errorMessage
    ${'password'} | ${'sd'} | ${ValidationErrorsEnum.errorPassword2}
  `(
    '[Validation Errors] if $field is ="$value", $errorMessage is receieved',
    async ({ field, value, errorMessage }) => {
      const { user } = setup(<Main />);

      await user.click(screen.getByTestId('logo'));

      await user.click(screen.getByText('Sign In'));

      const signInContainer = screen.getByTestId('signInContainer');

      for (const input in defaultFormInput) {
        const inputElement = within(signInContainer).getByTestId(input);
        await user.type(inputElement, defaultFormInput[input]);
      }

      const inputElement = within(signInContainer).getByTestId(field);
      await user.clear(inputElement);
      await user.type(inputElement, value);

      const submitButton = within(signInContainer).getByTestId('submitButton');

      await user.click(submitButton);

      const errorInputComponent = within(signInContainer).getByTestId(
        `${field}Group`
      );
      const errorMessageElement =
        within(errorInputComponent).getByText(errorMessage);
      expect(errorMessageElement).toBeInTheDocument();
    }
  );
});
