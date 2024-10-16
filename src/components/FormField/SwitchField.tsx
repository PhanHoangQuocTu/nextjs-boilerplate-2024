import type { ReactNode } from 'react';
import React, { useId } from 'react';
import { type SwitchProps } from '@radix-ui/react-switch';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { HStack } from '../ui/h-stack';
import { Switch } from '../ui/switch';

interface SwitchFieldProps<T extends FieldValues = FieldValues> extends SwitchProps {
  isChecked?: boolean;
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: ReactNode;
}

const SwitchField = <T extends FieldValues>({ label, control, name, ...props }: SwitchFieldProps<T>) => {
  const id = useId();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <HStack align="start" spacing={8}>
            <FormControl>
              <Switch id={id} checked={field.value} onCheckedChange={field.onChange} {...props} />
            </FormControl>
            {label ? (
              <FormLabel htmlFor={id} className="-mt-0.5 mb-0 text-black">
                {label}
              </FormLabel>
            ) : null}
          </HStack>
        </FormItem>
      )}
    />
  );
};

export { SwitchField };
