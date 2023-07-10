import { AuthErrorsEnum } from '../Enum/AuthErrors.enum';

export class ErrorEmailInUse extends Error{
  constructor(message = AuthErrorsEnum.emailInUse) {
    super(message);
  }
}