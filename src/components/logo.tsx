import * as React from 'react';
import Image, { type ImageProps } from 'next/image';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export interface LogoProps extends Omit<ImageProps, 'src' | 'width' | 'height' | 'alt'> {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({
  src = '/favicon.ico',
  alt = siteConfig.name,
  width = 48,
  height = 48,
  className,
  ...props
}) => (
  <Image
    className={cn('max-w-full', className)}
    priority
    quality={100}
    src={src}
    width={width}
    height={height}
    alt={alt}
    {...props}
  />
);
