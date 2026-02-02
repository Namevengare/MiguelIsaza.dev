import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Miguel Isaza - Software Engineer',
  description: 'Full-stack software engineer specializing in cloud infrastructure and system optimization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
