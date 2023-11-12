import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Providers from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Blog',
  description: 'blog with custom cms using sanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black dark:bg-gray-900 dark:selection:bg-gray-900 dark:text-white selection:bg-gray-500 h-full`}>
        <Providers>
          <Navbar/>
          <main className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
