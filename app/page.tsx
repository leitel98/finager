import LoginForm from '@/components/startup/LoginForm';
import RegisterForm from '@/components/startup/RegisterForm';
import Link from 'next/link';

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: HomeProps) {
  const { type } = searchParams;

  return (
    <main className='flex min-h-screen items-center justify-center bg-zinc-200'>
      <div className='flex flex-col gap-4 p-4 rounded-lg border border-zinc-400 bg-white'>
        <h1 className='text-3xl font-bold mx-auto text-cyan-700'>
          Please register or log in
        </h1>
        <section id='controls' className='flex items-center gap-2 mx-auto'>
          <Link
            href={'/'}
            className={`px-6 py-3 rounded-md shadow-md hover:scale-105 transition-all duration-75 ${
              !type && 'bg-rose-500 text-white'
            }`}
          >
            Register
          </Link>
          <Link
            href={'?type=login'}
            className={`px-6 py-3 rounded-md shadow-md hover:scale-105 transition-all duration-75 ${
              type === 'login' && 'bg-rose-500 text-white'
            }`}
          >
            Log In
          </Link>
        </section>
        {!type ? <RegisterForm /> : <LoginForm />}
      </div>
    </main>
  );
}
