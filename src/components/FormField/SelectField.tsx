import React from 'react';
import { Icons } from '@/assets/icons';
import type { VariantProps } from 'class-variance-authority';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { type inputVariants } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Tooltip } from '../ui/tooltip';

export interface IData {
  label: string;
  value: string;
  image?: string | null;
  group?: string | null;
}

interface Props<T extends FieldValues = FieldValues>
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof inputVariants> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  note?: string;
  required?: boolean;
  data: IData[];
  selectClassName?: string;
  onChangeOptions?: (value: string) => void;
}

const SelectField = <T extends FieldValues>({
  name,
  defaultValue,
  control,
  label,
  required,
  note,
  data,
  selectClassName,
  onChangeOptions,
  inputSize = 'lg',
  variant,
  noBorder,
  ...props
}: Props<T>) => {
  return (
    <FormField
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className={props.className}>
            {label && (
              <div className="flex items-center">
                <FormLabel>
                  {label} {required && <span className="text-red-500">*</span>}
                </FormLabel>
                {note && (
                  <Tooltip label={<span className="max-w-[20rem] whitespace-pre-line">{note}</span>}>
                    <Icons.helpCircle className="-mt-2 ml-2" size={18} />
                  </Tooltip>
                )}
              </div>
            )}
            <div>
              <Select
                value={field.value}
                onValueChange={(value) => {
                  field.onChange(value); // Trigger the field's onChange event
                  onChangeOptions?.(value); // Pass the value to the parent component
                }}
                defaultValue={field.value}
                disabled={props.disabled}
              >
                <FormControl>
                  <SelectTrigger
                    variant={variant}
                    inputSize={inputSize}
                    noBorder={noBorder}
                    className={cn('w-full', selectClassName)}
                  >
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="max-h-[20rem] overflow-y-auto">
                  {data?.map((x) => (
                    <SelectItem key={x?.value} value={x?.value} className="hover:bg-dark flex items-center space-x-2">
                      <div className="flex items-center space-x-2">
                        {x?.image && <img src={x?.image} alt="" className="h-6 w-6 rounded-full" />}
                        <p>{x.label}</p>
                      </div>
                    </SelectItem>
                  ))}
                  {data?.length === 0 ? <div className="p-3 text-center text-xs italic">No data</div> : null}
                </SelectContent>
              </Select>
            </div>
            <FormMessage className="mt-1 text-xs" />
          </div>
        </FormItem>
      )}
    />
  );
};

export { SelectField };
