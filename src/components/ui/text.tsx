import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const textVariants = cva('text-headline', {
  variants: {
    size: {
      default: 'text-sm md:text-[0.9375rem] lg:text-base',
      sm: 'text-sm md:text-[0.9375rem] lg:text-base',
      md: 'text-base md:text-[1.0625rem] lg:text-lg',
      lg: 'text-[1.625rem] md:text-[2.125rem] lg:text-5xl',
      xl: 'text-[2.5rem] md:text-6xl lg:text-7xl',
    },
    weight: {
      100: 'font-thin',
      200: 'font-extralight',
      300: 'font-light',
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
      800: 'font-extrabold',
    },
  },
  defaultVariants: {
    size: 'default',
    weight: 400,
  },
});

export interface ITextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, ITextProps>(
  ({ className, size, weight, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p';
    return <Comp className={cn(textVariants({ size, weight, className }))} ref={ref} {...props} />;
  }
);

Text.displayName = 'Text';

export { Text, textVariants };
