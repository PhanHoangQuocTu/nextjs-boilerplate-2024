import * as React from 'react';
import { Icons } from '@/assets/icons';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { Show } from '../Show';
import { HStack } from './h-stack';
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
        xs: 'h-9 rounded-sm px-2 py-1.5 text-xs',
        default: 'h-10 rounded-md px-3 py-2 text-sm',
        md: 'h-11 rounded-md px-3 py-2 text-sm',
        lg: 'h-12 rounded-lg px-3 py-2 text-sm',
      },
      noBorder: {
        true: 'border-none',
      },
    },
    defaultVariants: {
      inputSize: 'default',
    },
  }
);

export interface InputNumberProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  errorClassName?: string;
  label?: React.ReactNode;
  tooltip?: string;
  inputClassName?: InputNumberProps['className'];
}

const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  (
    { className, inputClassName, noBorder, variant = 'default', required, inputSize, label, tooltip, type, ...props },
    ref
  ) => {
    return (
      <div className={className}>
        {label && (
          <HStack align="start" spacing={8}>
            <Label>
              {label} {required && <span className="text-red-500">*</span>}
            </Label>

            <Show when={!!tooltip}>
              <Tooltip className="max-w-sm whitespace-pre-line text-sm" label={tooltip}>
                <Icons.helpCircle size={18} />
              </Tooltip>
            </Show>
          </HStack>
        )}

        <div className="relative">
          <input
            ref={ref}
            type={type}
            className={cn(inputVariants({ variant, noBorder, inputSize, className: inputClassName }))}
            {...props}
          />
        </div>
      </div>
    );
  }
);

InputNumber.displayName = 'InputNumber';

export { InputNumber };
