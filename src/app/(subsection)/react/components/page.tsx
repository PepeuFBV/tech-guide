import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { CodeArea } from '@/components/ui/code-area'
import { Divider } from '@/components/ui/divider'
import VisitLink from '@/components/ui/visit-link'
import { Topic } from '@/types/topic'
import React from 'react'

const topics: Topic[] = [
    { title: 'Componentes', href: 'components' },
    { title: 'Introdução', href: 'introduction' },
    { title: 'E se eu quiser 1000 botões?', href: 'thousand-buttons' },
    { title: 'Estilizar componentes com Tailwind e className', href: 'styles' },
    { title: 'Utilizando o Fragment', href: 'fragment' },
]

export default function Components() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='components' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Componentes</h1>
                    <p className='text-secondary'>O coração do React. Um componente é uma função que retorna HTML e que tem um escopo próprio (de estilo e estado). É o que permite você reutilizar trechos de HTML na sua interface.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Introdução</h2>
                    <p>No React, um componente é uma função que retorna HTML. Funções normalmente retornam números, strings, ou até nada, mas em Javascript, especificamente em arquivos terminados em .JSX, é possível retornar trechos de HTML também. O que isso quer dizer, em termos práticos? Que você pode chamar uma função dentro de um loop while que retorna um certo elemento e adicionar esse elemento quantas vezes você quiser!</p>
                    <CodeArea link='/react/components/button.tsx' />
                    <p>Agora, somos capazes de, por exemplo, utilizar o componente acima dentro de outros componentes para montar uma interface mais complexa!</p>
                    <CodeArea link='/react/components/buttons.tsx' />
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='thousand-buttons' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>E se eu quiser 1000 botões?</h2>
                    <p className='text-secondary'>O conteúdo dessa sessão exige que você já tenha um conhecimento relativamente avançado sobre Javascript, em especial ES5. Você pode buscar mais sobre isso <VisitLink href='https://www.w3schools.com/js/js_es5.asp' target='_blank'>aqui</VisitLink>.</p>
                    <p>Todo o código não deixa de ser uma função do Javascript, então temos acesso a toda a funcionalidade que ele provem de forma muito fácil! Há dezenas de formas de fazer um loop em JS, mas geralmente utilizamos o método map() por ser mais fácil.</p>
                    <CodeArea link='/react/components/thousand-buttons.tsx' />
                    <p>Temos bastante coisa para discutir sobre o código anterior! Primeiro, note que o componente Button é o mesmo dos exemplos anteriores. Segundo, note que antes do <i>return</i> da função App, há a criação de uma variável chamada <i>buttons</i>. Ao utilizarmos &#123; &#125;, abrimos um escopo de JS dentro do retorno, no qual podemos fazer um .map() na variável buttons que retorna uma lista de 1000 elementos do componente Button!</p>
                    <p>Note também que passamos um atributo chamado <i>key</i> para o componente. Isso é uma coisa mais técnica, mas a verdade é que essa key será usada pelo React para diferenciar os botões internamente (como uma espécie de ID). É sempre uma boa prática adicionar key para elementos que você criar a partir de um .map() ou outros tipos de loop. Elementos comuns não precisam disso.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='styles' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Estilizar componentes com Tailwind e className</h2>
                    <p>Para estilizar um componente usando Tailwind, basta utilizar os elementos dentro dos componentes! Olhares mais atentos também devem ter reparado que no React, utilizamos <i>className</i> ao invés de <i>class</i>, como é no HTML padrão. Isso ocorre pois a palavra class já existe no Javascript e causaria um conflito! O navegador não teria como saber se estavamos tentando criar uma classe ou só dando um estilo para o nosso componente, por isso decidiram fazer essa alteração pequena.</p>
                    <CodeArea link='/react/components/tailwind-button.tsx' />
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='fragment' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Utilizando o Fragment</h2>
                    <p>Novamente, olhares mais atentos devem ter reparado que em todos os exemplos, nossos componentes tem retornado <code>{"<div></div>"}</code>. Isso tem um bom motivo! É que, na verdade, apenas UM elemento pode ser retornado de um componente. Isso significa que caso você queira retornar mais de um elemento, tenha que circula-los com uma div ou utilizar um fragment.</p>
                    <CodeArea link='/react/components/fragment-button.tsx' />
                    <p>E finalmente, você está preparado para ver como customizar dinamicamente um componente!</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
