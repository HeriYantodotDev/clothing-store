import {
  FormFieldsSignIn,
  ErrorMessageAuth,
} from '../../Types';

export const defaultFormField: FormFieldsSignIn = {
  email: '',
  password: '',
};

export const defaultErrorMessageSignIn: ErrorMessageAuth = {
  email: null,
  password: null,
};

export const defaultErrorMessageAuth: string | null = null;