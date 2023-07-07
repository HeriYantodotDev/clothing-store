import { ButtonProps } from '../../Types';
import { BUTTON_TYPE_CLASSES } from '../../Types';
import './Button.styles.scss';

export function Button({
  children,
  buttonType,
  onclick,
  ...otherProps
}: ButtonProps,
) {
  return (
    <button
      onClick={onclick}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps} >
      {children}
    </button>
  );
}