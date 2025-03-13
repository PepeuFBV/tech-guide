import React from 'react'
import PathDisplay from '@/components/core/path-display'
import PageIndex from '@/components/core/page-index/page-index'
import { Divider } from '@/components/ui/divider'
import type { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'O que é?', href: 'what-is-node' },
    { title: 'Instalação', href: 'installation' },
    { title: 'NPM (Node Package Manager)', href: 'npm' },
    { title: 'Configurações', href: 'settrings' },
    { title: 'Scripts', href: 'scripts' },
]

export default function Node() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center space-y-3 px-3 md:px-10'>
                <PathDisplay />
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-4'>
                        <h1 id='introduction' className='text-4xl font-bold'>Introdução</h1>
                        <p>Agora é a hora de aprender sobre o Node.js, um ambiente de execução JavaScript server-side eficiente e popular.</p>
                        <p className='text-secondary'>O Node será melhor abordado em seções futuras do guia, veremos como utilizar o Node Package Manager (NPM) e como configurar o ambiente de desenvolvimento de template.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-4'>
                        <h2 id='what-is-node' className='text-3xl'>O que é?</h2>
                        <p>O Node.js é um ambiente de execução JavaScript server-side baseado no V8 do Chrome. Ele permite que você execute JavaScript no servidor, o que é útil para construir aplicações web escaláveis e rápidas. Com o Node.js, você pode criar aplicações web, APIs, scripts de automação e muito mais. Ele é amplamente utilizado por empresas como Netflix, Uber, PayPal e Walmart.</p>
                        <p>No nosso caso, utilizaremos o Node.js para executar o servidor de desenvolvimento do Next.js e para instalar pacotes JavaScript. Principalmente os comandos com `npm` e `npx`.</p>
                    </div>
                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
