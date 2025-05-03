import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { CodeArea } from '@/components/ui/code-area'
import { Divider } from '@/components/ui/divider'
import { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Componentes', href: 'components' },
]

export default function CLI() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Introdução</h1>
                    <p>É possível utilizar a CLI para a adição de componentes e ferramentas em projetos já existentes. A CLI irá adicionar os componentes e ferramentas de acordo com o tipo de projeto que você está utilizando. Rapidamente será possível integrar e utilizar os componentes e ferramentas em seu projeto.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='commands' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Componentes</h2>
                    <p>Será possível acessar a lista de componentes disponíveis por meio do uso do comando <code>help</code>:</p>
                    <CodeArea code={`npx @seed-a-bit/cli add -help`} language='bash' />
                    <p>Atualmente, há dois componentes disponíveis para serem adicionados através da CLI:</p>
                    <ul className='list-disc list-inside space-y-2 my-4'>
                        <li><code>docs</code>: Documentação comum para projetos, há dois arquivos que serão adicionados, <code>LICENSE</code> e <code>CONTRIBUTING.md</code>, ambos com informações comuns para projetos Seed a Bit.</li>
                        <li><code>auth-client</code>: Um componente para utilização no frontend, que possui funcionalidades de autenticação e autorização para aplicações Next.</li>
                    </ul>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
