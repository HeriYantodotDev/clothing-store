import { ButtonProps } from '../../Types';
import { BUTTON_TYPE_CLASSES } from '../../Types';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './Button.styles';

function getButton(buttonType: string = BUTTON_TYPE_CLASSES.default) {
  if (buttonType === BUTTON_TYPE_CLASSES.inverted) {
    return InvertedButton;
  }

  if (buttonType === BUTTON_TYPE_CLASSES.google) {
    return GoogleSignInButton;
  }

  return BaseButton;
}

export function Button({
  children,
  buttonType,
  onclick,
  ...otherProps
}: ButtonProps,
) {

  const CustomButton = getButton(buttonType) || BaseButton;

  return (
    <CustomButton
      onClick={onclick}
      {...otherProps} >
      {children}
    </CustomButton>
  );
}