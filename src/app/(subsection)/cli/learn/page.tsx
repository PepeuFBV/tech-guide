import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { CodeArea } from '@/components/ui/code-area'
import { Divider } from '@/components/ui/divider'
import VisitLink from '@/components/ui/visit-link'
import { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Repositórios Seed a Bit', href: 'seed-a-bit-repositories' },
    { title: 'Como utilizar a CLI', href: 'how-to-use-cli' },
    { title: 'Comandos', href: 'commands' },
]

export default function CLI() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Introdução</h1>
                    <p>Abaixo você conhecerá o CLI da Seed a Bit, uma ferramenta que facilita a criação de projetos e a execução de tarefas comuns. O CLI é uma interface de linha de comando que permite interagir com o sistema através de comandos digitados no terminal. Será possível criar novos projetos e importar componentes comuns para o seu projeto rapidamente e facilmente.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='seed-a-bit-repositories' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Repositórios Seed a Bit</h2>
                    <p>A CLI está utilizando repositórios Seed a Bit, ambos repositórios de criação de projetos (<VisitLink href='https://github.com/seedabit/nextjs-react-typescript'>web</VisitLink> e <VisitLink href='https://github.com/seedabit/express-backend-template'>backend</VisitLink>) e de <VisitLink href='https://github.com/seedabit/ui-components'>componentes ui</VisitLink>. Esses repositórios são automaticamente utilizados pela CLI.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='how-to-use-cli' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Como utilizar o CLI</h2>
                    <p>Para utilizar a CLI, você precisará ter o Node.js instalado em sua máquina. Você pode baixar a versão mais recente do Node.js no site oficial: <VisitLink href='https://nodejs.org/en/download/' target='_blank'>nodejs.org</VisitLink>. Após a instalação, você poderá acessar o CLI através do terminal. Execute o seguinte comando para acessar a aba de ajuda da CLI:</p>
                    <CodeArea code={`npx @seed-a-bit/cli help`} language='bash' />
                    <p className='text-secondary'>Não é necessário instalar a CLI para a utilização, ela é executada diretamente pela publicação do npm.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='commands' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Comandos</h2>
                    <p className='text-secondary'>É possível se acessar a lista de comandos disponíveis através do comando <code>help</code> da CLI.</p>
                    <p>A CLI possui diversos comandos que podem ser utilizados para criar novos projetos, importar componentes e executar tarefas comuns. Abaixo estão os comandos disponíveis:</p>
                    <ul className='list-disc list-inside space-y-2 my-4'>
                        <li><code>npx @seed-a-bit/cli create [nome do projeto] --[tipo do projeto]</code></li>
                        <li><code>npx @seed-a-bit/cli add [nome do componente]</code></li>
                    </ul>
                    <p className='text-secondary'>Os tipos de projetos disponíveis são: web (next e react com typescript e tailwindcss) e backend (express e prisma com typescript).</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
