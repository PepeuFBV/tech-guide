import React from 'react'
import PathDisplay from '@/components/core/path-display'
import PageIndex from '@/components/core/page-index/page-index'
import type { Topic } from '@/types/topic'
import { Divider } from '@/components/ui/divider'





const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'Papel do Monitor', href: 'monitor_role' },
    { title: 'Meios de Comunicação', href: 'communication' },
]




export default function Tailwind() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center space-y-3 px-3 md:px-10'>
                <PathDisplay />
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-4'>
                        <h1 id='introduction' className='text-4xl'>Introdução</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi voluptate doloremque beatae tempora libero vitae deserunt amet. Quaerat fugiat assumenda sint error odit, animi minima unde eius consequatur, voluptatem fugit?</p>
                    </div>
                    <Divider variant='horizontal' color='secondary' className='w-full'/>
                    <div className='flex flex-col space-y-6'>
                    <h1 id="monitor_role" className='text-4xl'>Papel do Monitor</h1>

                        <div className='flex flex-col space-y-4'>
                            <h2 id='requirements' className='text-2xl'>Product Owner</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero enim pariatur atque ullam nam ea assumenda quae in iste eaque quos necessitatibus ab aperiam, obcaecati iure voluptates. Incidunt, corrupti ducimus.</p>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <h2 id='prototyping' className='text-2xl'>Papel 2</h2>
                        <p>Com os requisitos estabelecidos, são criados wireframes e protótipos para representar visualmente a interface e o fluxo do sistema. Essa fase permite validar ideias, ajustar detalhes antes da implementação e garantir uma experiência intuitiva para o usuário.</p>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <h2 id='prototyping' className='text-2xl'>Papel 3</h2>
                        <p>A fase de codificação transforma o protótipo em um sistema funcional. São estruturadas as telas, implementadas regras de negócio e integrados serviços necessários. A equipe segue um planejamento ágil, revisando e ajustando o código conforme necessário.</p>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <h2 id='prototyping' className='text-2xl'>Papel 4</h2>
                        <p>Com o sistema desenvolvido, são realizados testes para verificar a funcionalidade, desempenho e usabilidade. Identificam-se possíveis erros, garantindo que tudo funcione corretamente antes da entrega final. Ajustes e refinamentos são feitos conforme necessário para aprimorar a qualidade do produto.</p>
                        </div>
                        <Divider variant='horizontal' color='secondary' className='w-full'/>
                        <div className='flex flex-col space-y-4'>
                        <h1 id='communication' className='text-4xl'>Meios de Comunicação</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi voluptate doloremque beatae tempora libero vitae deserunt amet. Quaerat fugiat assumenda sint error odit, animi minima unde eius consequatur, voluptatem fugit?</p>
                    </div>
                        
                    </div>
                 
                    

                </div>

                
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}