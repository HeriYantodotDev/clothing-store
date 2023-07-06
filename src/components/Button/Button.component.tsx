import { ButtonProps } from '../../Types';
import { BUTTON_TYPE_CLASSES } from '../../Types';
import './Button.styles.scss';

export function Button({
  children,
  buttonType,
  ...otherProps
}: ButtonProps,
) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps} >{children}</button>
  );
}