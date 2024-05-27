import RegisterForm from '@/components/RegisterForm';

export const metadata = {
  title: 'Register',
};

function Register() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-red-300 to-purple-500'>
      <RegisterForm />
    </main>
  );
}
export default Register;
