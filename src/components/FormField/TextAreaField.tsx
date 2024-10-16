import type { ReactNode } from 'react';
import React from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { Show } from '../Show';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Textarea, type TextareaProps } from '../ui/textarea';

interface Props<T extends FieldValues = FieldValues> extends TextareaProps {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: ReactNode;
  required?: boolean;
  labelClassName?: Props['className'];
}

const TextAreaField = <T extends FieldValues>({
  defaultValue,
  labelClassName,
  control,
  label,
  required,
  ...props
}: Props<T>) => {
  return (
    <FormField
      control={control}
      name={props.name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div>
              <Show when={!!label}>
                <FormLabel className={cn('mb-1', labelClassName)}>
                  <span className="text-sm font-semibold text-black">{label}</span>{' '}
                  {required && <span className="text-red-500">*</span>}
                </FormLabel>
              </Show>
              <Textarea {...field} {...props} />
            </div>
          </FormControl>
          <FormMessage className="mt-1" />
        </FormItem>
      )}
    />
  );
};

export { TextAreaField };
