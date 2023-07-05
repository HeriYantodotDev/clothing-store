import {
  signInWithGooglePopOut,
} from '../../services/firebase/firebase.auth';

import { SignUp } from '../../components/SignUp/SignUp.component';

import { createUserDocumentFromAuth } from '../../services/firebase/db/users.db';

export function SignIn() {


  async function logGoogleUser() {
    try {
      const response = await signInWithGooglePopOut();
      const user = response.user;
      await createUserDocumentFromAuth(user);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <SignUp />
    </div>
  );
}