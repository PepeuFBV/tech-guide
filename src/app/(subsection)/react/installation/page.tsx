import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { CodeArea } from '@/components/ui/code-area'
import { Divider } from '@/components/ui/divider'
import VisitLink from '@/components/ui/visit-link'
import { Topic } from '@/types/topic'
import React from 'react'

const code = [
    `node -v
npm -v`, `cd nextjs-react-typescript
npm install`
]

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Techstack', href: 'techstack' },
    { title: 'Instalação', href: 'installation' },
]

export default function Introduction() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center space-y-3 px-3 md:px-10'>
                <PathDisplay />
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-4'>
                        <h1 id='introduction' className='text-4xl font-bold'>enstalassão</h1>
                        <p className='text-secondary'>Está parte do guia abordará o ecossistema de forma geral, apresentando as tecnologias abaixo, repósitorio e instalação do projeto.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-8'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='techstack' className='text-3xl'>Techstack</h2>
                            <p>As tecnologias que serão usadas no ecossistema no final do guia contém algumas das tecnologias mais utilizadas no mercado. Elas serão abordadas em detalhes ao longo do guia, então não se preocupe se você não tem experiência com alguma delas.</p>
                        </div>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='installation' className='text-3xl'>Instalação</h2>
                            <p className='text-secondary'>Para mais detalhes sobre as ferramentas abaixo veja as suas respectivas seções: <VisitLink href='/node'>Node</VisitLink></p>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <h3 className='text-2xl'>Node e NPM</h3>
                            <p>Para instalar o ecossistema, você precisará ter o <VisitLink href='/node'>Node</VisitLink> instalado em sua máquina. Com o mesmo instalado, você poderá instalar as tecnologias do ecossistema através do gerenciador de pacotes npm (node package manager) ou yarn (gerenciador de pacotes alternativo). Não se preocupe, o npm é instalado automaticamente com o Node.</p>
                            <p>Para instalar o Node.js, acesse o site oficial [<VisitLink href='https://nodejs.org/en'>aqui</VisitLink>] e baixe a versão <span className='italic'>LTS</span> (Long Term Support), está versão garante suporte a longo prazo e estabilidade. Após a instalação, você poderá verificar se o Node foi instalado corretamente através do terminal.</p>
                        </div>
                        <CodeArea code={code[0]} language='bash' />
                        <div className='flex flex-col space-y-4'>
                            <h3 className='text-2xl'>Repositório</h3>
                            <p>Para instalar o ecossistema, você pode clonar o repositório oficial do guia através do comando abaixo:</p>
                        </div>
                        <CodeArea code={`git clone https://github.com/seedabit/nextjs-react-typescript.git`} language='bash' />
                        <p>Após clonar o repositório, você pode acessar a pasta do projeto e instalar as dependências do projeto através do comando:</p>
                        <CodeArea code={code[1]} language='bash' />
                        <p>Agora o seu ambiente de desenvolvimento está pronto para começar a desenvolver aplicações com o nosso ecossistema.</p>
                    </div>
                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
