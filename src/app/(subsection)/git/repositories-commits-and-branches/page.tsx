import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { CodeArea } from '@/components/ui/code-area'
import type { Topic } from '@/types/topic'
import VisitLink from '@/components/ui/visit-link'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Criando um Repositório', href: 'creating-a-repository' },
    { title: '.gitignore', href: 'gitignore' },
    { title: 'Commits', href: 'commits' },
    { title: 'Branches', href: 'branches' },
    { title: 'Repositórios Remotos', href: 'remote-repositories' },
    { title: 'Pull Requests', href: 'pull-requests' },
]

export default function RepositoriesCommitsAndBranches() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Introdução</h1>
                    <p>Esta parte do guia irá ensinar como começar a usar o Git, cobrindo os conceitos básicos de repositórios, commits, branches e repositórios remotos. Ao final, você estará apto a criar e gerenciar projetos utilizando o Git de forma eficiente, colaborativa e organizada. É crucial entender esses conceitos para garantir um fluxo de trabalho produtivo e evitar problemas comuns ao trabalhar com controle de versão.</p>
                    <p>Abaixo, você conseguirá aprender a criar um repositório, clonar, fazer o commit, pull e push de arquivos, entre outras funcionalidades.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='creating-a-repository' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Criando um Repositório</h2>
                    <p>Para começar a usar o Git em um projeto, é necessário criar um repositório. Isso pode ser feito com o comando <code>git init</code>, que inicializa um repositório Git em um diretório existente.</p>
                    <CodeArea code={`git init`} language='bash' />
                    <p>O comando cria um diretório oculto chamado <code>.git</code>, que contém todos os arquivos necessários para o controle de versão do projeto. Após isso, você pode adicionar arquivos ao repositório e começar a rastrear as alterações.</p>
                    <p>Após executar o comando, o Git começará a rastrear as alterações no diretório atual. Você pode verificar o status do repositório com o comando:</p>
                    <CodeArea code={`git status`} language='bash' />
                    <p className='text-secondary'>O git apenas rastreia para arquivos que estão dentro do diretório do repositório, apenas sub-diretórios com arquivos são rastreados. Caso deseje rastrear um sub-diretório, você pode criar um arquivo <code>.gitkeep</code> dentro do sub-diretório desejado.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='gitignore' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'><code>.gitignore</code></h2>
                    <p>O arquivo <code>.gitignore</code> é usado para especificar quais arquivos ou diretórios o Git deve ignorar. Isso é útil para evitar o rastreamento de arquivos temporários, de configuração local ou outros que não devem ser incluídos no repositório.</p>
                    <p>Para criar um arquivo <code>.gitignore</code>, basta adicioná-lo na raiz do repositório e listar os arquivos ou diretórios que deseja ignorar. Por exemplo:</p>
                    <CodeArea link='/git/repositories-commits-and-branches/.gitignore' />
                    <p className='text-secondary'>Lembre-se de o arquivo <code>.gitignore</code> não deve conter nenhuma extensão, apenas o nome <code>.gitignore</code>.</p>
                    <p>Após criar ou modificar o <code>.gitignore</code>, certifique-se de que os arquivos listados não estão sendo rastreados pelo Git. Caso já estejam, será necessário removê-los do rastreamento com o comando:</p>
                    <CodeArea code={`git rm --cached <arquivo-ou-diretório>`} language='bash' />
                    <h3 className='text-2xl'>Boas Práticas</h3>
                    <p>É importante manter o arquivo <code>.gitignore</code> atualizado e organizado, evitando que arquivos desnecessários (<code>node_modules/</code>, <code>.env</code>, <code>.next/</code> etc) sejam incluídos no repositório. Além disso, é recomendável usar padrões comuns de <code>.gitignore</code> para linguagens e frameworks específicos. O uso do <code>.gitignore</code> é essencial num ambiente de desenvolvimento colaborativo.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='commits' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Commits</h2>
                    <p>Commits são usados para salvar alterações no repositório. Cada commit representa um ponto no tempo do projeto, permitindo reverter alterações ou entender o histórico do projeto. É importante fazer commits frequentes e descritivos para manter um bom histórico de alterações.</p>
                    <p>Antes de realizar um commit, é necessário adicionar os arquivos ao stage utilizando o comando:</p>
                    <CodeArea code={`git add <arquivo-ou-diretório>`} language='bash' />
                    <p>O stage é uma área temporária onde as alterações são armazenadas antes de serem confirmadas no commit final. Para salvar as alterações (commit), use o comando:</p>
                    <CodeArea code={`git commit -m "Mensagem do commit"`} language='bash' />
                    <p>Certifique-se de escrever mensagens claras e descritivas para facilitar o entendimento do histórico de alterações. Usando o padrão de <VisitLink href='/git/repositories-commits-and-branches'>commits semânticos</VisitLink>.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='branches' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Branches</h2>
                    <p>Branches permitem trabalhar em diferentes funcionalidades ou correções sem interferir no código principal. Isso facilita a colaboração em equipe e o desenvolvimento de novas funcionalidades. O Git cria uma branch padrão chamada <code>main</code> (ou <code>master</code>) ao inicializar um repositório. Na maioria dos casos, você deve criar uma nova branch para cada nova funcionalidade ou correção que deseja implementar.</p>
                    <p>Geralmente também é criada uma branch chamada <code>dev</code> para desenvolvimento, onde as novas funcionalidades são testadas antes de serem mescladas na branch principal; que pode estar em produção. Para criar uma nova branch, use o comando:</p>
                    <CodeArea code={`git branch <nome-da-branch>`} language='bash' />
                    <p>Para mudar para a nova branch, use:</p>
                    <CodeArea code={`git checkout <nome-da-branch>`} language='bash' />
                    <p>Ou combine os dois comandos com:</p>
                    <CodeArea code={`git checkout -b <nome-da-branch>`} language='bash' />
                    <p>Para listar todas as branches, use:</p>
                    <CodeArea code={`git branch`} language='bash' />
                    <h3 className='text-2xl'>Mesclando Branches</h3>
                    <p>Após finalizar o desenvolvimento de uma nova funcionalidade, você pode mesclar a branch de volta à branch principal. Para isso, primeiro mude para a branch principal (ou a branch que deseja mesclar) e use o comando:</p>
                    <CodeArea code={`git merge <nome-da-branch>`} language='bash' />
                    <p>Isso irá mesclar as alterações da branch especificada na branch atual. Caso haja conflitos, o Git irá solicitar que você resolva os conflitos antes de concluir a mesclagem.</p>
                    <p>Para excluir uma branch após a mesclagem, use:</p>
                    <CodeArea code={`git branch -d <nome-da-branch>`} language='bash' />
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='remote-repositories' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Repositórios Remotos</h2>
                    <p>Repositórios remotos permitem colaborar com outras pessoas, compartilhar código e manter um backup do seu projeto. O GitHub é uma plataforma popular para hospedar repositórios remotos. Para usar o GitHub, você precisa criar uma conta e criar um novo repositório.</p>
                    <p>Após criar um repositório no GitHub, você pode conectar seu repositório local a ele. Para isso, copie a URL do repositório remoto e use o comando:</p>
                    <CodeArea code={`git remote add origin <url-do-repositório>`} language='bash' />
                    <p>Para enviar alterações ao repositório remoto, use:</p>
                    <CodeArea code={`git push -u origin <nome-da-branch>`} language='bash' />
                    <p>Para obter alterações do repositório remoto, use:</p>
                    <CodeArea code={`git pull origin <nome-da-branch>`} language='bash' />
                    <p>Isso irá baixar as alterações do repositório remoto e mesclá-las na branch atual. É importante manter seu repositório local atualizado com as alterações do repositório remoto para evitar conflitos e garantir que você esteja sempre trabalhando com a versão mais recente do código.</p>
                    <p>Sobre branches remotas, o GitHub permite criar branches diretamente na plataforma, facilitando a colaboração em equipe. Para criar uma branch remota, use o comando:</p>
                    <CodeArea code={`git push origin <nome-da-branch>`} language='bash' />
                    <p>Isso irá criar uma nova branch no repositório remoto com o mesmo nome da branch local. Para listar as branches remotas, use:</p>
                    <CodeArea code={`git branch -r`} language='bash' />
                    <p>Para excluir uma branch remota, use:</p>
                    <CodeArea code={`git push origin --delete <nome-da-branch>`} language='bash' />
                    <p>Em relação ao repositório remoto, o GitHub também oferece funcionalidades como pull requests, issues e wiki, que facilitam a colaboração e o gerenciamento de projetos. Para saber mais sobre essas funcionalidades, consulte a <VisitLink href='https://docs.github.com/pt'>documentação do GitHub</VisitLink>.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='pull-requests' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Pull Requests</h2>
                    <p>Pull Requests (PRs) são uma funcionalidade do GitHub que permite colaborar em projetos de forma organizada. Eles são usados para propor alterações em um repositório, permitindo que outros revisem e discutam o código antes de mesclá-lo.</p>
                    <p>Para criar um Pull Request, siga os passos abaixo:</p>
                    <ol className='list-decimal list-inside space-y-2 my-4'>
                        <li>Faça as alterações no código em uma branch separada.</li>
                        <li>Envie a branch para o repositório remoto com o comando:</li>
                        <CodeArea code={`git push origin <nome-da-branch>`} language='bash' />
                        <li>No GitHub, acesse o repositório e clique em "Pull Requests".</li>
                        <li>Clique em "New Pull Request" e selecione a branch que deseja mesclar.</li>
                        <li>Adicione uma descrição clara e envie o Pull Request.</li>
                    </ol>
                    <p>Os revisores podem comentar, solicitar alterações ou aprovar o Pull Request. Após a aprovação, ele pode ser mesclado na branch desejada. Isso garante que as alterações sejam revisadas e conflitos sejam resolvidos antes de serem incorporadas ao código principal, evitando problemas e melhorando a qualidade do código.</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
