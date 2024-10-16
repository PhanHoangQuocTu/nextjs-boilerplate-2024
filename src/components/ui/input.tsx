import * as React from 'react';
import { Icons } from '@/assets/icons';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { Label } from './label';
import { Tooltip } from './tooltip';

export const inputVariants = cva(
  'border-input ring-offset-background focus-visible:ring-ring flex w-full border bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ',
  {
    variants: {
      variant: {
        default: '',
        filled: 'bg-background',
        dark: 'bg-dark border-dark-stroke',
        'dark-bg': 'bg-dark-bg border-dark-stroke',
        light: 'placeholder:text-dark-gray border-gray-300 bg-white text-gray-900 focus-visible:ring-gray-300',
        'outline-light':
          'placeholder:text-dark-gray border-white bg-transparent text-white focus-visible:ring-gray-300',
      },
      inputSize: {
        xs: 'h-8 rounded-sm px-2 py-1.5 text-xs file:text-xs file:font-medium',
        default: 'h-10 rounded-md px-3 py-2 text-sm file:text-sm file:font-medium',
        md: 'h-11 rounded-md px-3 py-2 text-sm file:text-sm file:font-medium',
        lg: 'h-12 rounded-lg px-3 py-2 text-sm file:text-sm file:font-medium',
      },
      noBorder: {
        true: 'border-none',
      },
    },
    defaultVariants: {
      inputSize: 'default',
      variant: 'default',
    },
  }
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  errorClassName?: string;
  suffix?: React.ReactNode;
  label?: React.ReactNode;
  note?: string;
  inputClassName?: string;
  tooltipClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      inputClassName,
      noBorder,
      variant = 'default',
      required,
      inputSize = 'lg',
      label,
      note,
      type,
      suffix,
      tooltipClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className={className}>
        {label && (
          <div className="flex items-start gap-2">
            <Label>
              {label} {required && <span className="text-red-500">*</span>}
            </Label>
            {note && (
              <Tooltip className={cn('max-w-sm whitespace-pre-line text-sm', tooltipClassName)} label={note}>
                <Icons.helpCircle size={18} />
              </Tooltip>
            )}
          </div>
        )}
        <div className="relative">
          <input
            type={type}
            className={cn(inputVariants({ variant, noBorder, inputSize, className: inputClassName }))}
            ref={ref}
            {...props}
          />
          {suffix && (
            <label
              className={cn('absolute right-[10px] top-1/2 -translate-y-1/2', {
                'text-gray-900': variant === 'light',
              })}
            >
              {suffix}
            </label>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
