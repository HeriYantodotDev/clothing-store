import { User } from 'firebase/auth';
import USER_ACTION_TYPES from './user.actionTypes';

export function setCurrentUser(user: User | null) {
  return {
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user,
  };
}

export function placeholder() {
  return 'just Place holder';
}
