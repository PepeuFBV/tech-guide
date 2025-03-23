import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { CodeArea } from '@/components/ui/code-area'
import type { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'O que é?', href: 'what-is-next' },
    { title: 'Renderização Server Side', href: 'server-side-rendering' },
]

export default function Introduction() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center space-y-3 px-3 md:px-10'>
                <PathDisplay />
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-4'>
                        <h1 id='introduction' className='text-4xl'>Introdução</h1>
                        <p>Next.js é um framework React para produção, ele é construído sobre o React. Veremos mais sobre como o Next.js funciona e como podemos utilizá-lo para criar aplicações web modernas e performáticas.</p>
                        <p>Ele é otimizado para performance, contendo renderização server-side e geração estática de páginas, além de outras funcionalidades que veremos ao longo do guia.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-4'>
                        <h2 id='what-is-next' className='text-3xl'>O que é?</h2>
                        <p>Next.js é um framework full-stack para React, permitindo o desenvolvimento de aplicações tanto do lado do cliente (client-side) quanto do lado do servidor (server-side). Ele se destaca por sua abordagem híbrida de renderização, oferecendo suporte para Server-Side Rendering (<span className='italic'>SSR</span>) e Static Site Generation (<span className='italic'>SSG</span>). Com isso, os desenvolvedores podem escolher a melhor estratégia para cada página, otimizando o carregamento e a experiência do usuário.</p>
                        <p>Além disso, Next.js traz benefícios como roteamento automático baseado em arquivos, suporte a API Routes para construção de backends leves e integração simplificada com diversas ferramentas do ecossistema.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='server-side-rendering' className='text-3xl'>Renderização Server Side - <span className='italic'>SSR</span></h2>
                            <p>O Server-Side Rendering (<span className='italic'>SSR</span>) é uma das principais funcionalidades do Next.js e permite que as páginas sejam renderizadas no servidor antes de serem enviadas ao navegador do usuário. Isso melhora o SEO, pois os motores de busca conseguem indexar o conteúdo da página mais facilmente. Além disso, o <span className='italic'>SSR</span> reduz o tempo de carregamento inicial, pois o usuário recebe uma página já processada pelo servidor.</p>
                            <p className='text-secondary'>Imagine que páginas de lado servidor são devolvidas ao navegador já com o HTML gerado, enquanto páginas de lado cliente são devolvidas ao navegador com um esqueleto HTML que é preenchido com JavaScript.</p>
                            <p>Esse tipo de tratamento é essencial para a otimização de páginas web, permitindo que o servidor faça o processamento pesado e entregue ao cliente apenas o que é necessário para a renderização da página. O Next oferece suporte a essa funcionalidade de forma nativa, facilitando a implementação de SSR em nossos projetos, entretanto, caso seja necessária a criação de um componente ou página específica que seja <span>client-side</span>, é possivel fazer isso de forma simples e eficiente, veja abaixo:</p>
                        </div>
                        <CodeArea link='/next/introduction/client-side.tsx' />
                    </div>
                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
