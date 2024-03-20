import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Provider from '@/components/providers/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Finager',
  description: 'Your personal finances manager',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`pt-16 bg-zinc-100 ${inter.className}`}>
        <Provider>
          <Navbar />
          <main className='flex mx-auto w-full max-w-7xl 2xl:max-w-8xl'>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
