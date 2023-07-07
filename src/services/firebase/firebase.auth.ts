import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { userSnapshotExists } from './db/users.db';

import { firebaseApp } from './firebase.config';

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(firebaseApp);

export async function signInWithGooglePopOut() {
  const userCredential = await signInWithPopup(auth, googleProvider);
  const userExists = await userSnapshotExists(userCredential.user);
  if (!userExists) {
    throw new Error('The user isn\'t existed');
  }
  return userCredential;
} 

export async function signUpWithGooglePopOut() {
  const userCredential = await signInWithPopup(auth, googleProvider);
  const userExists = await userSnapshotExists(userCredential.user);
  if (userExists) {
    throw new Error('This user has already been registered');
  }
  return userCredential;
} 

export function signInWithGoogleRedirect() {
  return signInWithRedirect(auth, googleProvider);
}

export async function createAuthUserWithEmailAndPassword(email: string, password: string) {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signInAuthUserWithEmailAndPassword(email: string, password: string) {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export async function signOutUser() {
  return await signOut(auth);
}
