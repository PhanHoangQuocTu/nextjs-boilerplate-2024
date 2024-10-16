'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

import { QueryClientProviderWrapper } from '@/lib/query-provider';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <QueryClientProviderWrapper>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </QueryClientProviderWrapper>
  );
}
