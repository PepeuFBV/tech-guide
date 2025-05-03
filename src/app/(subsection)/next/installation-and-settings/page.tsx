import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { CodeArea } from '@/components/ui/code-area'
import VisitLink from '@/components/ui/visit-link'
import type { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Requerimentos', href: 'requirements' },
    { title: 'Instalação', href: 'installation' },
    { title: 'Configuração', href: 'settings' },
]

const code: string[] = [`node -v
npm -v`]

export default function Introduction() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Introdução</h1>
                    <p>A instalação do Next.js é muito simples e rápida. Abaixo você encontra o passo a passo para instalar o Next.js em seu projeto.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='requirements' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Requerimentos</h2>
                    <p>É necessário que se tenha o Node e o npm instalados em sua máquina para que o Next.js funcione corretamente. O Node deve ser da versão 18.18 ou superior.</p>
                    <p>Para verificar se o Node e o npm estão instalados, execute os comandos abaixo no terminal:</p>
                    <CodeArea code={`npx create-next-app@latest`} language='bash' />
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='installation' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Instalação</h2>
                    <p>O nosso projeto já está completamente configurado e pronto para ser utilizado. </p>
                    <h3 className='text-2xl'>Instalação Automática</h3>
                    <p>O nosso projeto já está completamente configurado e pronto para ser utilizado. Porém, caso você deseje criar um novo projeto, podemos criá-lo com a CLI do Next.js.</p>
                    <CodeArea code={code[0]} language='bash' />
                    <p>A CLI do Next apresentará algumas opções para a criação do seu projeto, para o template padrão, basta aceitar as opções padrão apresentadas.</p>
                    <p className='text-secondary'>No nosso projeto, utilizamos o sistema de roteamento mais recente, por meio do diretório <code>/app</code> ao invés de <code>/pages</code>.</p>
                    <h3 className='text-2xl'>Instalação Manual</h3>
                    <p>Também podemos instalar o Next.js manualmente à um projeto. Primeiramente execute <code>npm init -y</code> para criar um arquivo <code>package.json</code> em seu projeto.</p>
                    <p>Instalaremos as dependências necessárias para o Next.js funcionar corretamente.</p>
                    <CodeArea code={`npm install next@latest react@latest react-dom@latest`} language='bash' />
                    <p>Em seguida, adicione os scripts necessários ao seu arquivo <code>package.json</code>:</p>
                    <CodeArea link='/next/installation-and-settings/scripts.json' />
                    <p>Como o Next utiliza um sistema de roteamento baseado em diretórios, é necessário criar um diretório chamado <code>app</code> na raiz (após o diretório <code>src</code>) do projeto. Nele você colocará os arquivos de rota do seu projeto.</p>
                    <p>Dentro desse diretório, crie um arquivo chamado <code>layout.tsx</code> e <code>page.tsx</code> adicione o seguinte código:</p>
                    <CodeArea link='/next/installation-and-settings/layout.tsx' />
                    <CodeArea link='/next/installation-and-settings/page.tsx' />
                    <p>O arquivo <code>layout.tsx</code> serve como um layout padrão para todas as páginas do seu projeto. O arquivo <code>page.tsx</code> é a página inicial do seu projeto. Mais informações sobre o sistema de roteamento do Next.js podem ser encontradas <VisitLink href='/next/navigation'>aqui</VisitLink>.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='settings' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Configuração</h2>
                    <p>A configuração do Next.js é muito simples e rápida. O Next.js já vem com uma série de configurações padrão que podem ser alteradas conforme a necessidade do seu projeto. O Typescript já vem configurado por padrão no Next.js, assim como o ESLint.</p>
                    <p>Caso deseje, é possivel alterar as configurações do Next.js, Typescript e ESLint; nos seus respectivos arquivos de configuração (<code>next.config.ts</code>, <code>tsconfig.json</code> e <code>eslint.config.mjs</code>).</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
