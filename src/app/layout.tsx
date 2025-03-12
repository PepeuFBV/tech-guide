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
                className={`${nunito.variable} antialiased`}
            >
                <Sidebar className='hidden md:block fixed top-0 z-10 md:w-[25%] lg:w-[20%] h-[100vh]' />
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