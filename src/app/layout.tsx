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
    title: 'Nome do App',
    description: 'Descrição do App',
    applicationName: 'Nome do App',
    authors: [{ url: 'www.pedro.site', name: 'Pedro Figueira' }],
    keywords: ['palavra-chave', 'palavra-chave'],
    creator: 'Pedro Figueira',
    publisher: 'Pedro Figueira',
    abstract: 'Descrição do App',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='pt-BR'>
            <head>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
