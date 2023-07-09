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

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}

type UserProviderProps = {
  children: ReactNode;
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

export function UserProvider({ children }: UserProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const value = {
    currentUser,
    setCurrentUser,
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
