import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import VisitLink from '@/components/ui/visit-link'
import { CodeArea } from '@/components/ui/code-area'
import { TechCard } from '@/components/ui/tech-card'
import { Divider } from '@/components/ui/divider'
import { NodeJS } from '@/components/ui/icons/node'
import { NextJS } from '@/components/ui/icons/nextjs'
import { ReactJS } from '@/components/ui/icons/reactjs'
import { Typescript } from '@/components/ui/icons/typescript'
import { TailwindCSS } from '@/components/ui/icons/tailwindcss'
import { Husky } from '@/components/ui/icons/husky'
import { EsLint } from '@/components/ui/icons/eslint'
import { GithubWatchButton } from '@/components/ui/github-watch-button'
import type { Topic } from '@/types/topic'
import type { Tech } from '@/types/tech'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Techstack', href: 'techstack' },
    { title: 'Instalação', href: 'installation' },
]

const tech: Tech[] = [
    {
        title: 'Typescript',
        description: 'JavaScript com tipagem estática para maior segurança e produtividade.',
        icon: <Typescript />,
        href: '/typescript',
    },
    {
        title: 'TailwindCSS',
        description: 'Framework CSS utilitário para estilização rápida e eficiente.',
        icon: <TailwindCSS />,
        href: '/tailwind',
    },
    {
        title: 'EsLint',
        description: 'Ferramenta para identificar e corrigir problemas no seu código posterior à commit.',
        icon: <EsLint />,
        href: '/eslint',
    },
    {
        title: 'Husky',
        description: 'Ferramenta para prevenir commits ruins com hooks de Git.',
        icon: <Husky />,
        href: '/husky',
    },
    {
        title: 'Node.js',
        description: 'Ambiente de execução JavaScript server-side baseado no V8 do Chrome.',
        icon: <NodeJS />,
        href: '/node',
    },
    {
        title: 'React',
        description: 'Biblioteca JavaScript/Typescript para construir interfaces de usuário interativas.',
        icon: <ReactJS />,
        href: '/react/introduction',
    },
    {
        title: 'Next.js',
        description: 'Framework React para produção, com renderização server-side e geração estática.',
        icon: <NextJS />,
        href: '/next/introduction',
    },
]

export default function Introduction() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Introdução</h1>
                    <p className='text-secondary'>Está parte do guia abordará o ecossistema de forma geral, apresentando as tecnologias abaixo, repósitorio e instalação do projeto.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='techstack' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Techstack</h2>
                    <p>As tecnologias que serão usadas no ecossistema no final do guia contém algumas das tecnologias mais utilizadas no mercado. Elas serão abordadas em detalhes ao longo do guia, então não se preocupe se você não tem experiência com alguma delas.</p>
                    <div className='my-4 grid col-span-1 md:col-span-2 xl:grid-cols-3 gap-4'>
                        {tech.map((tech, index) => (
                            <TechCard key={index} tech={tech} />
                        ))}
                    </div>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='installation' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Instalação</h2>
                    <p className='text-secondary'>Para mais detalhes sobre as ferramentas acima veja as suas respectivas seções.</p>
                    <h3 className='text-2xl'>Node e NPM</h3>
                    <p>Para instalar o ecossistema, você precisará ter o <VisitLink href='/node'>Node</VisitLink> instalado em sua máquina. Com o mesmo instalado, você poderá instalar as tecnologias do ecossistema através do gerenciador de pacotes npm (node package manager) ou yarn (gerenciador de pacotes alternativo). Não se preocupe, o npm é instalado automaticamente com o Node.</p>
                    <p>Para instalar o Node.js, acesse o site oficial [<VisitLink href='https://nodejs.org/en' rel='noopener' target='_blank'>aqui</VisitLink>] e baixe a versão <span className='italic'>LTS</span> (Long Term Support), está versão garante suporte a longo prazo e estabilidade. Após a instalação, você poderá verificar se o Node foi instalado corretamente através do terminal.</p>
                    <CodeArea code={`node -v\nnpm -v`} language='bash' />
                    <h3 className='text-2xl'>Repositório</h3>
                    <GithubWatchButton href="https://github.com/seedabit/react-next-guide/subscription" ariaLabel='Watch seedabit/react-next-guide on GitHub' showCount />
                    <p>Para instalar o ecossistema, você pode clonar o repositório oficial do guia através do comando abaixo:</p>
                    <CodeArea code={`git clone https://github.com/seedabit/nextjs-react-typescript.git`} language='bash' />
                    <p>Após clonar o repositório, você pode acessar a pasta do projeto e instalar as dependências do projeto através do comando:</p>
                    <CodeArea code={`cd nextjs-react-typescript\nnpm install`} language='bash' />
                    <p>Agora o seu ambiente de desenvolvimento está pronto para começar a desenvolver aplicações com o nosso ecossistema.</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
