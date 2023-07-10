import * as yup from 'yup';

import { ValidationErrorsEnum } from '../Enum/ValidationErrors.enum';

export const signUpSchema = yup.object().shape({
  displayName: yup
    .string()
    .matches(/^[a-zA-Z0-9\s]+$/, ValidationErrorsEnum.errorDisplayNameNull)
    .min(3, ValidationErrorsEnum.userSizeMin)
    .max(30, ValidationErrorsEnum.userSizeMax)
    .required(ValidationErrorsEnum.errorDisplayNameEmpty),
  email: yup
    .string()
    .email(ValidationErrorsEnum.errorEmailInvalid)
    .required(ValidationErrorsEnum.errorEmailEmpty),
  password: yup
    .string()
    .min(8, ValidationErrorsEnum.errorPassword2)
    .matches(
      /^[a-zA-Z0-9\s]+$/,
      ValidationErrorsEnum.errorPassword1,
    )
    .required(ValidationErrorsEnum.errorPasswordEmpty),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], ValidationErrorsEnum.confirmPasswordNotMatch)
    .required(ValidationErrorsEnum.confirmPasswordRequired),
}).noUnknown(false).unknown(false);
