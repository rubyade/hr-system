import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HR-SYSTEM',
  description: 'Simplifying HR services',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-gradient-to-r from-red-300 to-purple-500'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
