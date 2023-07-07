import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from 'react';

import { User } from 'firebase/auth';

import {
  onAuthStateChangedListener,
} from '../services/firebase/firebase.auth';

import { userSnapshotExists } from '../services/firebase/db/users.db';

export enum Intent {
  GOOGLE_SIGN_IN = 'GOOGLE_SIGN_IN',
  GOOGLE_SIGN_UP = 'GOOGLE_SIGN_IN',
  EMAIL_SIGN_IN = 'EMAIL_SIGN_IN',
  EMAIL_SIGN_UP = 'EMAIL_SIGN_UP',
  INITIAL = 'INITIAL',
}

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}
type IntentContextType = {
  intent: string | null;
  setIntent: Dispatch<SetStateAction<string | null>>;
}

type UserProviderProps = {
  children: ReactNode;
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const IntentContext = createContext<IntentContextType>({
  intent: null,
  setIntent: () => null,
});


export function UserProvider({ children }: UserProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [intent, setIntent] = useState<string | null>(null);

  const value = {
    currentUser,
    setCurrentUser,
    intent,
    setIntent,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      try {
        if (user) {
          const userExists = await userSnapshotExists(user);
          if (userExists) {
            setCurrentUser(user);
          }
        }
      } catch (err) {
        console.log(err);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={value} >{children}</UserContext.Provider>
  );
}
