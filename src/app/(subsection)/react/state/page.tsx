import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { CodeArea } from '@/components/ui/code-area'
import { Divider } from '@/components/ui/divider'
import { Topic } from '@/types/topic'
import React from 'react'

const code = [
    `import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
};
`,
    `import { useState, useEffect } from "react";

const ContadorColorido = () => {
  const [contador, setContador] = useState(0);
  const [cor, setCor] = useState("black");

  useEffect(() => {
    const cores = ["red", "green", "blue", "purple", "orange"];
    setCor(cores[Math.floor(Math.random() * cores.length)]);
  }, [contador]);

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)} style={{ background: cor }}>
        Aumentar
      </button>
    </div>
  );
};`
]

const topics: Topic[] = [
    { title: 'Props', href: 'props' },
    { title: 'Como utilizar Props?', href: 'how-to-use-props' },
    { title: 'Tipos nas Props', href: 'types-on-props' },
    { title: 'Propiedade Children', href: 'children-props' },
]

export default function State() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center space-y-3 px-3 md:px-10'>
                <PathDisplay />
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-4'>
                        <h1 id='props' className='text-4xl font-bold'>Estado</h1>
                        <p className='text-secondary'>Estado é quando temos uma informação ou variável que pode ser alterada com o passar do tempo. O botão de like está pressionado ou não? O que deve acontecer com meu comentário quando eu clicar em enviar? Isso tudo é resolvido utilizando estados.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-8'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='how-to-use-props' className='text-3xl'>Como utilizar estados?</h2>
                            <p>Estados são basicamente como cuidamos e atualizamos as variáveis dos nossos componentes. Cada componente cuida do próprio estado, então o estado de um componente não afeta o estado de outro.</p>
                            <CodeArea code={code[0]} language='tsx' />
                            <p>No código acima, criamos um estado a partir da função useState para armazenar o valor do contador. Inicialmente, o estado começa em 0, e dois objetos são criados, <i>contador e setContador</i>. Eles funcionam como um getter e setter do Java. A variável contador serve APENAS para obter o valor do contador (como um getter). Se você quiser modificar o valor da variável, utilizamos a setContador. Quando o botão é clicado, a função setContador é chamada com contador + 1, atualizando o estado. Como o React re-renderiza o componente sempre que o estado muda, o novo valor do contador é exibido automaticamente na tela.</p>
                        </div>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='types-on-props' className='text-3xl'>O useEffect e monitorando alterações no estado</h2>
                            <p>As vezes, queremos que um determinado código rode sempre que um estado for atualizado. Se o usuário faz logout, por exemplo, é interessante que no momento em que o usuário muda seu estado par "deslogado", o sistema o redirecione para outra página. Isso é realizado através da função useEffect, que sempre será executada <i>assim que o componente é mostrado em tela pela primeira vez</i> e <b>sempre que o estado for alterado por um setState</b>. Aqui podemos ver um exemplo:</p>
                            <CodeArea code={code[1]} language='tsx' />
                            <p>O useEffect nesse código é usado para mudar a cor do botão sempre que o contador for atualizado (inclusive na primeira vez que o componente é montado!). Ele recebe dois argumentos: uma função de efeito e um array de dependências. Sempre que o valor de contador muda, o useEffect é disparado. Dentro dele, um array de cores é definido e a função setCor escolhe aleatoriamente uma delas para atualizar o estado. Como useEffect roda após a renderização quando contador muda, a interface do botão é re-renderizada com a nova cor.</p>
                            <p>O array [contador] no final define que esse efeito só será executado quando contador for atualizado. Isso evita execuções desnecessárias e mantém o comportamento eficiente.</p>
                        </div>
                    </div>
                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
