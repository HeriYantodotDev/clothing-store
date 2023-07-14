import { FormInput } from '../../Types';

import {
  FormInputLabel,
  Input,
  Group,
  ErrorMessage,
} from './FormInput.styles';

export function FormInput({
  label,
  errorMessage,
  ...otherProps
}: FormInput) {
  return (
    <Group data-testid={otherProps['data-testid'] + 'Group'} >
      <Input {...otherProps} />
      {
        label && (
          <FormInputLabel $shrink={otherProps.value.length}>
            {label}
          </FormInputLabel>
        )
      }
      {
        errorMessage && (
          <ErrorMessage>
            {errorMessage}
          </ErrorMessage>
        )
      }

    </Group>

  );
} 