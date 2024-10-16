import React from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { Show } from '../Show';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input, type InputProps } from '../ui/input';

interface Props<T extends FieldValues = FieldValues> extends InputProps {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  labelClassName?: Props['className'];
  required?: boolean;
  containerClassName?: Props['className'];
  requiredClassName?: Props['className'];
}

const TextField = <T extends FieldValues>({
  className,
  labelClassName,
  control,
  defaultValue,
  label,
  required,
  containerClassName,
  requiredClassName,
  ...props
}: Props<T>) => {
  return (
    <FormField
      defaultValue={defaultValue}
      control={control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className={cn(containerClassName)}>
              <Show when={!!label}>
                <FormLabel className={cn('mb-1', labelClassName)}>
                  <span className="text-sm font-semibold text-black">{label}</span>{' '}
                  {required && <span className={cn('text-red-500', requiredClassName)}>*</span>}
                </FormLabel>
              </Show>
              <Input {...field} {...props} className={className} />
              <FormMessage className="mt-1" />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export { TextField };
