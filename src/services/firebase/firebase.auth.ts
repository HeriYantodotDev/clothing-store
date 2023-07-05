import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';

import { firebaseApp } from './firebase.config';

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

const auth = getAuth(firebaseApp);

export function signInWithGooglePopOut() {
  return signInWithPopup(auth, provider);
} 

export function signInWithGoogleRedirect() {
  return signInWithRedirect(auth, provider);
}

