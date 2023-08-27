/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/naming-convention */
import { createContext, ReactNode, useEffect, useReducer } from 'react';

import { User } from 'firebase/auth';

import { onAuthStateChangedListener } from '../services/firebase/firebase.auth';

import { userSnapshotExists } from '../services/firebase/db/users.db';

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
};

type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

export enum USER_ACTION_TYPES {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

type UserStateType = {
  currentUser: User | null;
};

type UserActionType = {
  type: USER_ACTION_TYPES;
  payload: User;
};

function userReducer(
  state: UserStateType,
  action: UserActionType
): UserStateType {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
}

const INITIAL_STATE: UserStateType = {
  currentUser: null,
};

export function UserProvider({ children }: UserProviderProps) {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;

  function setCurrentUser(user: User) {
    dispatch({
      type: USER_ACTION_TYPES.SET_CURRENT_USER,
      payload: user,
    });
  }

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
        // eslint-disable-next-line no-console
        console.log(err);
      }
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
