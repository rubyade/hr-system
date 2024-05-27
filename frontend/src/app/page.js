import LandingPage from '@/components/LandingPage';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-red-300 to-purple-500 h-[100vw]'>
      <Navbar />
      <LandingPage />
    </div>
  );
}
