/* eslint-disable react/jsx-no-bind */
import React, { FormEvent, useState } from 'react';
import * as yup from 'yup';
import {
  defaultFormField,
  defaultErrorMessageSignIn,
  defaultErrorMessageAuth,
} from './defaultValue';
import {
  signInWithGooglePopOut,
  signInAuthUserWithEmailAndPassword,
} from '../../services/firebase/firebase.auth';

import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';
import LoadingWithinButton from '../Loading/Loading.component';

import { signInSchema } from '../../services/utils/validators/signInSchema';

import { AuthErrorsEnum } from '../../services/utils/Enum/AuthErrors.enum';
import { BUTTON_TYPE_CLASSES } from '../../Types';

import './SignIn.styles.scss';
import { ErrorInvalidCredential } from '../../services/utils/Errors/ErrorClass';

export default function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormField);
  const [isLoadingEmail, setLoadingEmail] = useState(false);
  const [isLoadingGoogle, setLoadingGoogle] = useState(false);
  const [errorMessage, setErrorMessage] = useState(defaultErrorMessageSignIn);
  const [errorMessageAuth, setErrorMessageAuth] = useState(
    defaultErrorMessageAuth
  );
  const { email, password } = formFields;

  function resetFormField() {
    setFormFields(defaultFormField);
  }

  function resetErrorMessage() {
    setErrorMessage(defaultErrorMessageSignIn);
  }

  function resetErrorMessageAuth() {
    setErrorMessageAuth(defaultErrorMessageAuth);
  }

  function resetFormErrorLoading() {
    setLoadingEmail(false);
    setLoadingGoogle(false);
    resetFormField();
    resetErrorMessage();
    resetErrorMessageAuth();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleError(err: any) {
    resetFormErrorLoading();

    if (yup.ValidationError.isError(err)) {
      let errorList = defaultErrorMessageSignIn;
      // eslint-disable-next-line no-restricted-syntax
      for (const inner of err.inner) {
        const path = inner.params?.path ?? '';
        const errorMessageKey = path as keyof typeof errorList;
        errorList = {
          ...errorList,
          [errorMessageKey]: inner.errors[0],
        };
      }

      setErrorMessage(errorList);
      return;
    }

    if (
      err?.code === 'auth/wrong-password' ||
      err?.code === 'auth/user-not-found'
    ) {
      setErrorMessageAuth(AuthErrorsEnum.wrongCredential);
      return;
    }

    if (err instanceof ErrorInvalidCredential) {
      setErrorMessageAuth(AuthErrorsEnum.wrongCredential);
      return;
    }

    // eslint-disable-next-line no-console
    console.log(err.message);
  }

  async function signInWithGoogle() {
    setLoadingGoogle(true);
    try {
      await signInWithGooglePopOut();
      setLoadingGoogle(false);
      window.location.href = '/';
    } catch (err) {
      handleError(err);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  async function signInFormValidation(email: string, password: string) {
    await signInSchema.validate(
      {
        email,
        password,
      },
      { abortEarly: false }
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoadingEmail(true);

    try {
      await signInFormValidation(email, password);

      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormErrorLoading();
      window.location.href = '/';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      handleError(err);
    }
  }

  return (
    <div className="sign-in-container" data-testid="signInContainer">
      <h2>Already have an account?</h2>
      <span>Sign in with email, password, or Google.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          errorMessage={errorMessage.email}
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
          data-testid="email"
        />

        <FormInput
          label="Password"
          errorMessage={errorMessage.password}
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
          data-testid="password"
        />

        {errorMessageAuth && (
          <div className="error-message mb-3">{errorMessageAuth}</div>
        )}

        <div className="buttons-container">
          <Button
            buttonType={BUTTON_TYPE_CLASSES.default}
            type="submit"
            data-testid="submitButton"
          >
            {isLoadingEmail ? <LoadingWithinButton /> : 'Sign In'}
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            {isLoadingGoogle ? (
              <LoadingWithinButton textColor="text-warning" />
            ) : (
              'Google Sign In'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
