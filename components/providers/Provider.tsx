'use client';

import { FiltersProvider } from '@/context/FiltersProvider';
import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';

interface ProviderI {
  children: ReactNode;
}
const Provider: FC<ProviderI> = ({ children }) => {
  return (
    <SessionProvider>
      <FiltersProvider>{children}</FiltersProvider>
    </SessionProvider>
  );
};

export default Provider;
