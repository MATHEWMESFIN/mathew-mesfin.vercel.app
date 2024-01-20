import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './registry';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mathew Mesfin',
  description: 'Mathew Mesfin portfolio',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className='min-h-screen bg-black'>
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
