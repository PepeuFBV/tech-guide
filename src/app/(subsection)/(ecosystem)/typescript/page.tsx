import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import VisitLink from '@/components/ui/visit-link'
import { CodeArea } from '@/components/ui/code-area'
import { Divider } from '@/components/ui/divider'
import type { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'O que é?', href: 'what-is-typescript' },
    { title: 'Instalação', href: 'installation' },
    { title: 'Configuração', href: 'configuration' },
    { title: 'Tipos', href: 'types' },
    { title: 'Interfaces', href: 'interfaces' },
    { title: 'Generics', href: 'generics' },
]

export default function Typescript() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center space-y-3 px-3 md:px-10'>
                <PathDisplay />
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-4'>
                        <h1 id='introduction' className='text-4xl'>Introdução</h1>
                        <p>Agora aprenderemos sobre TypeScript, uma importante ferramenta para desenvolvedores que desejam escrever códigos mais seguros e com menos erros. Abaixo discutiremos mais sobre a linguagem e como a usar de forma produtiva em seus projetos.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-4'>
                        <h2 id='what-is-typescript' className='text-3xl'>O que é?</h2>
                        <p>O TypeScript é uma linguagem de programação desenvolvida pela Microsoft que adiciona tipagem estática ao JavaScript. Isso significa que o TypeScript permite definir tipos para variáveis, parâmetros de funções e objetos, tornando o código mais legível e seguro.</p>
                        <p>Além disso, o TypeScript é uma linguagem de código aberto desenvolvida pela Microsoft, que é um superconjunto do JavaScript. Isso significa que qualquer código JavaScript é um código TypeScript válido.</p>
                        <p>A linguagem resolve um dos maiores problemas do JavaScript, que é a tipagem dinâmica. Com o TypeScript, é possível definir tipos para variáveis, parâmetros de funções e objetos, tornando o código mais legível e seguro.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='installation' className='text-3xl'>Instalação</h2>
                            <p>A linguagem já está configurada no ambiente de desenvolvimento do projeto, então não é necessário instalar nada.</p>
                            <p>Entretanto, para a criação um novo projeto Typescript, basta executar o comando de instação do Typescript no seu projeto com o uso de um comando npm:</p>
                        </div>
                        <CodeArea code={`npm install--save - dev typescript @types / react @types / node`} language='bash' />
                        <p>O comando instalará o TypeScript e os tipos de definição para o React e o Node.js. Com isso, você poderá começar a escrever código TypeScript em seu projeto.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='configuration' className='text-3xl'>Configuração</h2>
                            <p>Podemos configurar o nosso projeto TypeScript no arquivo <code>tsconfig.json</code>. Este arquivo contém as configurações do compilador TypeScript, como o diretório de saída dos arquivos compilados, o nível de compatibilidade com o JavaScript, entre outras configurações.</p>
                        </div>
                    </div>
                    <CodeArea link='/ecosystem/typescript/tsconfig.json' />
                    <div className='flex flex-col space-y-4'>
                        <p>A maioria das configurações do TypeScript são opcionais, mas é recomendado que você configure o seu projeto de acordo com as necessidades do seu projeto.</p>
                        <p>Importantes configurações do TypeScript:</p>
                        <ul className='list-disc list-inside space-y-2'>
                            <li><code>target</code>: Define a versão do ECMAScript que o TypeScript irá compilar.</li>
                            <li><code>lib</code>: Define as bibliotecas padrão que estarão disponíveis no ambiente de execução.</li>
                            <li><code>allowJs</code>: Permite a inclusão de arquivos JavaScript no projeto.</li>
                            <li><code>strict</code>: Habilita todas as opções de checagem de tipos.</li>
                            <li><code>module</code>: Define o sistema de módulos que será utilizado.</li>
                            <li><code>plugins</code>: Define os plugins que serão utilizados, no nosso caso, o plugin do Next.js.</li>
                            <li><code>paths</code>: Define os caminhos de importação de módulos. No nosso caso, foi definido um <span className='italic'>alias</span>, ou seja, um apelido para o diretório <code>src</code>.</li>
                            <li><code>include</code>: Define os arquivos que serão incluídos na compilação.</li>
                            <li><code>exclude</code>: Define os arquivos que serão excluídos da compilação. Colocamos o diretório <code>node_modules</code> para que os arquivos de terceiros não sejam compilados e pela tendência do tamanho do diretório.</li>
                        </ul>
                        <p className='text-secondary'>Para mais informações detalhadas sobre as configurações do TypeScript, consulte a <VisitLink href='https://www.typescriptlang.org/tsconfig' target='_blank' rel='noreferrer'>documentação oficial</VisitLink>.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='types' className='text-3xl'>Tipos Básicos</h2>
                            <p>As váriaveis criadas podem ser <code>const</code> (constantes) ou <code>let</code> (variáveis). As constantes são imutáveis e as variáveis podem ser alteradas.</p>
                            <p>Os tipos básicos do TypeScript são os mesmos do JavaScript, mas com a adição de tipos explícitos. Abaixo estão os tipos básicos do TypeScript:</p>
                            <ul className='list-disc list-inside space-y-2'>
                                <li><code>number</code>: Representa números inteiros e decimais.</li>
                                <li><code>string</code>: Representa cadeias de caracteres.</li>
                                <li><code>boolean</code>: Representa valores booleanos (true ou false).</li>
                                <li><code>array</code>: Representa uma lista de valores de um mesmo tipo.</li>
                                <li><code>tuple</code>: Representa uma lista de valores de tipos diferentes e um número fixo de elementos.</li>
                                <li><code>enum</code>: Representa um conjunto de valores nomeados.</li>
                                <li><code>unknown</code>: Representa um tipo de valor desconhecido.</li>
                                <li><code>any</code>: Representa um tipo de valor dinâmico.</li>
                                <li><code>void</code>: Representa a ausência de tipo.</li>
                                <li><code>null</code>: Representa um valor nulo.</li>
                                <li><code>undefined</code>: Representa um valor indefinido.</li>
                                <li><code>Object</code>: Representa um objeto (tipo não primitivo) Javascript.</li>
                            </ul>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <h3 className='text-2xl'>Type Assertion</h3>
                            <p>O Type Assertion é uma forma de dizer ao TypeScript que você sabe o tipo de uma variável melhor do que ele. O Type Assertion é feito com a palavra-chave <code>as</code> ou com a sintaxe <code>&lt;Tipo&gt;</code>.</p>
                        </div>
                        <CodeArea link='/ecosystem/typescript/exemplo-typescript.ts' />
                        <p className='text-secondary'>O "<code>;</code>" é opcional no final de uma instrução em TypeScript.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='interfaces' className='text-3xl'>Interfaces</h2>
                            <p>As interfaces são uma forma de definir a estrutura de um objeto em TypeScript. Elas são usadas para definir um contrato que um objeto deve seguir, ou seja, quais propriedades e métodos um objeto deve ter.</p>
                            <p>Elas serão melhor apresentadas e utilizadas ao passar props para componentes React, veja em <VisitLink href='/react/componentes' target='_blank' rel='noreferrer'>componentes</VisitLink>.</p>
                            <p>Por enquanto, segue um exemplo de interface:</p>
                        </div>
                        <CodeArea link='/ecosystem/typescript/exemplo-interface.ts' />
                        <p>Podemos utilizar a <code>?</code> para definir propriedades opcionais. Além disso, podemos utilizar a <code>|</code> para definir propriedades que podem ter mais de um tipo.</p>
                        <CodeArea link='/ecosystem/typescript/exemplo-interface2.ts' />
                        <p className='text-secondary'>Ao definir uma váriavel como opcional, é equivalente a definir que ela pode ser <code>undefined</code>. Ou seja <code>email?: string</code> é equivalente a <code>email: string | undefined</code>.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='generics' className='text-3xl'>Generics</h2>
                            <p>Generics são uma forma de criar componentes, funções e classes que podem trabalhar com diferentes tipos de dados. Eles permitem que você escreva código que é reutilizável e flexível, sem sacrificar a segurança de tipos.</p>
                            <p>Os generics são muito utilizados em bibliotecas e frameworks, como o React, para criar componentes que podem trabalhar com diferentes tipos de dados.</p>
                            <p>Veja um exemplo de como criar uma função genérica:</p>
                        </div>
                        <CodeArea link='/ecosystem/typescript/exemplo-generics.ts' />
                        <p>Na função acima, o tipo <code>T</code> é um tipo genérico que pode ser qualquer tipo de dado. Isso permite que a função seja usada com diferentes tipos de dados, sem sacrificar a segurança de tipos.</p>
                    </div>
                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
