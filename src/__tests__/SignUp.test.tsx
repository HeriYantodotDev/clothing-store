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

import { FormFieldsSignUp } from '../Types';

function setup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

const defaultFormInput: FormFieldsSignUp = {
  displayName: 'Aguan',
  email: 'aguan@gmail.com',
  password: 'Terlalu@123',
  confirmPassword: 'Terlalu@123',
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

const giberish = `asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf asdfasdfasdf
asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf asdfasdfasdf
asdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf`;

describe('Sign Up Form Validation', () => {
  test.each`
    field                | value        | errorMessage
    ${'displayName'}     | ${'sd'}      | ${ValidationErrorsEnum.userSizeMin}
    ${'displayName'}     | ${giberish}  | ${ValidationErrorsEnum.userSizeMax}
    ${'displayName'}     | ${'jdf%^&*'} | ${ValidationErrorsEnum.errorDisplayNameNull}
    ${'password'}        | ${'asd'}     | ${ValidationErrorsEnum.errorPassword1}
    ${'password'}        | ${'Ta@1'}    | ${ValidationErrorsEnum.errorPassword2}
    ${'confirmPassword'} | ${'Ta@1'}    | ${ValidationErrorsEnum.confirmPasswordNotMatch}
  `(
    '[Validation Errors]if $field is ="$value", $errorMessage is receieved',
    async ({ field, value, errorMessage }) => {
      const { user } = setup(<Main />);

      await user.click(screen.getByTestId('logo'));

      await user.click(screen.getByText('Sign In'));

      const signUpContainer = screen.getByTestId('signUpContainer');

      for (const input in defaultFormInput) {
        const inputElement = within(signUpContainer).getByTestId(input);
        await user.type(inputElement, defaultFormInput[input]);
      }

      const inputElement = within(signUpContainer).getByTestId(field);
      await user.clear(inputElement);
      await user.type(inputElement, value);

      const submitButton = within(signUpContainer).getByTestId('submitButton');

      await user.click(submitButton);

      const errorInputComponent = within(signUpContainer).getByTestId(
        `${field}Group`
      );
      const errorMessageElement =
        within(errorInputComponent).getByText(errorMessage);
      expect(errorMessageElement).toBeInTheDocument();
    }
  );
});
