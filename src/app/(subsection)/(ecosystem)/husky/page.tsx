import React from 'react'
import PathDisplay from '@/components/core/path-display'
import PageIndex from '@/components/core/page-index/page-index'
import { Divider } from '@/components/ui/divider'
import { CodeArea } from '@/components/ui/code-area'
import type { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'O que é?', href: 'what-is-husky' },
    { title: 'Instalação', href: 'installation' },
    { title: 'Configuração', href: 'settings' },
    { title: 'Uso', href: 'usage' },
]

export default function Husky() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Introdução</h1>
                    <p>Você não precisará mais se preocupar em executar manualmente tarefas de linting, testes e formatação de código antes de fazer um commit ou push para o repositório. O Husky cuidará disso para você, garantindo que seu código esteja sempre limpo e funcional.</p>
                    <p className='text-secondary'>No nosso ecossistema de desenvolvimento, o Husky é uma ferramenta essencial para manter um fluxo de trabalho consistente e eficiente. Ele já vem configurado e você não precisará se preocupar em configura-lo</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='what-is-husky' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>O que é?</h2>
                    <p>O Husky é uma ferramenta que permite automatizar tarefas de pré-commit e pré-push em repositórios Git. Ele é altamente configurável e pode ser usado para garantir a qualidade do código e evitar erros comuns no desenvolvimento de software. Com o Husky, você pode:</p>
                    <ul className='list-disc list-inside space-y-2'>
                        <li>Executar tarefas de linting, testes e formatação de código antes de fazer um commit ou push.</li>
                        <li>Garantir que seu código esteja sempre limpo e funcional.</li>
                        <li>Manter um fluxo de trabalho consistente e eficiente em um projeto.</li>
                        <li>Evitar erros comuns e práticas inseguras.</li>
                    </ul>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='installation' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Instalação</h2>
                    <p>Para instalar o Husky em seu projeto, você pode executar o seguinte comando no terminal:</p>
                    <CodeArea code='npm install husky --save-dev' language='bash' />
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='settings' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Configuração</h2>
                    <p>Após a instalação, você pode configurar o Husky no nos arquivos do diretório <code>.husky</code> na raiz do seu projeto. Crie o arquivo de acordo com o hook do Git que deseja configurar, como <code>pre-commit</code> ou <code>pre-push</code>.</p>
                    <p>Em nosso projeto temos 2 hooks configurados:</p>
                    <ul className='list-disc list-inside space-y-2'>
                        <li><code>pre-commit</code>: Executa tarefas de linting e testes antes de fazer um commit.</li>
                        <li><code>commit-message</code>: Verifica se a mensagem de commit segue o padrão estabelecido.</li>
                    </ul>
                    <p>No <code>pre-commit</code>, configuramos o Husky para executar o ESLint antes de fazer um commit. Isso garante que o código esteja limpo e sem erros antes de ser enviado para o repositório, mantendo a qualidade do código.</p>
                    <p className='text-secondary'>O ESLint não permitiria o código de ir para produção se houvesse algum erro de linting.</p>
                    <p>No <code>commit-message</code>, configuramos o Husky para verificar se a mensagem de commit segue o padrão estabelecido. Isso ajuda a manter um histórico de commits limpo e organizado, facilitando a revisão e a colaboração no projeto.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='usage' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Uso</h2>
                    <p>O Husky é ativado automaticamente quando você executa um comando de commit ou push no Git. Ele executa as tarefas configuradas nos arquivos do diretório <code>.husky</code>. Ele também está configurado para funcionar com o Github Desktop.</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
