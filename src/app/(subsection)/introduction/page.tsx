import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import VisitLink from '@/components/ui/visit-link'
import { TechCard } from '@/components/ui/tech-card'
import { Divider } from '@/components/ui/divider'
import { NodeJS } from '@/components/ui/icons/node'
import { NextJS } from '@/components/ui/icons/nextjs'
import { ReactJS } from '@/components/ui/icons/reactjs'
import { Typescript } from '@/components/ui/icons/typescript'
import { TailwindCSS } from '@/components/ui/icons/tailwindcss'
import { Husky } from '@/components/ui/icons/husky'
import { EsLint } from '@/components/ui/icons/eslint'
import type { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Techstack', href: 'techstack' },
]

const tech: { title: string, description: string, icon?: React.ReactNode, href: string }[] = [
    {
        title: 'Typescript',
        description: 'JavaScript tipado a nível de produção',
        icon: <Typescript />,
        href: '/typescript',
    },
    {
        title: 'TailwindCSS',
        description: 'Um framework CSS proporcionando rápidez',
        icon: <TailwindCSS />,
        href: '/tailwindcss',
    },
    {
        title: 'EsLint',
        description: 'Encontre e corrija problemas no seu código',
        icon: <EsLint />,
        href: '/eslint',
    },
    {
        title: 'Husky',
        description: 'Prevenção de commits ruins',
        icon: <Husky />,
        href: '/husky',
    },
    {
        title: 'Node.js',
        description: 'JavaScript no lado do servidor',
        icon: <NodeJS />,
        href: '/nodejs',
    },
    {
        title: 'React',
        description: 'Uma biblioteca JavaScript para criar interfaces de usuário',
        icon: <ReactJS />,
        href: '/react/introduction',
    },
    {
        title: 'Next.js',
        description: 'O framework React para produção',
        icon: <NextJS />,
        href: '/nextjs/introduction',
    },
]

export default function Introduction() {
    return (
        <div className='w-full h-full flex items-start justify-start space-x-10'>
            <div className='md:w-[75%] lg:w-[80%] flex flex-col justify-center space-y-7 px-3 md:px-10'>
                <PathDisplay />
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-4'>
                        <h1 id='introduction' className='text-4xl font-bold'>Introdução</h1>
                        <p className='text-secondary'>Está parte do guia abordará o ecossistema de forma geral, recomenda-se o aprendizado das tecnologias abaixo, <VisitLink href='/react'>React</VisitLink> e <VisitLink href='/next'>Next.js</VisitLink> previamente.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-8'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='techstack' className='text-3xl'>Techstack</h2>
                            <p>As tecnologias que serão usadas no ecossistema no final do guia contém algumas das tecnologias mais utilizadas no mercado. Elas serão abordadas em detalhes ao longo do guia, então não se preocupe se você não tem experiência com alguma delas.</p>
                        </div>
                        <div className='grid col-span-1 md:col-span-2 xl:grid-cols-3 gap-4'>
                            {tech.map((tech, index) => (
                                <TechCard key={index} title={tech.title} description={tech.description} icon={tech.icon} href={tech.href} />
                            ))}
                        </div>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div>

                    </div>
                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
