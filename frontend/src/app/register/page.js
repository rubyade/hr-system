import RegisterForm from '@/components/admin/RegisterForm';
import Link from 'next/link';

export default function Register() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between md:p-12 bg-gradient-to-r from-red-300 to-purple-500'>
      <RegisterForm />
    </main>
  );
}
