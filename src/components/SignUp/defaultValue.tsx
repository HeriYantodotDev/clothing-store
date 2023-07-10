import {
  FormFieldsSignUp,
  ErrorMessageSignUp,
} from '../../Types';

export const defaultFormField: FormFieldsSignUp = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const defaultErrorMessageSignUp: ErrorMessageSignUp = {
  displayName: null,
  email: null,
  password: null,
  confirmPassword: null,
};

export const defaultErrorMessageSignUpGoogle: string | null = null;