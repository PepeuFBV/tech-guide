'use client'

import React from 'react'
import { PageCard } from '@/components/ui/next-page-card'
import { usePathname } from 'next/navigation'
import type { SidebarItem } from '@/types/sidebar'
import { sidebar } from '@/data/sidebar'
import { cn } from '@/utils/lib/tailwind-merge'

interface FooterProps {
    className?: string
}
const Footer: React.FC<FooterProps> = ({ className }) => {
    const pathname = usePathname()

    type JustifyType = 'justify-between' | 'justify-end' | 'justify-start' | 'hidden'
    function checkForBothPages(): JustifyType { // also checks for page not-found
        if (pathname === '/') return 'justify-end'
        const topics: SidebarItem[] = sidebar.flatMap((section) => section.items).filter((item): item is SidebarItem => item !== undefined)
        const currentPageIndex: number = topics.findIndex((topic) => topic.href === pathname)
        if (currentPageIndex === -1) return 'hidden'
        if (currentPageIndex === 0) return 'justify-end'
        if (currentPageIndex === topics.length - 1) return 'justify-start'
        return 'justify-between'
    }

    const justifyContent: string = checkForBothPages()

    return (
        <footer className={cn('w-full md:w-[75%] lg:w-[80%] bottom-0 h-32 md:h-20 bg-background px-3 md:px-10', justifyContent, className)}>
            <div className='w-full flex flex-wrap gap-3 items-center justify-between px-3 md:px-6'>
                <PageCard previous />
                <PageCard />
            </div>
        </footer>
    )
}

export default Footer
