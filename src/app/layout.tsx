import Header from '@/components/core/header'
import Footer from '@/components/core/footer'
import Sidebar from '@/components/core/sidebar/sidebar'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
    variable: '--font-nunito',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Seed a Bit\'s Code Guide',
    description: 'A complete guide from starting with the tools, frameworks and languages used by Seed a Bit',
    applicationName: 'Seed a Bit\'s Guide',
    authors: [{ url: 'www.pedrofbv.site', name: 'Pedro Figueira' }],
    keywords: ['web', 'react', 'nextjs', 'guide', 'webdev', 'frontend', 'cli'],
    creator: 'Pedro Figueira',
    publisher: 'Seed a Bit',
    abstract: 'A complete guide to get started with the Seed a Bit\'s coding ecossystem'
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
                <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
                <link rel="shortcut icon" href="/icons/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="React Next Guide" />
                <link rel="manifest" href="/icons/site.webmanifest" />
            </head>
            <body
                className={`${nunito.variable} antialiased`}
            >
                <Sidebar className='hidden md:block min-h-fit fixed top-0 z-10 md:w-[25%] lg:w-[20%]' />
                <div className='ml-0 md:ml-[25%] lg:ml-[20%] w-full md:w-[75%] lg:w-[80%]'>
                    <Header className='fixed md:right-0 w-full md:w-[75%] lg:w-[80%]' />
                    <main className='mt-20 w-full h-full flex items-center justify-center p-3 md:p-10'>
                        {children}
                    </main>
                    <Footer className='mt-10 mb-20 w-full' />
                </div>
            </body>
        </html>
    )
}