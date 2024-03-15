import RegLog from '@/components/startup/RegLog';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-zinc-200'>
      <RegLog />
    </main>
  );
}
