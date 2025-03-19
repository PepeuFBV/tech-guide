import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { CodeArea } from '@/components/ui/code-area'
import { Divider } from '@/components/ui/divider'
import { Topic } from '@/types/topic'
import React from 'react'

const code = [
    `function Saudacao = ({ nome }) => {
  return <h1>Olá, {nome}!</h1>;
};

// uso
<Saudacao nome="Mundo" />;
`,

    `// versão básica
function SaudacaoSeletiva = ({ nome }) => {
  if (nome === 'Mundo') {
    return <h1>Olá, {nome}!</h1>;
  } else {
    return <h1>Não gosto de você, {nome}!</h1>;
  }
};

// versão avançada
function SaudacaoSeletiva = ({ nome }) => {
  return {
    nome === 'Mundo' 
    ? <h1>Olá, {nome}!</h1> 
    : <h1>Não gosto de você, {nome}!</h1>
  };
};

// O uso é o mesmo independente da versão!
<Saudacao nome="Mundo" />;
`,
    `interface ButtonProps {
    isPrimary: boolean;
    text: string;
    onClick: () => void;
}

function Button({ isPrimary, text, onClick }: ButtonProps) => {
    const style = isPrimary ? 'bg-green-500' : 'bg-gray-500';
    return <button className={style} onClick={onClick}>{text}</button>;
}

// Uso:
<Button text="Clique aqui!" isPrimary onClick={() => alert('Clicou!')} />;
`,
    `// isso é outra forma de declarar o tipo das props,
// sem necessariamente criar uma interface
const Caixa = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 border border-gray-500">{children}</div>;
};

// Uso:
<Caixa>
  <p>Texto dentro da caixa!</p>
  <button>Botão aqui!</button>
</Caixa>;
`,
    `interface ButtonProps {
    children: React.ReactNode;
    isPrimary?: boolean;
    onClick: () => void;
}

function Button({ children, isPrimary, onClick }: ButtonProps) => {
    const style = isPrimary ? 'bg-green-500' : 'bg-gray-500';
    return <button className={style} onClick={onClick}>{children}</button>;
}

// Uso:
<Button isPrimary onClick={() => alert('Clicou!')}>
  Clique aqui!
</Button>;
`
]

const topics: Topic[] = [
    { title: 'Props', href: 'props' },
    { title: 'Como utilizar Props?', href: 'how-to-use-props' },
    { title: 'Tipos nas Props', href: 'types-on-props' },
    { title: 'Propiedade Children', href: 'children-props' },
]

export default function Props() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center space-y-3 px-3 md:px-10'>
                <PathDisplay />
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-4'>
                        <h1 id='props' className='text-4xl font-bold'>Props</h1>
                        <p className='text-secondary'>No React, componentes podem ser customizados de diversas formas. Uma delas são as Props. O termo vem de <i>propriedades</i> e são pequenas configurações que passamos para um componente para alterar seu comportamento. Se componentes são funções, Props são como os parâmetros dessas funções.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-8'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='how-to-use-props' className='text-3xl'>Como utilizar Props?</h2>
                            <p>Props são declaradas como parâmetros para as funções que criam os componentes. Simples e fáceis de executar!</p>
                            <CodeArea code={code[0]} language='tsx' />
                            <p>Daqui, podemos tirar algumas observações a respeito da sintaxe:</p>
                            <ul className='list-disc list-inside space-y-2'>
                                <li>Props são passadas para o componente como um objeto, com chaves e valores. Por isso utilizamos {"{ }"} ao redor da Prop name.</li>
                                <li>Você passa a Prop como passaria um atributo do HTML normal ao componente.</li>
                                <li>Para adicionar uma Prop para o HTML, também é necessário colocar entre {"{ }"}.</li>
                            </ul>
                            <p>Aqui vai mais um exemplo de como podemos usar Props para alterar o funcionamento de um componente!</p>
                            <CodeArea code={code[1]} language='tsx' />
                        </div>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='types-on-props' className='text-3xl'>Tipos nas Props</h2>
                            <p>Como estamos utilizando Typescript, podemos utilizar tipos nas Props! Isso permite que quem use seu componente futuramente saiba quais atributos são obrigatórios e os tipos desses atributos. Num geral, é sempre uma boa ideia adicionar tipos as suas Props. Há várias maneiras de fazer isso, a mostrada abaixo é apenas uma delas.</p>
                            <CodeArea code={code[2]} language='tsx' />
                        </div>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='children-props' className='text-3xl'>Propiedade Children</h2>
                            <p>Dentro do HTML, somos logo de cara ensinados que um elemento {"<div></div>"} pode ter vários elementos dentro dele. Componentes não são diferentes, e quando queremos passar elementos ou texto para dentro de um componente, podemos fazer isso através da propriedade especial Children!</p>
                            <CodeArea code={code[3]} language='tsx' />
                            <p>No exemplo acima, utilizamos a Prop Children para criar um container especial. Voltando ao exemplo anterior do botão, poderíamos reescrevê-lo da seguinte forma:</p>
                            <CodeArea code={code[4]} language='tsx' />
                            <p>Agora, você está pronto para aprender sobre estado!</p>
                        </div>
                    </div>
                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
