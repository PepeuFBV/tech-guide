import React from 'react'
import { Divider } from '@/components/ui/divider'
import PageIndex from '@/components/core/page-index/page-index'
import type { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Pré-requisitos', href: 'pre-requisites' },
    { title: 'O que será abordado?', href: 'what-will-be-covered' },
    { title: 'Como usar este guia?', href: 'how-to-use-this-guide' },
]

export default function Home() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center space-y-10 px-3 md:px-10'>
                <div className='flex flex-col space-y-4'>
                    <h1 id='introduction' className='text-4xl font-bold'>Introdução</h1>
                    <p className='text-secondary'>Este é um guia voltado para o aprendizado sobre o desenvolvimento de aplicações web com React e Next. Aprenda a criar aplicações web modernas com as tecnologias mais utilizadas no mercado.</p>
                    <p>Ao longo deste guia, abordaremos desde conceitos fundamentais até práticas avançadas para o desenvolvimento de aplicações eficientes, escaláveis e performáticas. Se você está começando ou deseja aprimorar suas habilidades, este material será um ótimo recurso.</p>
                </div>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <div className='flex flex-col space-y-4'>
                    <h2 id='pre-requisites' className='text-2xl font-semibold'>Pré-requisitos</h2>
                    <p>Para aproveitar melhor este guia, é recomendado ter conhecimentos básicos em HTML, CSS e JavaScript. Além disso, alguma familiaridade com conceitos básicos de programação e o uso de terminal serão úteis.</p>
                    <p>Se você ainda não tem experiência com essas tecnologias, não se preocupe! Vamos abordar os conceitos essenciais ao longo do caminho.</p>
                </div>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <div className='flex flex-col space-y-4'>
                    <h2 id='what-will-be-covered' className='text-2xl font-semibold'>O que será abordado?</h2>
                    <ul className='list-disc list-inside space-y-2'>
                        <li>Fundamentos de React</li>
                        <li>Fundamentos de Typescript</li>
                        <li>Componentes e Props</li>
                        <li>Hooks, Estado e Ciclo de Vida</li>
                        <li>Estilização com TailwindCSS</li>
                        <li>Introdução ao Next.js</li>
                        <li>Roteamento e Navegação</li>
                        <li>APIs e Requisições HTTP</li>
                        <li>Deploy de Aplicações</li>
                    </ul>
                </div>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <div className='flex flex-col space-y-4'>
                    <h2 id='how-to-use-this-guide' className='text-2xl font-semibold'>Como usar este guia?</h2>
                    <p>Este guia foi dividido em seções, cada uma abordando um tópico específico. Você pode navegar entre as seções utilizando o menu lateral à esquerda. É sugerido que você siga a ordem das seções para um aprendizado mais eficiente.</p>
                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
