import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './registry';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mathew Mesfin',
  description: 'Mathew Mesfin software engineer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
