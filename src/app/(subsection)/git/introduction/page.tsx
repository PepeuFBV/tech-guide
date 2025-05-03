import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { CodeArea } from '@/components/ui/code-area'
import VisitLink from '@/components/ui/visit-link'
import type { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'O que é?', href: 'what-is-git' },
    { title: 'Instalação', href: 'installation' },
    { title: 'Configuração', href: 'settings' },
    { title: 'GitHub', href: 'github' },
]

export default function Introduction() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Git e Github</h1>
                    <p>Abaixo será explicado o que é o Git e o Github, como instalar e configurar o Git e como utilizar o Github nos padrões da empresa para armazenamento e versionamento de código em equipe. <span className='line-through'>Aprenderemos a criar um repositório, clonar, fazer o commit, pull e push de arquivos.</span></p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='what-is-git' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>O que é?</h2>
                    <p>O Git é um sistema de controle de versão distribuído, gratuito e de código aberto, projetado para lidar com tudo, desde projetos pequenos a muito grandes, com rapidez e eficiência. Podemos criar repositórios locais e remotos (Github), clonar repositórios, fazer commits, pull e push de arquivos, entre outras funcionalidades.</p>
                    <p>Com o Git, é possível manter um histórico de alterações, saber quem fez o que, quando e por quê. Além disso, é possível criar branches para desenvolver novas funcionalidades sem interferir no código principal, facilitando a colaboração em equipe.</p>
                    <p>Para saber mais sobre o Git, acesse a documentação oficial <a href='https://git-scm.com/doc'>aqui</a>.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='installation' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Instalação</h2>
                    <p>Para instalar o Git, acesse o site oficial e siga as instruções de instalação de acordo com o seu sistema operacional:</p>
                    <ul className='list-disc list-inside space-y-2 my-4'>
                        <li><VisitLink href='https://git-scm.com/download/win'>Windows</VisitLink></li>
                        <li><VisitLink href='https://git-scm.com/download/mac'>Mac</VisitLink></li>
                        <li><VisitLink href='https://git-scm.com/download/linux'>Linux</VisitLink></li>
                    </ul>
                    <p>Após a instalação, abra o terminal e execute o comando abaixo para verificar se o Git foi instalado corretamente.</p>
                    <CodeArea code={`git --version`} language='bash' />
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='settings' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Configuração</h2>
                    <p>Para configurar o Git, abra o terminal e execute os comandos abaixo, substituindo as informações entre aspas pelas suas informações pessoais.</p>
                    <CodeArea code={`git config --global user.name "Seu Nome"\ngit config --global user.email "Seu email"`} language='bash' />
                    <p>O código acima irá configurar o nome e o email que serão utilizados nos commits. Para verificar as configurações, execute o comando abaixo:</p>
                    <CodeArea code={`git config --list`} language='bash' />
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='github' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>GitHub</h2>
                    <p>O Github é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que você e sua equipe trabalhem juntos em projetos de qualquer lugar, facilitando a colaboração e o versionamento de código. Com o Github, é possível criar repositórios, clonar, fazer commits, pull e push de arquivos, entre outras funcionalidades, tudo de forma remota.</p>
                    <p>Para saber mais sobre o Github, acesse a documentação oficial <VisitLink href='https://docs.github.com/pt'>aqui</VisitLink>.</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
