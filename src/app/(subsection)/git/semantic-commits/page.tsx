import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { CodeArea } from '@/components/ui/code-area'
import type { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Regras', href: 'rules' },
]

export default function SemanticCommits() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center space-y-3 px-3 md:px-10'>
                <PathDisplay />
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-4'>
                        <h1 id='introduction' className='text-4xl'>Introdução</h1>
                        <p>Commits semânticos são uma forma de padronizar as mensagens de commit, facilitando a leitura e interpretação do histórico de alterações de um projeto. Com uma mensagem de commit bem estruturada, é possível identificar rapidamente o propósito da alteração, o contexto e a motivação por trás da mudança.</p>
                        <p>Além disso, as mensagens de commit semânticas são essenciais para a geração automática de changelogs, que são registros de todas as alterações realizadas em um projeto, organizadas por versão e de forma estruturada.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='rules' className='text-3xl'>Regras</h2>
                            <p>Para escrever mensagens de commit semânticas, é recomendado seguir um padrão pré-definido. O padrão que seguiremos é o seguinte:</p>
                        </div>
                        <CodeArea code={`<type>(<scope>): <description>`} language='plaintext' />
                        <div className='flex flex-col space-y-4'>
                            <p>Nessa estrutura o tipo e descrição do commit são obrigatórios, enquanto o escopo é opcional. Abaixo, temos uma descrição detalhada de cada possível tipo de commit:</p>
                            <ul className='list-disc list-inside space-y-2'>
                                <li><code>feat:</code> Uma nova funcionalidade foi adicionada ao projeto.</li>
                                <li><code>fix:</code> Correção de um bug ou erro no código.</li>
                                <li><code>hotfix:</code> Correção rápida e urgente.</li>
                                <li><code>docs:</code> Alterações na documentação.</li>
                                <li><code>style:</code> Alterações de estilo de código (espaços, formatação, etc.).</li>
                                <li><code>refactor:</code> Refatoração de código sem adicionar novas funcionalidades ou corrigir bugs.</li>
                                <li><code>test:</code> Adição ou atualização de testes.</li>
                                <li><code>chore:</code> Alterações em ferramentas de build, bibliotecas, etc.</li>
                                <li><code>build:</code> Alterações no sistema de build ou dependências.</li>
                                <li><code>ci:</code> Alterações na configuração ou scripts de CI.</li>
                                <li><code>cleanup:</code> Limpeza de código.</li>
                                <li><code>lint:</code> Correções de linting de código.</li>
                                <li><code>remove:</code> Remoção de código, arquivo ou funcionalidade.</li>
                                <li><code>perf:</code> Melhorias de desempenho.</li>
                                <li><code>revert:</code> Reversão de um commit anterior.</li>
                            </ul>
                            <p className='text-secondary'>Utilize a descrição para fornecer mais detalhes sobre o que foi alterado, evitando mensagens genéricas e pouco informativas. Lembre-se de que a mensagem de commit deve ser escrita no imperativo, ou seja, descrevendo o que a alteração faz, e não o que ela fez.</p>
                            <p>Também é possível adicionar um corpo à mensagem de commit, caso seja necessário fornecer mais informações sobre a alteração realizada. O corpo deve ser separado da descrição por uma linha em branco e deve ser utilizado para explicar o motivo da alteração, as decisões tomadas e qualquer informação adicional relevante.</p>
                        </div>
                    </div>
                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
