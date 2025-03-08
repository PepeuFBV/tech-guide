import Header from '@/components/core/Header'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'React and NextJS Guide',
    description: 'A complete guide from starting with React to deploying with NextJS',
    applicationName: 'React and NextJS Guide',
    authors: [{ url: 'www.pedro.site', name: 'Pedro Figueira' }],
    keywords: ['web', 'react', 'nextjs', 'guide', 'webdev', 'frontend'],
    creator: 'Pedro Figueira',
    publisher: 'Pedro Figueira',
    abstract: 'A complete guide from starting with React to deploying with NextJS',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='pt-BR'>
            <head>
                <link rel='preload' href='/images/seed-a-bit-logo.svg' as='image' />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Header />
                {children}
            </body>
        </html>
    )
}
