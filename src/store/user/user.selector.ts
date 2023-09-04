import { store } from '../store';

export function selectCurrentUser(state: ReturnType<typeof store.getState>) {
  return state.user.currentUser;
}

export function placeHolder() {
  return 'justPlaceHolder';
}
