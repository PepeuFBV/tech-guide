import React from 'react'
import { cn } from '@/utils/lib/tailwind-merge'
import Link from 'next/link'

interface TechCardProps {
    title: string
    description: string
    href: string
    icon?: React.ReactNode
    className?: string
}
const TechCard: React.FC<TechCardProps> = ({ title, description, href, icon, className }) => {
    return (
        <Link
            href={href}
            className={cn('col-span-1 h-28 bg-muted shadow-md rounded-lg py-4 px-8 flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-8 cursor-pointer', className)}
        >
            {icon && (
                <div className='h-full flex items-center justify-center gap-4 sm:gap-7'>
                    <div className='flex flex-col items-center justify-center gap-1 w-20'>
                        <div className='w-fit flex items-center justify-center h-10'>
                            {icon}
                        </div>
                        <div className='w-full flex items-center justify-center'>
                            <h3 className='text-sm font-semibold'>{title}</h3>
                        </div>
                    </div>
                    <p className='text-center text-sm w-full lg:w-[70%]'>{description}</p>
                </div>
            ) || (
                    <div className='w-full flex flex-col items-center justify-center'>
                        <h3 className='text-sm font-semibold'>{title}</h3>
                        <p className='text-center text-sm'>{description}</p>
                    </div>
                )}
        </Link>
    )
}

export { TechCard }