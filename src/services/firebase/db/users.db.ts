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


export async function createUserDocumentFromAuth(user: User, userDataOptional: UserDataOptional = {}) {

  const userUID = user.uid;

  const userDocRef = doc(db, 'users', userUID); 

  const userSnapshop = await getDoc(userDocRef);

  let userStatus = 'The user is already existed';

  if (!userSnapshop.exists()) {
    userStatus = 'New user';

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

  // remove this later after debugging
  console.log(userStatus);
  return userDocRef;
} 

