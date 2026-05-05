import type { Metadata } from 'next'
import './globals.css'
import ReduxProvider from '@/src/store/provider'

export const metadata: Metadata = {
  title: 'Tesla | Electric Cars, Solar & Clean Energy',
  description: 'Tesla is accelerating the world\'s transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
