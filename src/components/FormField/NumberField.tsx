import React from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

import { cn } from '@/lib/utils';

import { FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { InputNumber, type InputNumberProps } from '../ui/input-number';

interface Props<T extends FieldValues = FieldValues>
  extends Omit<InputNumberProps, 'type' | 'value' | 'suffix' | 'prefix'> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  required?: boolean;
  description?: string;
  fullWidth?: boolean;
  suffix?: string | undefined;
}

const NumberField = <T extends FieldValues>({
  className,
  control,
  defaultValue,
  description,
  maxLength,
  fullWidth,
  suffix,
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
            <div className={cn({ 'w-full': fullWidth }, className)}>
              <NumericFormat
                suffix={suffix}
                maxLength={maxLength}
                allowLeadingZeros
                thousandSeparator=","
                customInput={InputNumber}
                {...field}
                {...props}
              />
              <FormMessage className="mt-1 text-xs" />
              {description ? (
                <div className="mt-1.5 flex justify-between">
                  {description && <span className="text-xs">{description}</span>}
                </div>
              ) : null}
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export { NumberField };
