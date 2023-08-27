import * as yup from 'yup';

import { ValidationErrorsEnum } from '../Enum/ValidationErrors.enum';

// eslint-disable-next-line import/prefer-default-export
export const signInSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email(ValidationErrorsEnum.errorEmailInvalid)
      .required(ValidationErrorsEnum.errorEmailEmpty),
    password: yup
      .string()
      .min(8, ValidationErrorsEnum.errorPassword2)
      .required(ValidationErrorsEnum.errorPasswordEmpty),
  })
  .noUnknown(false)
  .unknown(false);
