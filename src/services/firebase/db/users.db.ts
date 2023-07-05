import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { UserCredential } from 'firebase/auth';
import { firebaseApp } from '../firebase.config';

export const db = getFirestore(firebaseApp);

import { Users } from './database.types';


export async function createUserDocumentFromAuth(UserCredential: UserCredential) {
  const userAuth = UserCredential.user;

  const userUID = userAuth.uid;

  const userDocRef = doc(db, 'users', userUID); 

  const userSnapshop = await getDoc(userDocRef);

  let userStatus = 'The user is already existed';

  if (!userSnapshop.exists()) {
    userStatus = 'New user';
    const {displayName, email} = userAuth;

    if (!displayName || !email) {
      throw new Error('There\'s no Display Name or Email in Auth');
    }

    const createdAt = new Date();
    const updatedAt = new Date();

    const userInput: Users = {
      displayName,
      email,
      active: true,
      createdAt,
      updatedAt,
    };

    try {
      await setDoc(userDocRef, userInput);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch(error: any ){
      // eslint-disable-next-line no-console
      console.log('error creating the user', error.message);
    }
  }

  // remove this later after debugging
  console.log(userStatus);
  return userDocRef;
} 
