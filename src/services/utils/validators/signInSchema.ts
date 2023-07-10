import * as yup from 'yup';

import { ValidationErrorsEnum } from '../Enum/ValidationErrors.enum';

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email(ValidationErrorsEnum.errorEmailInvalid)
    .required(ValidationErrorsEnum.errorEmailEmpty),
  password: yup
    .string()
    .min(8, ValidationErrorsEnum.errorPassword2)
    .required(ValidationErrorsEnum.errorPasswordEmpty),
}).noUnknown(false).unknown(false);
