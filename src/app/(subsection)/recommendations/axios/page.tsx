import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { CodeArea } from '@/components/ui/code-area'
import { Topic } from '@/types/topic'
import React from 'react'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Por que utilizar o Axios?', href: 'why-use-axios' },
    { title: 'Instalação e configuração', href: 'installation-and-settings' },
    { title: 'Realizando requisições', href: 'making-requests' },
    { title: 'Tratamento de erros', href: 'error-handling' },
    { title: 'Interceptors', href: 'interceptors' }
]

export default function Axios() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Introdução</h1>
                    <p>Axios é uma biblioteca JavaScript que permite fazer requisições HTTP de forma simples e rápida. Ela é amplamente utilizada em aplicações web para se comunicar com APIs e servidores. Nesta sessão, abordaremos como e porquê utilizar o Axios em seus projetos, desde a instalação até o tratamento de erros.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='why-use-axios' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Por que utilizar o Axios?</h2>
                    <p>O Axios nos oferece uma série de vantagens em relação a outras bibliotecas de requisições HTTP, como o Fetch API. Algumas dessas vantagens incluem:</p>
                    <ul className='list-disc list-inside space-y-2 my-4'>
                        <li>Suporte a promessas, o que facilita o tratamento assíncrono</li>
                        <li>Interceptores de requisição e resposta, permitindo manipular dados antes de serem enviados ou recebidos</li>
                        <li>Cancelamento de requisições, o que é útil em casos onde não precisamos mais de uma resposta</li>
                        <li>Suporte a transformações de dados, permitindo modificar os dados antes de enviá-los ou após recebê-los</li>
                        <li>Suporte a configuração global, o que facilita a reutilização de configurações em diferentes partes da aplicação</li>
                    </ul>
                    <p>Essas características tornam o Axios uma escolha popular entre desenvolvedores que buscam uma maneira eficiente e flexível de lidar com requisições HTTP em suas aplicações. Hoje em dia, é uma das bibliotecas mais utilizadas para esse fim, tanto em projetos web quanto em aplicações móveis com React Native.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='installation-and-settings' className='flex flex-col gap-4'>
                    <h2 className='text-4xl'>Instalação e configuração</h2>
                    <p>Para instalar o Axios em seu projeto, é bem simples, basta executar o seguinte comando no terminal:</p>
                    <CodeArea code={`npm install axios`} language='bash' />
                    <p>Após a instalação, você pode importar o Axios em seus arquivos JavaScript ou TypeScript da seguinte forma:</p>
                    <CodeArea code={`import axios from 'axios'`} language='typescript' />
                    <p>O Axios não requer uma configuração complexa para começar a ser utilizado. No entanto, você pode configurar algumas opções globais, como o URL base para todas as requisições, cabeçalhos padrão e tempo limite. Para isso, você pode criar um arquivo de configuração, por exemplo, <code>apiInstance.ts</code>:</p>
                    <CodeArea link='/recommendations/axios/apiInstance.ts' />
                    <p>Com essa configuração, todas as requisições feitas com essa instância do Axios utilizarão o URL base definido, além de incluir o cabeçalho de autenticação com o token JWT, se necessário. Você pode criar várias instâncias do Axios com diferentes configurações, dependendo das necessidades do seu projeto.</p>
                    <p>O cabeçalho JWT pode inclusive ser alterado por meio da criação de uma função auxiliar:</p>
                    <CodeArea link='/recommendations/axios/setJwtToken.ts' />
                    <p>Essa função pode ser chamada sempre que você precisar atualizar o token JWT, por exemplo, após o login do usuário ou quando o token for renovado.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='making-requests' className='flex flex-col gap-4'>
                    <h2 className='text-4xl'>Realizando requisições</h2>
                    <p>Com o Axios configurado, você pode começar a fazer requisições HTTP de forma simples. O Axios suporta todos os métodos HTTP, como GET, POST, PUT, DELETE, entre outros. Aqui estão alguns exemplos de como fazer requisições com o Axios:</p>
                    <CodeArea link='/recommendations/axios/getRequest.ts' />
                    <p>Para fazer uma requisição GET, você pode usar o método <code>axios.get</code>. Esse método aceita o URL da requisição como parâmetro e retorna uma promessa que resolve com a resposta do servidor. A url que você passar pode ser relativa ou absoluta, dependendo da configuração do seu Axios. A mesma lógica segue para qualquer outro tipo de request.</p>
                    <CodeArea link='/recommendations/axios/postRequest.ts' />
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='error-handling' className='flex flex-col gap-4'>
                    <h2 className='text-4xl'>Tratamento de erros</h2>
                    <p>O Axios facilita o tratamento de erros nas requisições. Quando uma requisição falha, o Axios rejeita a promessa com um objeto de erro que contém informações sobre o erro ocorrido. Você pode capturar esses erros usando o método <code>.catch</code> ou utilizando o bloco <code>try/catch</code> com <code>async/await</code>.</p>
                    <CodeArea link='/recommendations/axios/errorHandling.ts' />
                    <p>Além disso, você pode personalizar o tratamento de erros para lidar com diferentes tipos de erros, como erros de rede, erros de autenticação ou erros do servidor. O Axios também permite que você verifique se o erro é um erro do Axios usando o método <code>axios.isAxiosError</code>, o que pode ser útil para diferenciar erros de rede de erros de resposta do servidor.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='interceptors' className='flex flex-col gap-4'>
                    <h2 className='text-4xl'>Interceptors</h2>
                    <p>Os interceptors do Axios permitem que você intercepte requisições ou respostas antes que sejam processadas. Isso é útil para adicionar cabeçalhos, manipular dados ou lidar com erros de forma centralizada.</p>
                    <p>Você pode adicionar interceptors de requisição e resposta usando os métodos <code>axios.interceptors.request.use</code> e <code>axios.interceptors.response.use</code>. Aqui está um exemplo de como usar interceptors:</p>
                    <CodeArea link='/recommendations/axios/interceptors.ts' />
                    <p>Com os interceptors, você pode, por exemplo, adicionar um token de autenticação a todas as requisições ou lidar com erros de forma consistente em toda a aplicação, sem precisar repetir o código em cada requisição.</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
