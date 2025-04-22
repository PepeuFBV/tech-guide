import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { CodeArea } from '@/components/ui/code-area'
import { Topic } from '@/types/topic'
import React from 'react'

const topics: Topic[] = [
    { title: 'Introdução ao Jest', href: 'introduction' },
    { title: 'O que são testes de software?', href: 'what-are-software-tests' },
    { title: 'O que é o Jest?', href: 'what-is-jest' },
    { title: 'Instalação e configuração', href: 'installation-and-settings' },
    { title: 'Construindo testes', href: 'building-tests' },
]

export default function Jest() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center space-y-3 px-3 md:px-10'>
                <PathDisplay />
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-4'>
                        <h1 id='introduction' className='text-4xl'>Introdução ao Jest</h1>
                        <p>Testes de software são uma parte essencial do desenvolvimento de software. Eles garantem que o código que você escreveu está funcionando corretamente e que mudanças futuras não quebrarão o código existente. Nesta sessão, abordaremos o Jest, uma das ferramentas mais populares para testes de software em Javascript/Typescript.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-4'>
                        <h2 id='what-are-software-tests' className='text-3xl'>O que são testes de software?</h2>
                        <p>Testes de software são um processo de verificação de que o software está funcionando de acordo com as especificações. Eles são uma parte essencial do desenvolvimento de software, pois garantem que o código que você escreveu está funcionando corretamente e que mudanças futuras não quebrarão o código existente.</p>
                        <p>Existem vários tipos de testes de software, incluindo testes de unidade, testes de integração, testes de aceitação e testes de regressão. Cada tipo de teste tem um objetivo diferente e é executado em um nível diferente do software.</p>
                        <p>Organize o seu código de forma que seja fácil de testar. Isso significa que você deve dividir o seu código em pequenas partes que possam ser testadas de forma independente. Isso facilita a identificação de problemas, modularização do seu sistema e a correção de bugs.</p>
                        <p>Pode se aplicar uma forma de desenvolvimento orientado a testes (TDD) para garantir que o seu código seja testado desde o início. Isso ajuda a garantir que o seu código seja testável e que você tenha uma cobertura de testes adequada. Primeiramente você escreve os testes e depois o código que faz o teste passar.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-4'>
                        <h2 id='what-is-jest' className='text-3xl'>O que é o Jest?</h2>
                        <p>O Jest é uma estrutura de teste de código aberto mantida pelo Facebook. Ele é projetado para ser fácil de usar e configurar e fornece uma série de recursos úteis para testes de software em Javascript/Typescript.</p>
                        <p>O Jest é uma das ferramentas mais populares para testes de software para sistemas de backend e frontend com Javascript e Typescript. Ele é amplamente utilizado na comunidade de desenvolvimento de software e é recomendado por muitos desenvolvedores. Veremos como instalar e configurar o Jest em nossos projetos, bem como como escrever testes de software usando o Jest.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='installation-and-settings' className='text-3xl'>Instalação e configuração</h2>
                            <p>Para instalar o Jest em seu projeto, você pode usar o npm ou o yarn. Primeiramente, você deve instalar o Jest como uma dependência de desenvolvimento em seu projeto. Para isso, execute o seguinte comando no terminal:</p>
                        </div>
                        <CodeArea code={`npm install --save-dev jest`} language='bash' />
                        <div className='flex flex-col space-y-4'>
                            <p>Após a execução do comando, o Jest será instalado como uma dependência de desenvolvimento em seu projeto. Você pode verificar se o Jest foi instalado corretamente verificando o arquivo <code>package.json</code> do seu projeto. O Jest deve estar listado na seção de dependências de desenvolvimento.</p>
                            <p>É importante que você defina o Jest como um script no seu <code>package.json</code>. Para isso, adicione o seguinte código na seção de scripts do seu <code>package.json</code>:</p>
                        </div>
                        <CodeArea code={`"scripts": {\n    "test": "jest"\n}`} language='json' />
                        <div className='flex flex-col space-y-4'>
                            <p>Também é possível configurar o Jest de acordo com as necessidades do projeto. O Jest possui uma configuração padrão que funciona para a maioria dos projetos, mas você pode personalizá-la de acordo com suas necessidades. Para fazer isso, crie um arquivo chamado <code>jest.config.js</code> na raiz do seu projeto e adicione a seguinte configuração:</p>
                        </div>
                        <CodeArea link='/recommendations/jest/jest.config.js' />
                        <div className='flex flex-col space-y-4'>
                            <p>Essa configuração define o ambiente de teste como <code>node</code>, o que significa que o Jest executará os testes em um ambiente Node.js. Você pode personalizar essa configuração de acordo com suas necessidades, adicionando outras opções de configuração.</p>
                            <p className='text-secondary'>There's also the <code>testMatch</code> option, which allows you to specify the test files that Jest should run. By default, Jest will look for test files in the <code>__tests__</code> directory or any file with a <code>.test.js</code> or <code>.spec.js</code> extension. You can customize this option to match your project's file structure. In the example above, we are telling Jest to look for test files in the <code>__tests__</code> directory that end with <code>.test.ts</code>.</p>
                        </div>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='building-tests' className='text-3xl'>Construindo testes</h2>
                            <p>Para construir testes com o Jest, você pode usar a função <code>test()</code> ou <code>it()</code>. Ambas as funções são equivalentes e podem ser usadas para definir um teste. A função <code>test()</code> é mais comum, enquanto a função <code>it()</code> é mais comum em testes de comportamento. Além disso, você pode usar a função <code>describe()</code> para agrupar testes relacionados.</p>
                            <p>Para criar um teste simples, você pode usar o seguinte código:</p>
                        </div>
                        <CodeArea link='/recommendations/jest/simple-test.ts' />
                        <div className='flex flex-col space-y-4'>
                            <p>Esse teste verifica se a função <code>sum()</code> retorna o resultado correto quando somamos dois números. O Jest fornece uma função chamada <code>expect()</code>, que é usada para fazer asserções sobre o resultado do teste. A função <code>toBe()</code> é um matcher que verifica se o valor retornado pela função <code>sum()</code> é igual a 3.</p>
                            <p>Para executar os testes, você pode usar o seguinte comando:</p>
                        </div>
                        <CodeArea code={`npm test`} language='bash' />
                        <div className='flex flex-col space-y-4'>
                            <p>Isso executará todos os testes em seu projeto e exibirá os resultados no terminal. O Jest fornecerá informações detalhadas sobre quais testes passaram e quais falharam.</p>
                            <p>Além disso, o Jest fornece uma série de matchers que você pode usar para fazer asserções sobre o resultado do teste. Alguns dos matchers mais comuns incluem:</p>
                            <ul className='list-disc list-inside space-y-2'>
                                <li><code>toBe()</code>: Verifica se o valor é igual ao esperado.</li>
                                <li><code>toEqual()</code>: Verifica se o valor é igual ao esperado, mas não verifica o tipo.</li>
                                <li><code>toBeTruthy()</code>: Verifica se o valor é verdadeiro.</li>
                                <li><code>toBeFalsy()</code>: Verifica se o valor é falso.</li>
                                <li><code>toContain()</code>: Verifica se um array contém um valor específico.</li>
                                <li><code>toHaveLength()</code>: Verifica se um array tem um comprimento específico.</li>
                                <li><code>toMatch()</code>: Verifica se uma string corresponde a uma expressão regular.</li>
                                <li><code>toThrow()</code>: Verifica se uma função lança um erro.</li>
                            </ul>
                            <p>Esses são apenas alguns exemplos dos matchers disponíveis no Jest. Você pode encontrar uma lista completa de matchers na documentação do Jest.</p>
                            <p className='text-secondary'>Além disso, o Jest fornece uma série de recursos avançados, como mocks, spies e cobertura de código. Esses recursos podem ser úteis para testar código mais complexo e garantir que seu código esteja funcionando corretamente.</p>
                        </div>
                    </div>
                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
