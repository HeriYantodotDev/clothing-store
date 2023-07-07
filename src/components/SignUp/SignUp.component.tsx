import React, { FormEvent, useState, useContext } from 'react';
import { defaultFormField } from './defaultValue';
import { createAuthUserWithEmailAndPassword } from '../../services/firebase/firebase.auth';
import { createUserDocumentFromAuth } from '../../services/firebase/db/users.db';

import { FormInput } from '../FormInput/FormInput.component';
import { Button } from '../Button/Button.component';
import { LoadingWithinButton } from '../Loadiing/Loading.component';

import { UserContext } from '../../context/user.context';

import './SignUp.styles.scss';

export function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormField);
  const [isLoadingEmail, setLoadingEmail] = useState(false);
  const {
    displayName,
    email,
    password,
    confirmPassword,
  } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  function resetFormField() {
    setFormFields(defaultFormField);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  }

  //replace this with joy
  function simpleValidationHandleSubmit(email: string, password: string, confirmPassword: string) {
    if (!email || !password || !confirmPassword) {
      return false;
    }

    if (password !== confirmPassword) {
      return false;
    }

    return true;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoadingEmail(true);
    try {
      //TO DO: Fix this validation
      console.log('fix this validation');
      if (!simpleValidationHandleSubmit(email, password, confirmPassword)) {
        throw new Error('Validation Error');
      }

      const response = await createAuthUserWithEmailAndPassword(email, password);
      const user = response?.user;
      if (!response || !user) {
        throw new Error('Something went wrong with the Auth process');
      }

      await createUserDocumentFromAuth(user, { displayName });

      setCurrentUser({
        ...user,
        displayName,
      });

      setLoadingEmail(false);

      resetFormField();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setLoadingEmail(false);

      if (err?.code === 'auth/email-already-in-use') {
        // eslint-disable-next-line no-console
        console.log('Future me! Hey do something about handling is already been used');
      } else {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account? </h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label='Display Name'
          type='text'
          name='displayName'
          required onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          name='email'
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          name='password'
          required
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          required
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button buttonType='default' type='submit'>
          {isLoadingEmail ? (
            <LoadingWithinButton />
          ) : (
            'Sign Up'
          )}
        </Button>
      </form>
    </div>
  );
}