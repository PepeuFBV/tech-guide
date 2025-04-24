import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import VisitLink from '@/components/ui/visit-link'
import { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Introdução ao React', href: 'introduction' },
    { title: 'O que é o React?', href: 'what-is-react' },
    { title: 'Instalação', href: 'installation' },
    { title: 'Conceitos do React', href: 'concepts' },
]

export default function Introduction() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Introdução ao React</h1>
                    <p className='text-secondary'>HTML e CSS são tecnologias bem simples no geral. Porém, qualquer aspirante a desenvolvedor frontend tem aspirações maiores do que um arquivo de texto pode oferecer. Tudo isso é possível utilizando Javascript, mas o quão válido, escalável e realmente produtivo é implementar tarefas ultra-complexas utilizando apenas JS? Nem um pouco. Nessa sessão, abordaremos algumas noções básicas de React, framework que facilita o desenvolvimento de páginas web complexas.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='what-is-react' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>O que é o React?</h2>
                    <p>A resposta curta: uma biblioteca que permite a você criar de forma fácil a interface do usuário de dentro do Javascript. Sim, isso quer dizer que na maior parte do tempo, você estará utilizando apenas Javascript para construir a interface. Claro, estilos ainda são feitos usando CSS, mas até isso é um pouco diferente aqui. A ideia é poder utilizar todo o poder de uma linguagem de programação para construir uma interface, não apenas o de uma linguagem de marcação como HTML. </p>
                    <p>O que podemos fazer utilizando uma linguagem de programação que não podemos utilizando apenas o HTML? Muita coisa na verdade. Se eu quiser que um elemento apareça mil vezes em HTML, temos duas opções: realmente escrever o HTML desse elemento mil vezes ou usar Javascript. Mas os scripts para Javascript são horrendos, tendem a ficar enormes e não são nem um pouco fáceis de lidar. E se eu quiser que os elementos ímpares sejam de cores alternadas? Escrevo todos eles? Render-se ao Javascript é a única opção, mas ele não precisa ser tão difícil assim de lidar.</p>
                    <p>O React resolve esse problema de forma simples. Você cria pedacinhos da sua interface, que chamamos de componentes. Cada componente cuida da sua própria vida e dos seus estilos CSS. Além disso, cada componente é customizável, permitindo alterações. Isso é o que React é.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='installation' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Instalação</h2>
                    <p className='text-secondary'>Tenho o prazer de lhe dizer para não se preocupar com instação no momento: o React vai vir pré-instalado nas suas aplicações Next.JS! Se você não sabe o que é Next.JS, não se preocupe ainda: há uma sessão inteira para isso! Se é sua primeira vez aqui, recomendo começar brincando com um SandBox como o encontrado <VisitLink href='https://codesandbox.io/p/sandbox/react-new' target='_blank'>aqui.</VisitLink></p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='concepts' className='flex flex-col gap-4'>
                    <h2 className='text-3xl' id='concepts'>Conceitos do React</h2>
                    <p>Há três conceitos principais que você precisará aprender.</p>
                    <ul className='list-disc list-inside space-y-2 my-4'>
                        <li><VisitLink href='/react/components'>Componentes</VisitLink></li>
                        <li><VisitLink href='/react/props'>Props</VisitLink></li>
                        <li><VisitLink href='/react/hooks'>Hooks</VisitLink></li>
                    </ul>
                    <p>Iremos passar por cada uma delas nas sessões a seguir!</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
