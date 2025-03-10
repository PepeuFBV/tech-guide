import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import type { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Getting Started', href: '#getting-started' },
    { title: 'Features', href: '#features' },
    { title: 'Installation', href: '#installation' },
    { title: 'Configuration', href: '#configuration' },
]

export default function Introduction() {
    return (
        <div className='w-full h-full flex items-start justify-start space-x-10'>
            <div className='w-[75%] lg:w-[80%] flex flex-col justify-center space-y-10 px-3 md:px-10'>
                <h1 className='text-4xl'>Introdução</h1>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
