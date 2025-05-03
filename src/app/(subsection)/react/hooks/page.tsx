import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { CodeArea } from '@/components/ui/code-area'
import { Divider } from '@/components/ui/divider'
import VisitLink from '@/components/ui/visit-link'
import { Topic } from '@/types/topic'
import React from 'react'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'O que são hooks?', href: 'what-are-hooks' },
    { title: 'useState', href: 'use-state' },
    { title: 'useEffect', href: 'use-effect' },
    { title: 'useContext', href: 'use-context' },
    { title: 'Criando um hook com useContext', href: 'creating-a-hook-with-use-context' },
]

export default function Hooks() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Introdução</h1>
                    <p>O React nos fornece uma série de hooks para manipular o ciclo de vida dos componentes, estados e contextos. Eles são funções que permitem adicionar funcionalidades a componentes funcionais, que antes só eram possíveis em componentes de classe. Neste guia, vamos abordar os principais hooks e como utilizá-los em suas aplicações.</p>
                    <p className='text-secondary'>Os hooks nos permitem realmente utilizar a principal proposta do React, montar componentes reutilizaveis e <span className='font-bold'>reativos</span>.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='what-are-hooks' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>O que são hooks?</h2>
                    <p>Os hooks são funções que permitem adicionar funcionalidades a componentes funcionais. Eles permitem que você use o estado e outros recursos do React sem escrever uma classe. Eles também permitem que você reutilize o estado lógico e o ciclo de vida do componente sem alterar a hierarquia do componente.</p>
                    <p className='text-secondary'>Abaixo, abordaremos alguns dos hooks mais importantes e mais utilizados, porém é importante ressaltar que existem muitos outros hooks disponíveis na respectiva <VisitLink href='https://react.dev/reference/react/hooks'>seção</VisitLink> da documentação do React. Também é possível criar seus próprios hooks, permitindo a reutilização de lógica de estado e efeitos em diferentes componentes.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='use-state' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>useState</h2>
                    <p>Estado é quando temos uma informação ou variável que pode ser alterada com o passar do tempo. O botão de like está pressionado ou não? O que deve acontecer com meu comentário quando eu clicar em enviar? Isso tudo é resolvido utilizando estados. Portanto, são como cuidamos e atualizamos as variáveis dos nossos componentes. Cada componente cuida do próprio estado, então o estado de um componente não afeta o estado de outro.</p>
                    <CodeArea link='/react/hooks/use-state.tsx' />
                    <p>No código acima, criamos um estado a partir da função useState para armazenar o valor do contador. Inicialmente, o estado começa em 0, e dois objetos são criados, <i>contador e setContador</i>. Eles funcionam como um getter e setter do Java. A variável contador serve APENAS para obter o valor do contador (como um getter). Se você quiser modificar o valor da variável, utilizamos a setContador. Quando o botão é clicado, a função setContador é chamada com contador + 1, atualizando o estado. Como o React re-renderiza o componente sempre que o estado muda, o novo valor do contador é exibido automaticamente na tela.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='use-effect' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>useEffect</h2>
                    <p>As vezes, queremos que um determinado código rode sempre que um estado for atualizado. Se o usuário faz logout, por exemplo, é interessante que no momento em que o usuário muda seu estado par "deslogado", o sistema o redirecione para outra página. Isso é realizado através da função useEffect, que sempre será executada <i>assim que o componente é mostrado em tela pela primeira vez</i> e <b>sempre que o estado for alterado por um setState</b>. Aqui podemos ver um exemplo:</p>
                    <CodeArea link='/react/hooks/use-effect.tsx' />
                    <p>O useEffect nesse código é usado para mudar a cor do botão sempre que o contador for atualizado (inclusive na primeira vez que o componente é montado!). Ele recebe dois argumentos: uma função de efeito e um array de dependências. Sempre que o valor de contador muda, o useEffect é disparado. Dentro dele, um array de cores é definido e a função setCor escolhe aleatoriamente uma delas para atualizar o estado. Como useEffect roda após a renderização quando contador muda, a interface do botão é re-renderizada com a nova cor.</p>
                    <p>O array [contador] no final define que esse efeito só será executado quando contador for atualizado. Isso evita execuções desnecessárias e mantém o comportamento eficiente.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='use-context' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>useContext</h2>
                    <p>Contexto é uma forma de passar dados através da árvore de componentes sem ter que passar props manualmente em cada nível (<span className='italic'>prop drilling</span>). O contexto é projetado para compartilhar dados que podem ser considerados "globais" para um componente em toda a árvore de componentes. O useContext é um hook que permite que você acesse o contexto diretamente em qualquer lugar da sua aplicação, como uma variável global.</p>
                    <p>Veja abaixo um exemplo de uso do useContext:</p>
                    <CodeArea link='/react/hooks/use-context.tsx' />
                    <p>O exemplo acima é de criação de um tema de aplicação. O ThemeContext é criado com o valor 'light' e um ThemeProvider é criado para prover o contexto para toda a aplicação. Os nodes internos acessam o contexto do tema e renderizam conteúdo condicionalmente.</p>
                    <CodeArea link='/react/hooks/app.tsx' />
                    <p>No código acima, vemos o consumo do nosso contexto de tema. O useContext é utilizado para acessar o contexto do tema e o valor do tema é utilizado para renderizar o conteúdo condicionalmente.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='creating-a-hook-with-use-context' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Criando um hook com useContext</h2>
                    <p>Como mencionado anteriormente, é possível criar seus próprios hooks para reutilizar lógica de estado e efeitos em diferentes componentes. Abaixo, um exemplo de criação de um hook com o mesmo exemplo demonstrado acima em useContext:</p>
                    <CodeArea link='/react/hooks/custom-context.tsx' />
                    <p>Agora, temos um hook que encapsula toda a lógica de tema da aplicação. O hook useTheme é criado para acessar o contexto do tema e o valor do tema é utilizado para renderizar o conteúdo condicionalmente. Também foi criado um botão para alterar o tema da aplicação, ele sempre estará presente em qualquer componente que utilize o componente ThemeProvider do contexto. Veja abaixo o consumo do hook:</p>
                    <CodeArea link='/react/hooks/app2.tsx' />
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
