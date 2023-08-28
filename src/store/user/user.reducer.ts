/* eslint-disable @typescript-eslint/naming-convention */
import { createContext } from 'react';

import { User } from 'firebase/auth';

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
};

// type UserProviderProps = {
//   children: ReactNode;
// };

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

const INITIAL_STATE: UserStateType = {
  currentUser: null,
};

export function userReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: UserStateType = INITIAL_STATE,
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
      return state;
  }
}
