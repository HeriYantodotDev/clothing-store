import React, { FormEvent, useState } from 'react';
import { defaultFormField } from './defaultValue';
import { createAuthUserWithEmailAndPassword } from '../../services/firebase/firebase.auth';
import { createUserDocumentFromAuth } from '../../services/firebase/db/users.db';

export function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormField);
  const {
    displayName,
    email,
    password,
    confirmPassword,
  } = formFields;

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

      resetFormField();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      // eslint-disable-next-line no-console
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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input type='text' name='displayName' required onChange={handleChange} value={displayName} />

        <label>Email</label>
        <input type='email' name='email' required onChange={handleChange} value={email} />

        <label>Password</label>
        <input type='password' name='password' required onChange={handleChange} value={password} />

        <label>Confirm Password</label>
        <input type='password' name='confirmPassword' required onChange={handleChange} value={confirmPassword} />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}