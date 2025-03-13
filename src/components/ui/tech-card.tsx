import React from 'react'
import Link from 'next/link'
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
            {tech.icon && (
                <div className={cn('h-full max-w-sm px-7 py-6 bg-white border border-secondary rounded-lg dark:bg-zinc-800/70 dark:border-gray-700 shadow-md flex flex-col space-y-3', className)}>
                    <div className='h-16 w-16'>
                        {tech.icon}
                    </div>
                    <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{tech.title}</h5>
                    <p className='text-gray-500 dark:text-gray-400'>{tech.description}</p>
                </div>
            ) || (
                    <div className={cn('w-full flex flex-col items-center justify-center', className)}>
                        <h3 className='text-sm font-semibold'>{tech.title}</h3>
                        <p className='text-center text-sm'>{tech.description}</p>
                    </div>
                )}
        </Link>
    )
}

export { TechCard }