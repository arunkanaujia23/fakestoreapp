import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fake Store Api',
  description: 'A dummy store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Header/>
      <body className={inter.className}>{children}</body>
    <Footer/>
    </html>
  )
}
