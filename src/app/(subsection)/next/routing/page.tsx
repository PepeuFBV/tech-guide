import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import type { Topic } from '@/types/topic'
import VisitLink from '@/components/ui/visit-link'
import { CodeArea } from '@/components/ui/code-area'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Como funciona?', href: 'how-it-works' },
    { title: 'Layouts', href: 'layouts' },
    { title: 'Navegação', href: 'navigation' },
    { title: 'Rotas Dinâmicas', href: 'dynamic-routes' },
    { title: 'Página não encontrada', href: 'page-not-found' },
]

export default function Introduction() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 id='introduction' className='text-4xl'>Introdução</h1>
                    <p>O roteamento na framework Next é feito de forma simples e eficiente. Abaixo será apresentado como funciona o roteamento e como utiliza-lo de maneira proveitosa.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='how-it-works' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Como funciona?</h2>
                    <p>O roteamento no Next é chamado de roteamento baseado em diretórios. Isso significa que o Next irá criar rotas baseadas nos arquivos que estão dentro da pasta <code>app</code>. Primeiramente, o Next procurará o seu arquivo <code>page.tsx</code> do seu diretório raiz (<code>app</code>), está será a página carregada na rota <code>/</code>.</p>
                    <p>E quaisquer outros sub-diretórios dentro de <code>app</code> serão considerados como rotas. Por exemplo, se você criar um diretório chamado <code>about</code> dentro de <code>app</code>, o Next irá criar uma rota chamada <code>/about</code> e irá carregar o arquivo <code>page.tsx</code> dentro do diretório <code>about</code>.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='layouts' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Layouts</h2>
                    <p>Os arquivos <code>layout.tsx</code> servem de esqueleto para as páginas do seu site. Eles são utilizados para definir elementos comuns à páginas do diretório e sub-diretórios em relação ao que está presente.</p>
                    <p>Aplicações Next já vem com um arquivo <code>layout.tsx</code> padrão no diretório raiz das rotas, esse arquivo é utilizado para definir o layout padrão do site, portanto, esse layout é aplicado em TODAS as páginas do site (inclusive em sub-diretórios). Caso criassemos um sub-diretório chamado <code>about</code> e criassemos um arquivo <code>layout.tsx</code> dentro dele, esse layout seria aplicado apenas nas páginas do diretório e sub-diretórios de <code>about</code>.</p>
                    <h3 className='text-2xl'>Sobre o layout raiz</h3>
                    <p>No layout padrão do nosso sistema de rotas, encontramos algumas coisas que são importantes para o funcionamento do site:</p>
                    <ul className='list-disc pl-5 space-y-2 my-4'>
                        <li>Componente <code>Head</code> para definir o título da página e metadados</li>
                        <li>Metadados da nossa aplicação</li>
                        <li>As fontes da aplicação</li>
                    </ul>
                    <p>Esses são os elementos que são comuns à todas as páginas do site, e são definidos no layout padrão. É importante que esses dados sejam definidos no layout padrão para que todas as páginas do site tenham essas informações.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='navigation' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Navegação</h2>
                    <p>A navegação entre páginas no Next é feita através do componente <code>Link</code> do Next. O componente <code>Link</code> é utilizado para criar links entre páginas do site, e é muito importante devido ao fato de que o componente é otimizado para o Next, fazendo com que a navegação entre páginas seja mais rápida e eficiente.</p>
                    <p>Também pode se usar o hook <code>useRouter</code> da biblioteca <code>navigation</code> para realizar a navegação programaticamente.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='dynamic-routes' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Rotas Dinâmicas</h2>
                    <p>Rotas dinâmicas são rotas que são geradas dinamicamente a partir de um conjunto de dados. Por exemplo, se você tem um blog e quer criar uma rota para cada postagem, você pode criar um diretório chamado <code>posts</code> e dentro dele criar um arquivo chamado <code>[slug].tsx</code>. O Next irá criar uma rota para cada arquivo dentro do diretório <code>posts</code> e irá passar o valor do <code>slug</code> como parâmetro para a página.</p>
                    <p>Rotas dinâmicas são muito úteis quando você tem um conjunto de dados que você quer criar uma rota para cada item do conjunto de dados. Elas são muito utilizadas em blogs, e-commerces e sistemas de gerenciamento de conteúdo.</p>
                    <CodeArea link='/next/routing/post.tsx' />
                    <p className='text-secondary'>Veja mais como criar rotas dinâmicas <VisitLink href='https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes'>nessa página</VisitLink> da documentação do Next.js.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='page-not-found' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Página não encontrada</h2>
                    <p>Quando uma rota não é encontrada, o Next irá carregar o arquivo <code>not-found.tsx</code> do diretório raiz. Esse arquivo é utilizado para criar uma página de erro 404 personalizada para o seu site.No nosso template, por exemplo, a página não encontrada está com uma página padrão da Seed que é exibida quando uma rota não é encontrada.</p>
                    <p>É importante que você crie uma página de erro 404 personalizada para o seu site, pois isso irá melhorar a experiência do usuário e dar uma aparência mais profissional ao seu site.</p>
                </section>
            </div >
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div >
    )
}
