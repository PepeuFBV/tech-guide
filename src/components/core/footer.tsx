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
        <footer className={cn('md:w-[75%] lg:w-[80%] bottom-0 h-20 bg-background flex items-center px-6', justifyContent, className)} >
            <PageCard previous />
            <PageCard />
        </footer >
    )
}

export default Footer
