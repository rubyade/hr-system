import LoginForm from '@/components/general/LoginForm';

export default function Login() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between md:p-12 bg-gradient-to-r from-red-300 to-purple-500'>
      <LoginForm />
    </main>
  );
}
