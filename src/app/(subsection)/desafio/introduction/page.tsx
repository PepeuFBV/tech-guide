import React from 'react'
import PathDisplay from '@/components/core/path-display'
import PageIndex from '@/components/core/page-index/page-index'
import type { Topic } from '@/types/topic'
import { Divider } from '@/components/ui/divider'
import { Project } from '@/types/project'
import { Typescript } from '@/components/ui/icons/typescript'
import { ProjectCard } from '@/components/ui/project-card'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Etapas', href: 'steps' },
    { title: 'Projetos', href: 'projects' },
]

const projects: Project[] = [
    {
        title: 'Ruralatinhas',
        description: 'Aplicativo móvel para adoção de animais.',
        icon: <Typescript />,
        href: '/ruralatinhas',
    },
    {
        title: 'Gamificação da Seed',
        description: 'Aplicativo móvel para gamificação da Seed a Bit.',
        icon: <Typescript />,
        href: '/gamificacao',
    },
    {
        title: 'Sistema de Pagamentos',
        description: 'Sistema Web para gerir os pagamentos que devem ser feitos para a Seed a Bit.',
        icon: <Typescript />,
        href: '/pagamentos',
    },
    {
        title: 'Aplicativo da Imobiliária',
        description: 'Aplicativo móvel para uma imobiliária.',
        icon: <Typescript />,
        href: '/imobiliaria',
    },
    {
        title: 'Gerenciamento de Bolsistas',
        description: 'Sistema Web voltado para o gerenciamento de bolsistas da UFRPE.',
        icon: <Typescript />,
        href: '/bolsistas',
    },
    {
        title: 'Sistema de Matriculas',
        description: 'Sistema Web voltado para matriculas em cursos.',
        icon: <Typescript />,
        href: '/matriculas',
    },
]


export default function Tailwind() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center space-y-3 px-3 md:px-10'>
                <PathDisplay />
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-4'>
                        <h1 id='introduction' className='text-4xl'>Introdução</h1>
                        <p>O desafio da Fase 2 do Onboarding 2025.1 da Área de Projetos da Seed a Bit tem como objetivo desenvolver os membros por meio de projetos com aplicação prática, tanto interna quanto externamente. Para isso, seis projetos serão conduzidos, envolvendo tanto novos quanto antigos membros da equipe. Serão desenvolvidos três Sistemas Web e três Aplicativos Mobile, fortalecendo e consolidando esses dois serviços dentro da empresa.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full'/>
                    <div className='flex flex-col space-y-6'>
                    <h1 id="steps" className='text-4xl'>Etapas</h1>

                        <div className='flex flex-col space-y-4'>
                            <h2 id='requirements' className='text-2xl'>Levantamento de Requisitos</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ratione incidunt impedit illo dignissimos facere, possimus voluptates consequuntur sapiente, aliquid, optio eius nihil enim aut nulla eum a provident! Dolore.</p>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <h2 id='prototyping' className='text-2xl'>Prototipação</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ratione incidunt impedit illo dignissimos facere, possimus voluptates consequuntur sapiente, aliquid, optio eius nihil enim aut nulla eum a provident! Dolore.</p>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <h2 id='prototyping' className='text-2xl'>Desenvolvimento</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ratione incidunt impedit illo dignissimos facere, possimus voluptates consequuntur sapiente, aliquid, optio eius nihil enim aut nulla eum a provident! Dolore.</p>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <h2 id='prototyping' className='text-2xl'>Testes</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ratione incidunt impedit illo dignissimos facere, possimus voluptates consequuntur sapiente, aliquid, optio eius nihil enim aut nulla eum a provident! Dolore.</p>
                        </div>
                        
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full'/>
                    <div className='flex flex-col space-y-4'>
                    <h1 id="projects" className='text-4xl'>Projetos</h1>
                    <p className='text-gray-300'>Clique no projeto para ver os detalhes</p>
                    <div className='grid col-span-1 md:col-span-2 xl:grid-cols-3 gap-4'>
                            {projects.map((project, index) => (
                                <ProjectCard key={index} project={project} />
                            ))}
                        </div>
                    </div>

                </div>

                
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}