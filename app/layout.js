import './globals.css'
import { Inter } from 'next/font/google'


import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gregoire Abi Chaker',
  description: 'Gregoire Abi Chaker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={`${inter.className} bg-primary`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
