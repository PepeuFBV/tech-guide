import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import { TechCard } from '@/components/ui/tech-card'
import { Divider } from '@/components/ui/divider'
import { NextJS } from '@/components/ui/icons/nextjs'
import { ReactJS } from '@/components/ui/icons/reactjs'
import { Typescript } from '@/components/ui/icons/typescript'
import { TailwindCSS } from '@/components/ui/icons/tailwindcss'
import { EsLint } from '@/components/ui/icons/eslint'
import type { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Getting Started', href: '#getting-started' },
    { title: 'Features', href: '#features' },
    { title: 'Installation', href: '#installation' },
    { title: 'Configuration', href: '#configuration' },
]

const tech: { title: string, description: string, icon?: React.ReactNode }[] = [
    {
        title: 'Typescript',
        description: 'JavaScript tipado a nível de produção',
        icon: <Typescript />,
    },
    {
        title: 'TailwindCSS',
        description: 'Um framework CSS proporcionando rápidez',
        icon: <TailwindCSS />,
    },
    {
        title: 'EsLint',
        description: 'Encontre e corrija problemas no seu código',
        icon: <EsLint />,
    },
    {
        title: 'React',
        description: 'Uma biblioteca JavaScript para criar interfaces de usuário',
        icon: <ReactJS />,
    },
    {
        title: 'Next.js',
        description: 'O framework React para produção',
        icon: <NextJS />,
    },
]

export default function Introduction() {
    return (
        <div className='w-full h-full flex items-start justify-start space-x-10'>
            <div className='md:w-[75%] lg:w-[80%] flex flex-col justify-center space-y-10 px-3 md:px-10'>
                <div className='flex flex-col space-y-8'>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='text-4xl'>Como começar</h1>
                        <p>O ecossistema que será usado no final do guia contém algumas das tecnologias mais utilizadas no mercado.</p>
                    </div>
                    <div className='grid col-span-1 md:col-span-2 xl:grid-cols-3 gap-4'>
                        {tech.map((tech, index) => (
                            <TechCard key={index} title={tech.title} description={tech.description} icon={tech.icon} />
                        ))}
                    </div>
                </div>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <div>

                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
