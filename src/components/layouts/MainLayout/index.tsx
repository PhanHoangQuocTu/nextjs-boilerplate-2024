'use client';

import React from 'react';
import { AppContextProvider } from '@/context/app.context';
import { type FCC } from '@/types';

const MainLayout: FCC = ({ children }) => {
  return (
    <AppContextProvider value={{}}>
      <main>
        <div>{children}</div>
      </main>
    </AppContextProvider>
  );
};

export default MainLayout;
