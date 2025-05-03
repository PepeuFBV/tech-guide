import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import type { Tech } from '@/types/tech'
import { cn } from '@/utils/lib/tailwind-merge'

interface TechCardProps {
    tech: Tech
    className?: string
}
const TechCard: React.FC<TechCardProps> = ({ tech, className }) => {
    return (
        <Link
            href={tech.href}
            className='col-span-1 cursor-pointer'
        >
            <div className={cn('h-full max-w-sm px-7 py-6 bg-white border border-secondary rounded-lg dark:bg-zinc-800/70 dark:border-gray-700 shadow-md flex flex-col space-y-3 relative', className)}>
                {tech.externalLink && (
                    <div className='absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>
                        <ExternalLink size={20} />
                    </div>
                )}
                <div className='h-16 w-16'>
                    {tech.icon}
                </div>
                <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{tech.title}</h5>
                <p className='text-gray-500 dark:text-gray-400'>{tech.description}</p>
            </div>
        </Link>
    )
}

export { TechCard }
