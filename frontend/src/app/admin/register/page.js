import RegisterForm from '@/components/RegisterForm';

export const metadata = {
  title: 'Register',
};

function Register() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <RegisterForm />
    </main>
  );
}
export default Register;
