import LoginForm from '@/components/general/LoginForm';
import Link from 'next/link';

export default function Login() {
  return (
    <main className='flex min-h-screen flex-col items-center gap-12 md:p-12 bg-gradient-to-r from-red-300 to-purple-500'>
      <Link
        href={'/'}
        className='pt-32 md:pr-96 text-white font-thin font-dosis'
      >
        Home
      </Link>
      <LoginForm />
    </main>
  );
}
