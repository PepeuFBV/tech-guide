import React from 'react'
import PathDisplay from '@/components/core/path-display'
import PageIndex from '@/components/core/page-index/page-index'
import { Divider } from '@/components/ui/divider'
import { CodeArea } from '@/components/ui/code-area'
import type { Topic } from '@/types/topic'
import VisitLink from '@/components/ui/visit-link'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'O que é?', href: 'what-is-eslint' },
    { title: 'Instalação', href: 'installation' },
    { title: 'Configuração', href: 'settings' },
    { title: 'Uso', href: 'usage' },
]

export default function ESLint() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center space-y-3 px-3 md:px-10'>
                <PathDisplay />
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-4'>
                        <h1 id='introduction' className='text-4xl'>Introdução</h1>
                        <p>O ESLint é uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript. Ele é altamente configurável e pode ser usado para manter um estilo de código consistente em um projeto.</p>
                        <p>No nosso ecossistema de desenvolvimento, o ESLint é uma ferramenta essencial para garantir a qualidade do código e evitar erros comuns.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-4'>
                        <h2 id='what-is-eslint' className='text-3xl'>O que é?</h2>
                        <p>ESLint é uma ferramenta de análise estática de código projetada para JavaScript e TypeScript. Ele examina seu código em busca de erros de sintaxe, inconsistências de formatação e possíveis bugs, com base em um conjunto de regras predefinidas ou personalizadas. Ao integrar o ESLint ao seu fluxo de trabalho, você pode:</p>
                        <ul className='list-disc list-inside space-y-2'>
                            <li>Identificar e corrigir problemas de código antes de executar o aplicativo.</li>
                            <li>Manter um estilo de código consistente em todo o projeto.</li>
                            <li>Melhorar a manutenibilidade e legibilidade do código.</li>
                            <li>Evitar erros comuns e práticas inseguras.</li>
                        </ul>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='installation' className='text-3xl'>Instalação</h2>
                            <p>No nosso projeto, o ESLint já está configurado e pronto para uso. Para instalar o ESLint em um novo projeto, você pode executar o seguinte comando:</p>
                        </div>
                        <CodeArea code={`npm install eslint --save-dev`} language='bash' />
                        <p>Depois de instalar o ESLint, você pode inicializar um arquivo de configuração usando o comando:</p>
                        <CodeArea code={`npx eslint --init`} language='bash' />
                        <p>Este comando irá guiá-lo através de um assistente de configuração para criar um arquivo de configuração personalizado para o seu projeto.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='settings' className='text-3xl'>Configuração</h2>
                            <p>O ESLint é altamente configurável, permitindo personalizar seu comportamento conforme as necessidades do seu projeto. A configuração geralmente é armazenada em um arquivo chamado <code>.eslintrc.js</code>, <code>.eslintrc.json</code> ou <code>.eslintrc.yaml</code>; no nosso caso, em <code>eslint.config.mjs</code>, um arquivo de modulo de Javascript. As configurações no nosso projeto são as seguintes:</p>
                        </div>
                        <CodeArea link='/ecosystem/eslint/eslint.config.mjs' />
                        <p>A maioria das configurações são importadas de pacotes de regras predefinidas, <code>next/core-web-vitals</code> e <code>next/typescript</code>. Você também pode adicionar regras personalizadas ao arquivo de configuração para atender às necessidades específicas do seu projeto.</p>
                        <p className='text-secondary'>Aprenda mais sobre as configurações disponíveis no <VisitLink href='https://eslint.org/docs/latest/use/configure/'>guia de configuração do ESLint</VisitLink>.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='usage' className='text-3xl'>Uso</h2>
                            <p className='text-secondary'>O ESLint está configurado, com ajuda do <VisitLink href='/husky'>Husky</VisitLink>, para ser executado automaticamente antes de cada commit. Isso garante que o código esteja em conformidade com as regras de estilo definidas no arquivo de configuração. O seu commit não será concluído se o ESLint encontrar problemas no código.</p>
                            <p>Para executar o ESLint em seu projeto, você pode usar o comando:</p>
                        </div>
                        <CodeArea code={`npm run lint`} language='bash' />
                        <div className='flex flex-col space-y-4'>
                            <p className='text-secondary'>O comando acima foi configurado no <code>package.json</code> para executar o ESLint em todos os arquivos JavaScript e TypeScript do projeto. Ele irá analisar o código em busca de problemas e exibir os resultados no terminal.</p>
                            <p><span className='font-bold'>Não recomendado -</span> para corrigir automaticamente os problemas identificados pelo ESLint, você pode executar o comando:</p>
                        </div>
                        <CodeArea code={`npx eslint . --fix`} language='bash' />
                    </div>
                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
