import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { Topic } from '@/types/topic'
import type { Tech } from '@/types/tech'
import { TechCard } from '@/components/ui/tech-card'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Recomendações', href: 'recommendations' }
]

const tech: Tech[] = [
    {
        title: 'Jest',
        description: 'Realize testes de todo tipo no seu software',
        icon: <></>,
        href: '/recommendations/jest',
    },
    {
        title: 'Shadcn',
        description: 'Utilize e personalize componentes React de alta qualidade',
        icon: <></>,
        href: '/recommendations/shadcn'
    }
]

export default function Props() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Introdução</h1>
                    <p>No decorrer do seu desenvolvimento e aprofundamento na linguagem e ferramentas apresentadas nesse guia, você sentirá a necessidade da utilização de algumas bibliotecas ou ferramentas adicionais, as mesmas serão apresentadas abaixo por meio de recomendações de uso; não é obrigatório o uso das ferramentas/bibliotecas abaixo.</p>
                    <p className='text-secondary'>Use das recomendações com sabedoria e consciência, já que o uso incorreto das mesmas pode atrapalhar o desenvolvimento do software.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='recommendations' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Recomendações</h2>
                    <p>As bibliotecas e ferramentas apresentadas abaixo servem de recomendações para o uso durante o desenvolvimento, há bibliotecas de componentes, ferramentas de testes, softwares etc. Leia sobre cada ferramenta em sua respectiva página.</p>
                    <div className='my-4 grid col-span-1 md:col-span-2 xl:grid-cols-3 gap-4'>
                        {tech.map((tech, index) => (
                            <TechCard key={index} tech={tech} />
                        ))}
                    </div>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
