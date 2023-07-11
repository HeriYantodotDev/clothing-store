import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { 
  User,
} from 'firebase/auth';

import { firebaseApp } from '../firebase.config';

export const db = getFirestore(firebaseApp);

import { 
  UserData,
  UserDataOptional,
} from './database.types';


export function getUserDocRefFromAuth(user: User) {
  const userUID = user.uid;
  const userDocRef = doc(db, 'users', userUID); 
  return userDocRef;
}

export async function userSnapshotExists(user: User) {
  const userDocRef = getUserDocRefFromAuth(user);
  return (await getDoc(userDocRef)).exists();
}

export async function createUserDocumentFromAuth(user: User, userDataOptional: UserDataOptional = {}) {
  const userDocRef = getUserDocRefFromAuth(user);
  
  const userExists = await userSnapshotExists(user);

  if (!userExists) {
    const displayName = user.displayName || '';
    const email = user.email || '';

    const createdAt = new Date();
    const updatedAt = new Date();

    const userInput: UserData = {
      displayName,
      email,
      active: true,
      createdAt,
      updatedAt,
      ...userDataOptional,
    };

    try {
      await setDoc(userDocRef, userInput);
    } catch(error){
      // eslint-disable-next-line no-console
      console.log('error creating the user', error);
    }
  }
} 

