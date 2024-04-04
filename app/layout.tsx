import Navbar from '@/components/navbar/Navbar'
import ThemeButton from '@/components/theme/ThemeButton'
import ThemeState from '@/context/ThemeState'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dr. Madhumati's World of Biology",
  description:
    "'Dr. Madhumati's World of Biology' is a private biology institute for NEET preparations.",
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(montserrat.className, 'overflow-x-hidden')}>
        <ThemeState>
          <Navbar />

          <div className='mt-[8vh] md:mt-[12vh]'>{children}</div>

          <ThemeButton />
        </ThemeState>
      </body>
    </html>
  )
}
