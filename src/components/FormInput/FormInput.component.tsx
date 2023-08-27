/* eslint-disable react/jsx-props-no-spreading */
import { FormInputTypes } from '../../Types';

import { FormInputLabel, Input, Group, ErrorMessage } from './FormInput.styles';

export default function FormInput({
  label,
  errorMessage,
  ...otherProps
}: FormInputTypes) {
  return (
    <Group data-testid={`${otherProps['data-testid']}Group`}>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel $shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Group>
  );
}
