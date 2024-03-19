'use client';

import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';

interface ProviderI {
  children: ReactNode;
}
const Provider: FC<ProviderI> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
