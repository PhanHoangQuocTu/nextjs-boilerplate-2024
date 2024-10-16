import React, { useId } from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { Checkbox } from '../ui/checkbox';
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Label } from '../ui/label';

interface CheckboxProps<T extends FieldValues = FieldValues> {
  isChecked?: boolean;
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  required?: boolean;
  disabled?: boolean;
}

const CheckboxField = <T extends FieldValues>({
  control,
  name,
  label,
  disabled,
  required,
  ...props
}: CheckboxProps<T>) => {
  const id = useId();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="my-3 flex items-center space-x-2">
            <FormControl>
              <Checkbox disabled={disabled} id={id} checked={field.value} onCheckedChange={field.onChange} {...props} />
            </FormControl>
            {label && (
              <Label htmlFor={id} className="mb-0 text-xs leading-none text-black lg:text-sm">
                {label}
                {required && <span className="text-red-500">*</span>}
              </Label>
            )}
          </div>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};

export { CheckboxField };
