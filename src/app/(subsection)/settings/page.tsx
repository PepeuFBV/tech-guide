import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { CodeArea } from '@/components/ui/code-area'
import type { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Diretórios', href: 'directories' },
    { title: 'Configurações', href: 'settings' },
]

export default function Settings() {

    const code: string[] = [`{
    "name": "nextjs-react-typescript", //<-- Nome do projeto
    "version": "0.1.0", //<-- Versão do projeto
    "private": true,
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        "clean-dev": "rmdir /s /q .next && npm run dev",
        "clean-build": "rmdir /s /q .next && npm run build",
        "clean-install": "rmdir /s /q node_modules && npm ci",
        "prepare": "husky"
    },
    "dependencies": {
        "clsx": "^2.1.1",
        "next": "15.1.7",
        "react": "^19.0.0",
        "react-dom": "^19.0.0",
        "tailwind-merge": "^3.0.2"
    },
    "devDependencies": {
        "@babel/preset-env": "^7.26.9",
        "@babel/preset-react": "^7.26.3",
        "@babel/preset-typescript": "^7.26.0",
        "@eslint/eslintrc": "^3",
        "@types/node": "^20",
        "@types/react": "^19",
        "@types/react-dom": "^19",
        "eslint": "^9",
        "eslint-config-next": "15.1.7",
        "husky": "^9.1.7",
        "postcss": "^8",
        "tailwindcss": "^3.4.1",
        "typescript": "^5"
    }
}`]

    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center space-y-3 px-3 md:px-10'>
                <PathDisplay />
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-4'>
                        <h1 id='introduction' className='text-4xl font-bold'>Introdução</h1>
                        <p>É importante o entendimento dos diretórios do projeto, para que seja possivel a manutenção e se manter os padrões de projeto. Você também pode configurar o seu projeto de acordo com suas preferências, como alterar a versão, nome, metadados, etc.</p>
                        <p className='text-secondary'>Alguns arquivos de configuração serão abordados mais adiante, em outras seções.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-8'>
                        <div className='flex flex-col space-y-4'>
                            <h1 id='directories' className='text-4xl'>Diretórios</h1>
                            <p>Os diretórios do projeto são organizados de forma a manter a padronização e facilitar a manutenção, abaixo estão os diretórios e arquivos do projeto:</p>
                        </div>
                        <ul className='list-disc list-inside space-y-2'>
                            <li><code>public</code>: Pasta com arquivos estáticos que serão servidos pelo servidor. Principalmente imagens</li>
                            <li><code>src</code>: Diretório contendo o código fonte do projeto.</li>
                            <li><code>.husky</code>: Diretório contendo os scripts que serão utilizados na checagem de commits.</li>
                            <li><code>.next</code>: Diretório gerado pelo Next durante a execução do projeto, tem configurações, cache, etc.</li>
                            <li><code>node_modules</code>: Diretório em que seram armazenadas as dependências do projeto geradas pelo <code>package.json</code>.</li>
                            <li><code>.gitignore</code>: Arquivo onde ficam os diretórios e arquivos a serem ignorados pelo git.</li>
                            <li><code>components.json</code>: Arquivo JSON utilizado pelo shadcn para a adição de novos componentes por meio de sua <span className='italic'>CLI</span> (Command Line Interface).</li>
                            <li><code>eslint.config.mjs</code>: Onde ficam os arquivos de configuração do ESLint.</li>
                            <li><code>LICENSE</code>: Licensa da codebase.</li>
                            <li><code>next.config.ts</code>: Arquivo de configurações do Next.</li>
                            <li><code>package.json</code>: Arquivo de dependências do seu projeto, além de versão atual e nome.</li>
                            <li><code>package-lock.json</code>: Arquivo de dependências do seu projeto, gerado pelo <code>package.json</code>.</li>
                            <li><code>postcss.config.mjs</code>: Arquivo de configurações do PostCSS.</li>
                            <li><code>README.md</code>: Arquivo readme do projeto que será utilizado pelo Github.</li>
                            <li><code>tailwind.config.ts</code>: Arquivo de configurações do TailwindCSS.</li>
                            <li><code>tsconfig.json</code>: Arquivo JSON de configuração do Typescript em relação ao React e Next.</li>
                            <li><code>next-env.d.ts</code>: Arquivo gerado pelo Next durante a sua execução, assim como o diretório <code>.next</code>.</li>
                        </ul>
                        <p className='text-secondary'>A maioria dos diretórios e arquivos acima serão explorados em suas respectivas seções, mas abaixo abordaremos alguns deles.</p>
                        <div className='flex flex-col space-y-4'>
                            <h2 className='text-3xl'>Diretório <code>public</code></h2>
                            <p>Onde ficam os arquivos estáticos do projeto, como imagens, arquivos pdf para download, svgs, etc. É composto por 3 principais subdiretórios:</p>
                        </div>
                        <ul className='list-disc list-inside space-y-2'>
                            <li><code>files</code>: Armazenamento para arquivos de texto e que não sejam imagens de forma geral.</li>
                            <li><code>icons</code>: Onde ficarão os icones da aplicação e icones de uso geral (formato svg).</li>
                            <li><code>images</code>: Onde ficarão imagens png, jpg ou jpeg da aplicação, imagens mais pesadas.</li>
                        </ul>
                        <div className='flex flex-col space-y-4'>
                            <h2 className='text-3xl'>Diretório <code>src</code></h2>
                            <p>É o principal diretório do projeto, contém todo código fonte que gerará a aplicação e é composto pelos seguintes subdiretórios:</p>
                        </div>
                        <ul className='list-disc list-inside space-y-2'>
                            <li><code>app</code>: Onde ficam os arquivos de fonte que o Next chamará, além de um arquivo de css global e sistema de roteamento em seus subdiretórios.</li>
                            <li><code>components</code>: Onde ficará os seus componentes, sendo <code>ui</code> para componentes comuns de UI e <code>core</code> para componentes CORE da sua aplicação, menos generalizados.</li>
                            <li><code>data</code>: Usado para arquivos contendo dados estáticos da sua aplicação.</li>
                            <li><code>hooks</code>: Onde se armazenará os hooks da sua aplicação.</li>
                            <li><code>services</code>: Armazenamento de arquivos de servico da aplicação. Ex. chamada de API's externas ou internas, conexão com banco de dados, etc.</li>
                            <li><code>tests</code>: Onde ficarão os arquivos de testes para a aplicação, caso haja.</li>
                            <li><code>types</code>: Arquivos <code>ts</code> ou <code>tsx</code> que descrevem os tipos para os dados.</li>
                            <li><code>utils</code>: Onde ficam as funções de utilidade interna comuns da aplicação, caso haja a interação com bibliotecas, se pode utilizar o subdiretório <code>lib</code>.</li>
                        </ul>
                        <p className='text-secondary'>Versões antigas do Next utilizavam outra organização de diretórios na pasta <code>app</code>, <code>pages</code> era um diretório comum em que seriam organizadas as suas páginas para roteamento.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h1 id='settings' className='text-4xl'>Configurações</h1>
                            <p>Por enquanto, ainda não mexeremos com arquivos de configuração a fundo, as configurações serão melhor abordadas em suas respectivas seções.</p>
                            <p>De começo, podemos definir um nome para nosso projeto no arquivo <code>package.json</code>, além de definir uma versão inicial para a aplicação.</p>
                            <p className='text-secondary'>A versão inicial é importante para que possamos controlar as versões da aplicação, além de ser um padrão de mercado. Recomendamos a utilização de <code>1.0.0-SNAPSHOT</code> para a primeira versão.</p>
                        </div>
                        <CodeArea title='package.json' code={code[0]} language='json' />
                    </div>
                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
