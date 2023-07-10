import { AuthErrorsEnum } from '../Enum/AuthErrors.enum';

export class ErrorEmailInUse extends Error{
  constructor(message = AuthErrorsEnum.emailInUse) {
    super(message);
  }
}

export class ErrorInvalidCredential extends Error{
  constructor(message = AuthErrorsEnum.wrongCredential) {
    super(message);
  }
}