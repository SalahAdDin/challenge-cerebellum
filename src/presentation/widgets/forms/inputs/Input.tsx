import { Input as NextInput, InputProps } from '@nextui-org/react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

const Input = <T extends FieldValues>({
  name,
  control,
  fieldProps,
}: UseControllerProps<T> & { fieldProps: Partial<InputProps> }) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <NextInput
        {...fieldProps}
        status={error ? 'error' : 'default'}
        helperText={error && error.message}
        helperColor={error ? 'error' : 'default'}
        color={error ? 'error' : 'default'}
        {...field}
      />
    )}
  />
  // eslint-disable-next-line @typescript-eslint/indent
);

export default Input;
