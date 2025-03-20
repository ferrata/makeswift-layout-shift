import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { draftMode } from 'next/headers'

import { DraftModeScript } from '@makeswift/runtime/next/server'

import '@/lib/makeswift/components'
import { MakeswiftProvider } from '@/lib/makeswift/provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <DraftModeScript />
        <script>
          {`
          function simulateHeavyLoad() {
            const start = Date.now();
            while (Date.now() - start < 5000) {
              // 
            }
            // console.log("Simulated GA script loaded after heavy processing");
          }
          `}
        </script>
      </head>
      <body className={inter.className}>
        <header>
          <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
            <a href="/" className="text-xl font-bold">
              Create Next App
            </a>
            <nav className="space-x-4">
              <a href="/">Home</a>
              <a href="/about">About</a>
            </nav>
            <div />
          </div>
        </header>
        <MakeswiftProvider previewMode={(await draftMode()).isEnabled}>
          {children}
        </MakeswiftProvider>
        <footer>
          <div className="bg-gray-200 p-4 text-gray-800">
            <p>© 2021 Your Company</p>
          </div>
        </footer>
        <script>{`
          simulateHeavyLoad();
        `}</script>
      </body>
    </html>
  )
}
