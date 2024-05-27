import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import './globals.css';
import { AppProvider } from '../components/context';
import Navbar from '@/components/Navbar';
import { SwrProviders } from './providers';
import * as React from 'react';
import { Providers } from './providers';

export const metadata = {
  title: 'HR-SYSTEM',
  description: 'Simplifying HR services',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/* className='bg-gradient-to-r from-red-300 to-purple-500 */}
      <body>
        <Providers>
          <SwrProviders>
            <AppProvider>{children}</AppProvider>
          </SwrProviders>
        </Providers>
      </body>
    </html>
  );
}
