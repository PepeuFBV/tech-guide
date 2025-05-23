import React from 'react'
import PathDisplay from '@/components/core/path-display'
import PageIndex from '@/components/core/page-index/page-index'
import type { Topic } from '@/types/topic'
import { Divider } from '@/components/ui/divider'
import { Project } from '@/types/project'
import { ProjectCard } from '@/components/ui/project-card'
import { PiDogBold } from 'react-icons/pi'
import { GiConsoleController } from 'react-icons/gi'
import { MdAttachMoney } from 'react-icons/md'
import { FaHouseChimney } from 'react-icons/fa6'
import { PiStudentFill } from 'react-icons/pi'
import { GiTeacher } from 'react-icons/gi'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Etapas', href: 'steps' },
    { title: 'Projetos', href: 'projects' },
]

const projects: Project[] = [
    {
        title: 'Ruralatinhas',
        description: 'Aplicativo móvel para adoção de animais.',
        icon: <PiDogBold size={70} />,
        href: 'https://www.notion.so/seed-a-bit-tec/APP-Ruralatinhas-1ba1cc709e3f80199dbfc91b9f145ceb',
    },
    {
        title: 'Gamificação da Seed',
        description: 'Aplicativo móvel para gamificação da Seed a Bit.',
        icon: <GiConsoleController size={70} />,
        href: 'https://www.notion.so/seed-a-bit-tec/App-de-Gamifica-o-da-Seed-1ba1cc709e3f80f7a4b4c043716aab65',
    },
    {
        title: 'SeedBank',
        description: 'Sistema Web para gerir os pagamentos que devem ser feitos para a Seed a Bit.',
        icon: <MdAttachMoney size={70} />,
        href: 'https://www.notion.so/seed-a-bit-tec/SeedBank-1ba1cc709e3f80d8b0bbc10ed8793108',
    },
    {
        title: 'Aplicativo da Imobiliária',
        description: 'Aplicativo móvel para uma imobiliária.',
        icon: <FaHouseChimney size={70} />,
        href: 'https://www.notion.so/seed-a-bit-tec/Aplicativo-para-Gest-o-de-Loca-o-Imobili-ria-1ba1cc709e3f80aca713e71d74200249',
    },
    {
        title: 'Gerenciamento de Bolsistas',
        description: 'Sistema Web voltado para o gerenciamento de bolsistas da UFRPE.',
        icon: <PiStudentFill size={70} />,
        href: 'https://www.notion.so/seed-a-bit-tec/Plataforma-de-Monitoramento-de-Bolsistas-e-Projetos-Acad-micos-1ba1cc709e3f80008ecffe2093c48b58',
    },
    {
        title: 'Sistema de Matriculas',
        description: 'Sistema Web voltado para matriculas em cursos.',
        icon: <GiTeacher size={70} />,
        href: 'https://www.notion.so/seed-a-bit-tec/Sistema-de-Matriculas-2-0-1ba1cc709e3f805e834ded26994ca6cf',
    },
]

const steps = [
    {
        id: 'requirements',
        title: 'Levantamento de Requisitos',
        description: 'Nessa etapa, são identificadas as necessidades do projeto, definindo escopo, funcionalidades e expectativas. A equipe discute os objetivos, limitações e principais desafios, garantindo um entendimento claro antes de seguir para o desenvolvimento.',
    },
    {
        id: 'prototyping',
        title: 'Prototipação',
        description: 'Com os requisitos estabelecidos, são criados wireframes e protótipos para representar visualmente a interface e o fluxo do sistema. Essa fase permite validar ideias, ajustar detalhes antes da implementação e garantir uma experiência intuitiva para o usuário.',
    },
    {
        id: 'development',
        title: 'Desenvolvimento',
        description: 'A fase de codificação transforma o protótipo em um sistema funcional. São estruturadas as telas, implementadas regras de negócio e integrados serviços necessários. A equipe segue um planejamento ágil, revisando e ajustando o código conforme necessário.',
    },
    {
        id: 'testing',
        title: 'Testes',
        description: 'Com o sistema desenvolvido, são realizados testes para verificar a funcionalidade, desempenho e usabilidade. Identificam-se possíveis erros, garantindo que tudo funcione corretamente antes da entrega final. Ajustes e refinamentos são feitos conforme necessário para aprimorar a qualidade do produto.',
    },
]

const Step = ({ title, description, id }: { title: string; description: string, id: string }) => {
    return (
        <div id={id} className='flex flex-col gap-2'>
            <h2 className='text-2xl'>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default function Tailwind() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Introdução</h1>
                    <p>O desafio da Fase 2 do Onboarding 2025.1 da Área de Projetos da Seed a Bit tem como objetivo desenvolver os membros por meio de projetos com aplicação prática, tanto interna quanto externamente. Para isso, seis projetos serão conduzidos, envolvendo tanto novos quanto antigos membros da equipe. Serão desenvolvidos três Sistemas Web e três Aplicativos Mobile, fortalecendo e consolidando esses dois serviços dentro da empresa.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='steps' className='flex flex-col gap-6'>
                    <h1 className='text-4xl'>Etapas</h1>
                    <div className='flex flex-col gap-6'>
                        {steps.map((step, index) => (
                            <Step key={index} title={step.title} description={step.description} id={step.id} />
                        ))}
                    </div>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='projects' className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-4xl'>Projetos</h1>
                        <p className='text-gray-300'>Clique no projeto para ver os detalhes! (Notion)</p>
                    </div>
                    <div className='grid col-span-1 md:col-span-2 xl:grid-cols-3 gap-4'>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
