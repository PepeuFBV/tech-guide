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
    { title: 'Configurações', href: 'settrings' },
    { title: 'Scripts', href: 'scripts' },
]

export default function Node() {

    const code = [`node -v
npm -v`]

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
                        <p>No nosso caso, utilizaremos o Node.js para executar o servidor de desenvolvimento do Next.js e para instalar pacotes JavaScript. Principalmente os comandos com <code>npm</code> e <code>npx</code>.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h3 id='installation' className='text-3xl'>Instalação</h3>
                            <p>Para instalar o <VisitLink href='https://nodejs.org/en' rel='noopener' target='_blank'>Node.js</VisitLink> vá até o site oficial e baixe a versão LTS (Long Term Support) para o seu sistema operacional. O Node.js é instalado juntamente com o NPM (Node Package Manager), que é um gerenciador de pacotes JavaScript.</p>
                            <p>Após a instalação, você poderá verificar se o Node foi instalado corretamente através do terminal.</p>
                        </div>
                        <CodeArea code={code[0]} language='bash' />
                        <p className='text-secondary'>Há também outros gerenciadores de pacotes JavaScript, como o Yarn ou Bun. No entanto, o NPM é o mais utilizado e é instalado automaticamente com o Node.js. Pesquise mais sobre essas ferramentas e escolha a que melhor se adequa às suas preferências.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='npm' className='text-3xl'>NPM (Node Package Manager)</h2>
                            <p>O NPM é um gerenciador de pacotes JavaScript que vem instalado com o Node.js. Ele permite que você instale, compartilhe e gerencie pacotes JavaScript de forma fácil. Você pode instalar pacotes localmente em um projeto ou globalmente no seu sistema.</p>
                            <p>Os pacotes JavaScript são bibliotecas de código JavaScript que você pode usar em seus projetos. Eles são publicados no NPM por desenvolvedores de todo o mundo e podem ser instalados em seus projetos com um simples comando.</p>
                            <p>Podemos rapidamente baixar todas as dependências de um projeto e executar scripts com o comando. Veja o comando abaixo, o mesmo serve para baixar todas as dependências de um projeto, definidas no arquivo <code>package.json</code>:</p>
                        </div>
                        <CodeArea code={`npm install`} language='bash' />
                        <div className='flex flex-col space-y-4'>
                            <p>O comando acima criará um arquivo <code>package-lock.json</code> que contém a versão exata de cada pacote instalado. Isso garante que o projeto seja reproduzível em diferentes ambientes e evita problemas de compatibilidade. Além disso, cria o diretório <code>node_modules</code> que contém todos os pacotes instalados.</p>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <h3 className='text-2xl'><code>package.json</code></h3>
                            <p>O arquivo <code>package.json</code> é um arquivo de manifesto para um projeto Node.js. Ele contém metadados sobre o projeto, como nome, versão, descrição, scripts, dependências e muito mais. O NPM usa o arquivo <code>package.json</code> para instalar pacotes, executar scripts e gerenciar dependências.</p>

                        </div>
                    </div>
                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
