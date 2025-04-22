import React from 'react'
import PathDisplay from '@/components/core/path-display'
import PageIndex from '@/components/core/page-index/page-index'
import { Divider } from '@/components/ui/divider'
import VisitLink from '@/components/ui/visit-link'
import type { Topic } from '@/types/topic'
import { CodeArea } from '@/components/ui/code-area'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'O que é?', href: 'what-is-node' },
    { title: 'Instalação', href: 'installation' },
    { title: 'NPM (Node Package Manager)', href: 'npm' },
    { title: 'Scripts', href: 'scripts' },
]

const code: string[] = [`node - v
npm - v`
]

export default function Node() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Introdução</h1>
                    <p>Agora é a hora de aprender sobre o Node.js, um ambiente de execução JavaScript server-side eficiente e popular.</p>
                    <p className='text-secondary'>O Node será melhor abordado em seções futuras do guia, veremos como utilizar o Node Package Manager (NPM) e como configurar o ambiente de desenvolvimento de template.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='what-is-node' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>O que é?</h2>
                    <p>O Node.js é um ambiente de execução JavaScript server-side baseado no V8 do Chrome. Ele permite que você execute JavaScript no servidor, o que é útil para construir aplicações web escaláveis e rápidas. Com o Node.js, você pode criar aplicações web, APIs, scripts de automação e muito mais. Ele é amplamente utilizado por empresas como Netflix, Uber, PayPal e Walmart.</p>
                    <p>No nosso caso, utilizaremos o Node.js para executar o servidor de desenvolvimento do Next.js e para instalar pacotes JavaScript. Principalmente os comandos com <code>npm</code> e <code>npx</code>.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='nodejs' className='flex flex-col gap-4'>
                    <h2 id='installation' className='text-3xl'>Instalação</h2>
                    <p>Para instalar o <VisitLink href='https://nodejs.org/en' rel='noopener' target='_blank'>Node.js</VisitLink> vá até o site oficial e baixe a versão <span className='italic'>LTS</span> (Long Term Support) para o seu sistema operacional. O Node.js é instalado juntamente com o NPM (Node Package Manager), que é um gerenciador de pacotes JavaScript.</p>
                    <p>Após a instalação, você poderá verificar se o Node foi instalado corretamente através do terminal.</p>
                    <CodeArea code={code[0]} language='bash' />
                    <p className='text-secondary'>Há também outros gerenciadores de pacotes JavaScript, como o Yarn ou Bun. No entanto, o NPM é o mais utilizado e é instalado automaticamente com o Node.js. Pesquise mais sobre essas ferramentas e escolha a que melhor se adequa às suas preferências.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='npm' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>NPM (Node Package Manager)</h2>
                    <p>O NPM é um gerenciador de pacotes JavaScript que vem instalado com o Node.js. Ele permite que você instale, compartilhe e gerencie pacotes JavaScript de forma fácil. Você pode instalar pacotes localmente em um projeto ou globalmente no seu sistema.</p>
                    <p>Os pacotes JavaScript são bibliotecas de código JavaScript que você pode usar em seus projetos. Eles são publicados no NPM por desenvolvedores de todo o mundo e podem ser instalados em seus projetos com um simples comando.</p>
                    <p>Podemos rapidamente baixar todas as dependências de um projeto e executar scripts com o comando. Veja o comando abaixo, o mesmo serve para baixar todas as dependências de um projeto, definidas no arquivo <code>package.json</code>:</p>
                    <CodeArea code={`npm install`} language='bash' />
                    <p>O comando acima criará um arquivo <code>package-lock.json</code> que contém a versão exata de cada pacote instalado. Isso garante que o projeto seja reproduzível em diferentes ambientes e evita problemas de compatibilidade. Além disso, cria o diretório <code>node_modules</code> que contém todos os pacotes instalados.</p>
                    <h3 className='text-2xl'><code>package.json</code></h3>
                    <p>O arquivo <code>package.json</code> é um arquivo de manifesto para um projeto Node.js. Ele contém metadados sobre o projeto, como nome, versão, descrição, scripts, dependências e muito mais. O NPM usa o arquivo <code>package.json</code> para instalar pacotes, executar scripts e gerenciar dependências.</p>
                    <CodeArea link='/ecosystem/node/package.json' />
                    <p>Como você pode ver, o arquivo <code>package.json</code> contém informações sobre o projeto, como nome, versão, scripts e dependências. Você pode personalizar o arquivo <code>package.json</code> para atender às necessidades do seu projeto. Veja a seguir uma descrição dos campos mais comuns do arquivo <code>package.json</code>:</p>
                    <ul className='list-disc list-inside space-y-2 mt-4'>
                        <li><code>name</code>: O nome do projeto.</li>
                        <li><code>version</code>: A versão do projeto.</li>
                        <li><code>private</code>: Se o projeto é privado ou público.</li>
                        <li><code>scripts</code>: Scripts personalizados para executar tarefas.</li>
                        <li><code>dependencies</code>: Dependências do projeto.</li>
                        <li><code>devDependencies</code>: Dependências de desenvolvimento do projeto.</li>
                    </ul>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='scripts' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Scripts</h2>
                    <p>Os scripts no arquivo <code>package.json</code> são comandos personalizados que você pode executar com o NPM. Eles são úteis para automatizar tarefas comuns, como iniciar o servidor de desenvolvimento, construir o projeto, executar testes e muito mais.</p>
                    <p>Os scripts do arquivo <code>package.json</code> do projeto serão explicados abaixo:</p>
                    <ul className='list-disc list-inside space-y-2'>
                        <li><code>dev</code>: Inicia o servidor de desenvolvimento do Next.js.</li>
                        <li><code>build</code>: Constrói o projeto Next.js. É usado pelo servidor de produção.</li>
                        <li><code>start</code>: Inicia o servidor de produção do Next.js.</li>
                        <li><code>lint</code>: Executa o linter do Next.js. Esse comando também é chamado pelo Husky antes de cada commit.</li>
                        <li><code>clean-dev</code>: Remove a pasta <code>.next</code> e inicia o servidor de desenvolvimento, recriando essa pasta (debug).</li>
                        <li><code>clean-build</code>: Remove a pasta <code>.next</code> e constrói o projeto.</li>
                        <li><code>clean-install</code>: Remove a pasta <code>node_modules</code> e re-instala as dependências (debug).</li>
                        <li><code>prepare</code>: Configuração do Husky. Não será necessário rodar.</li>
                    </ul>
                    <p>Rode os comandos acima com:</p>
                    <CodeArea code={`npm run [command]`} language='bash' />
                    <p className='text-secondary'>Recomenda-se a execução de <code>npm run lint</code> e <code>npm run build</code> antes do envio de uma PR para o repositório. Isso garante que o código esteja funcionando corretamente e seguindo os padrões definidos.</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
