import {
  signInWithGooglePopOut,
} from '../../services/firebase/firebase.auth';

import { createUserDocumentFromAuth } from '../../services/firebase/db/users.db';

export function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopOut();
    await createUserDocumentFromAuth(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In</button>
    </div>
  );
}