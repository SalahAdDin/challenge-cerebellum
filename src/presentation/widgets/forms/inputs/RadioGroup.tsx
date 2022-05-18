import { Col, Radio, Text } from '@nextui-org/react';
import { RadioProps } from '@nextui-org/react/types/radio/radio';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

type RadioOption = {
  label: string;
  value: string;
};

type CustomGroupProps = Partial<
  Omit<RadioProps, 'checked' | 'animated' | 'squared' | 'prevenDefault'>
> & { row?: boolean };

type RadioGroupProps<T> = UseControllerProps<T> & {
  label: string;
  groupProps?: CustomGroupProps;
  rowProps?: Partial<RadioProps>;
  options: RadioOption[];
};

const RadioGroup = <T extends FieldValues>({
  name,
  control,
  label,
  options = [],
  groupProps,
  rowProps,
}: RadioGroupProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <Col>
        <Text
          color={error ? 'error' : 'default'}
          as="label"
          css={{ fontSize: 14 }}
        >
          {label}
        </Text>
        <Radio.Group
          {...groupProps}
          textColor={error ? 'error' : 'default'}
          color={error ? 'error' : 'default'}
          {...field}
        >
          {options.map((option) => (
            <Radio
              {...rowProps}
              key={name + option.value}
              size="xs"
              value={option.value}
              css={{ mt: 10 }}
            >
              {option.label}
            </Radio>
          ))}
        </Radio.Group>
        {error && (
          <Text
            as="p"
            color={error ? 'error' : 'default'}
            css={{
              ml: 10,
              fontSize: 12,
            }}
            role="alert"
          >
            {error.message}
          </Text>
        )}
      </Col>
    )}
  />
  // eslint-disable-next-line @typescript-eslint/indent
);
export type { RadioOption };
export default RadioGroup;
