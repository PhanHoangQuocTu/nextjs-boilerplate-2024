// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;
const TooltipPortal = TooltipPrimitive.Portal;

const TooltipTrigger = TooltipPrimitive.Trigger;

const contentVariant = cva(
  'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-sm border px-3 pb-2.5 pt-2 text-sm shadow-md',
  {
    variants: {
      variant: {
        default: 'text-popover-foreground bg-dark-bg',
        light: 'border-gray-200 bg-white text-gray-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof contentVariant> {}

const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, TooltipContentProps>(
  ({ className, sideOffset = 4, variant, ...props }, ref) => (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(contentVariant({ variant }), className)}
      {...props}
    />
  )
);

interface TooltipProps extends TooltipContentProps {
  children: React.ReactNode;
  label: React.ReactNode;
}

const Tooltip = ({ children, label, variant, className, ...props }: TooltipProps) => (
  <TooltipRoot>
    <TooltipTrigger asChild>{children}</TooltipTrigger>
    <TooltipPortal>
      <TooltipContent variant={variant} {...props} className={className}>
        {label}
        <TooltipPrimitive.TooltipArrow className={cn(variant === 'light' ? 'fill-white' : 'fill-dark-bg')} />
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
);

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger };
