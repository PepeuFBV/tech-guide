import React from 'react'
import type { Topic } from '@/types/topic'
import { IndexButton } from '@/components/core/page-index/index-button'
import { cn } from '@/utils/lib/tailwind-merge'

interface PageIndexProps {
    topics: Topic[]
    className?: string
}
const PageIndex: React.FC<PageIndexProps> = ({ topics, className }) => {

    return (
        <nav className={cn('hidden md:flex fixed right-10 md:right-5 h-full space-x-4 text-sm', className)}>
            <div className='h-fit flex flex-col space-y-4 border-l-[1px] border-secondary py-2'>
                <h3 className='pl-4 font-bold text-sidebar-button'>Tópicos</h3>
                <ul className='flex flex-col space-y-0.5'>
                    {topics.map((topic, key) => (
                        <li key={key}>
                            <IndexButton href={topic.href}>
                                {topic.title}
                            </IndexButton>
                        </li>
                    ))}
                </ul>
            </div>
        </nav >
    )
}

export default PageIndex
