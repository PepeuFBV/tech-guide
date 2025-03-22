import React from 'react'
import PathDisplay from '@/components/core/path-display'
import PageIndex from '@/components/core/page-index/page-index'
import { CodeArea } from '@/components/ui/code-area'
import type { Topic } from '@/types/topic'
import { Divider } from '@/components/ui/divider'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Instalação', href: 'installation' },
    { title: 'Configuração', href: 'settings' },
    { title: 'Uso', href: 'usage' },
    { title: 'Customização', href: 'customization' },
    { title: 'Modificadores', href: 'modifiers' },
]

export default function Tailwind() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center space-y-3 px-3 md:px-10'>
                <PathDisplay />
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-4'>
                        <h1 id='introduction' className='text-4xl'>Introdução</h1>
                        <p>O Tailwind CSS é um framework de CSS que permite a criação de interfaces de usuário de forma rápida e eficiente. Ele é composto por uma série de classes utilitárias que podem ser aplicadas diretamente no HTML, sem a necessidade de escrever CSS customizado.</p>
                        <p>Abaixo apresentamos uma visão geral dos principais conceitos e funcionalidades do Tailwind CSS.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='installation' className='text-3xl'>Instalação</h2>
                            <p className='text-secondary'>É recomendado que se adicione o Tailwind CSS durante a criação do projeto, para que ele possa ser configurado corretamente e mais facilmente.</p>
                            <p>No nosso ecossistema, o Tailwind CSS já está incluso no projeto, então não é necessário instalar nada. Porém, para instalar o Tailwind CSS em seu projeto, você pode utilizar o npm ou o yarn. Basta executar o seguinte comando:</p>
                        </div>
                        <CodeArea code={`npm install -D tailwindcss @tailwindcss/postcss postcss`} language='bash' />
                        <div className='flex flex-col space-y-4'>
                            <h2 id='settings' className='text-3xl'>Configuração</h2>
                            <p>Veremos agora como configurar o Tailwind CSS em um projeto Next.js.</p>
                            <h3 className='text-2xl'>PostCSS</h3>
                            <p className='text-secondary'>O PostCSS também deve ser instalado para que o Tailwind CSS funcione corretamente.</p>
                            <p>Após a instalação, o arquivo de configurações do PostCSS também deve ser editado para que o Tailwind CSS seja carregado corretamente. Adicione o Tailwind CSS como um plugin no arquivo <code>postcss.config.js</code>:</p>
                        </div>
                        <CodeArea link='postcss.config.mjs' />
                        <div className='flex flex-col space-y-4'>
                            <p className='text-secondary'>O arquivo de configuração é do tipo <code>mjs</code> é um arquivo JavaScript Module.</p>
                            <p>Também é preciso adicionar as diretivas de importação do Tailwind CSS no topo arquivo de estilos principal do projeto. No nosso caso, o arquivo <code>globals.css</code>:</p>
                        </div>
                        <CodeArea link='globals-example.css' />
                        <p>Será nesse arquivo onde o Tailwind injetará todas as classes utilitárias que serão utilizadas no projeto.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-4'>
                        <h2 id='usage' className='text-3xl'>Uso</h2>
                        <p className='text-secondary'>É fortemente recomendada a instalação da extensão Tailwind CSS IntelliSense no Visual Studio Code para facilitar a utilização das classes utilitárias, a extensão tem autocomplete, linting, preview e highlighting de sintaxe.</p>
                        <p>Com o Tailwind CSS configurado, as classes utilitárias podem ser aplicadas diretamente no HTML. Por exemplo:</p>
                    </div>
                    <CodeArea link='tailwindcss-example.html' />
                    <p>O código acima é equivalente à ambos arquivos abaixo:</p>
                    <div className='flex flex-col space-y-4'>
                        <CodeArea link='tailwindless-example.html' />
                        <CodeArea link='tailwindless-example.css' />
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <p>Por meio do Tailwind, conseguimos criar interfaces de usuário de forma mais rápida e eficiente, sem a necessidade de escrever CSS mais longo em arquivo separado, criando classes ou utilizando seletores de elementos.</p>
                        <p>Para mais informações sobre as classes utilitárias disponíveis, consulte a <a href='https://tailwindcss.com/docs'>documentação oficial</a>. Lembrando que estamos utilizando a versão 3 do Tailwind CSS. A melhor maneira de aprender é experimentando e lendo a documentação quando necessário.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='customization' className='text-3xl'>Customização</h2>
                            <p>O Tailwind CSS permite a customização de cores, espaçamentos, tipografia, entre outros. Para isso, é necessário editar o arquivo de configuração do Tailwind CSS. Veja abaixo um exemplo de customização:</p>
                        </div>
                        <CodeArea link='tailwind.config.ts' />
                        <div className='flex flex-col space-y-4'>
                            <p>No arquivo acima, podemos ver a definição de onde o nosso conteúdo está, para que o Tailwind saiba onde deve ser aplicado. Assim como, vemos em destaque a customização das cores do tema do Tailwind CSS. As cores são definidas como variáveis CSS, que podem ser utilizadas diretamente no código.</p>
                            <p>Veja a definição das variáveis relacionadas ao arquivo acima (para o tema claro e escuro):</p>
                        </div>
                        <CodeArea link='globals-example2.css' />
                        <p className='text-secondary'>Este também é o método usado pelo Shadcn para customizar o Tailwind CSS.</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full' />
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-4'>
                            <h2 id='modifiers' className='text-3xl'>Modificadores</h2>
                            <p>Os modificadores do Tailwind CSS permitem a customização de classes utilitárias, como cores, tamanhos, espaçamentos, entre outros. É um dos mais poderosos, permitindo a criação e aplicação de estilos condicionalmente com base em estados, tamanhos de tela e outros fatores. Por meio deles que podemos criar interfaces de usuário responsivas e acessíveis.</p>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <h3 className='text-2xl'>Tipos de Modificadores</h3>
                            <p>Os modificadores do Tailwind CSS seguem um sistema de prefixos que indicam o tipo e quando o estilo deve ser aplicado. Alguns dos principais modificadores são:</p>
                            <ol className='list-decimal list-inside flex flex-col space-y-4'>
                                <li className='text-xl'>Modificadores de Estado:</li>
                                <div className='flex flex-col space-y-6'>
                                    <p>Os modificadores de estado permitem a customização de classes utilitárias com base em estados, como hover, focus, active, disabled, entre outros. Por exemplo:</p>
                                    <CodeArea link='modifiers-example.html' />
                                    <ul className='list-disc list-inside space-y-2'>
                                        <li><code>hover:bg-blue-700</code>: Altera a cor do fundo do botão quando o cursor passa sobre ele.</li>
                                        <li><code>focus:ring-2</code>: Adiciona um anel ao redor do botão quando ele está em foco.</li>
                                        <li><code>active:bg-blue-900</code>: Altera a cor do fundo do botão quando ele está ativo.</li>
                                    </ul>
                                </div>
                                <li className='text-xl'>Modificadores Responsivos</li>
                                <p className='text-secondary'>O Tailwind segue uma abordagem <span className='italic'>mobile-first</span>.</p>
                                <p>Os modificadores responsivos permitem a customização de classes utilitárias com base em tamanhos de tela (da tela anterior até essa). Veja abaixo os <span className='italic'>breakpoints</span> disponíveis:</p>
                                <ul className='list-disc list-inside space-y-2'>
                                    <li><code>sm</code>: Small (640px)</li>
                                    <li><code>md</code>: Medium (768px)</li>
                                    <li><code>lg</code>: Large (1024px)</li>
                                    <li><code>xl</code>: Extra Large (1280px)</li>
                                    <li><code>2xl</code>: Extra Extra Large (1536px)</li>
                                </ul>
                                <p className='text-secondary'>Você também pode criar classes utilitárias customizadas com base em tamanhos de tela, como explicado na seção de customização.</p>
                                <div className='flex flex-col space-y-6'>
                                    <p>Veja um exemplo prático de modificadores responsivos:</p>
                                    <CodeArea link='modifiers-example2.html' />
                                    <ul className='list-disc list-inside space-y-2'>
                                        <li><code>text-sm</code>: Define o tamanho do texto como <code>0.875rem</code> (14px) em telas por padrão.</li>
                                        <li><code>md:text-lg</code>: Define o tamanho do texto como <code>1.125rem</code> (18px) em telas médias (a partir de 768px).</li>
                                        <li><code>lg:text-xl</code>: Define o tamanho do texto como <code>1.25rem</code> (20px) em telas grandes (a partir de 1024px).</li>
                                    </ul>
                                </div>
                                <li className='text-xl'>Modificadores para Modo Escuro</li>
                                <div className='flex flex-col space-y-6'>
                                    <p>Os modificadores para modo escuro permitem a customização de classes utilitárias com base no modo de cor do sistema. Por exemplo:</p>
                                    <CodeArea link='modifiers-example3.html' />
                                    <ul className='list-disc list-inside space-y-2'>
                                        <li><code>bg-white</code>: Define a cor de fundo como branco por padrão.</li>
                                        <li><code>dark:bg-gray-900</code>: Define a cor de fundo como cinza escuro em telas escuras.</li>
                                        <li><code>text-black</code>: Define a cor do texto como preto por padrão.</li>
                                        <li><code>dark:text-white</code>: Define a cor do texto como branco em telas escuras.</li>
                                    </ul>
                                </div>
                                <li className='text-xl'>Modificadores de grupo</li>
                                <div className='flex flex-col space-y-6'>
                                    <p>Os modificadores de grupo permitem a aplicação de classes utilitárias em um grupo de elementos. Por exemplo:</p>
                                    <CodeArea link='modifiers-example4.html' />
                                    <p>A classe <code>group</code> no elemento pai permite que <code>group-hover:text-black</code> seja aplicado quando o pai estiver em estado <span className='italic'>hover</span>.</p>
                                </div>
                                <li className='text-xl'>Modificadores de Par (<span className='italic'>Peer Modifiers</span>)</li>
                                <div className='flex flex-col space-y-6'>
                                    <p>Os modificadores <code>peer</code> permitem que elementos irmãos respondam a mudanças de estado em um elemento adjacente.</p>
                                    <CodeArea link='modifiers-example5.html' />
                                    <p>Quando a caixa de seleção é marcada, <code>peer-checked:bg-blue-500</code> é aplicado ao elemento adjacente <code>label</code>.</p>
                                </div>
                                <li className='text-xl'>Variantes Arbitrárias</li>
                                <div className='flex flex-col space-y-6'>
                                    <p>Os modificadores personalizados colchetes (<code>[]</code>), possibilitam a criação de classes utilitárias customizadas. Por exemplo:</p>
                                    <CodeArea link='modifiers-example6.html' />
                                    <p>A classe <code>[&gt;p]:text-red-500</code> aplica a cor vermelha aos elementos <code>p</code> dentro do elemento pai.</p>
                                </div>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}