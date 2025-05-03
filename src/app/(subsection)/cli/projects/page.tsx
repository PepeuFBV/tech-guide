import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { CodeArea } from '@/components/ui/code-area'
import { Divider } from '@/components/ui/divider'
import VisitLink from '@/components/ui/visit-link'
import { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Tipos de projetos', href: 'project-types' }
]

export default function CLI() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Introdução</h1>
                    <p>A CLI da Seed a Bit permite a criação de projetos de forma rápida e fácil. Você pode criar projetos template para web e backend com o uso de apenas um comando.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='commands' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Tipos de projetos</h2>
                    <p>Atualmente, a CLI da Seed a Bit possui dois tipos de projetos disponíveis para criação: web e backend. Você pode criar um projeto web ou um projeto backend utilizando o comando <code>create</code>.</p>
                    <p>Para criar um projeto web, utilize o seguinte comando:</p>
                    <CodeArea code={`npx @seed-a-bit/cli create [nome do projeto] --web`} language='plaintext' showLineNumbers={false} />
                    <p>Para criar um projeto backend, utilize o seguinte comando:</p>
                    <CodeArea code={`npx @seed-a-bit/cli create [nome do projeto] --backend`} language='plaintext' showLineNumbers={false} />
                    <p className='text-secondary'>Se o tipo de projeto não for especificado, o projeto será criado como um projeto web.</p>
                    <p>A CLI utiliza dos próprios projetos template da Seed a Bit para criar os projetos. Você pode encontrar o repositório do projeto <VisitLink href='https://github.com/seedabit/nextjs-react-typescript' target='_blank'>web</VisitLink> e o repositório do projeto <VisitLink href='https://github.com/seedabit/express-backend-template' target='_blank'>backend</VisitLink>.</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
