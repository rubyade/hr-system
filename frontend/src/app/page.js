const { default: LandingPage } = require('@/components/general/LandingPage');

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-red-300 to-purple-500 md:h-[100vh]'>
      <LandingPage />
    </div>
  );
}
