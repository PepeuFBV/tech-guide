'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { SidebarItem } from '@/types/sidebar'
import { sidebar } from '@/data/sidebar'
import { cn } from '@/utils/lib/tailwind-merge'
import { getFirstNameFromPathname } from '@/utils/string'

interface PageCardProps {
    previous?: boolean
    className?: string
}
const PageCard: React.FC<PageCardProps> = ({ previous = false, className }) => {
    const pathname = usePathname()
    const [isHover, setIsHover] = useState<boolean>(false)

    function calculatePage(pathname: string, previous: boolean): SidebarItem | null {
        const topics: SidebarItem[] = sidebar.flatMap((section) => section.items).filter((item): item is SidebarItem => item !== undefined)
        if (pathname === '/' && !previous) return topics[0]
        const currentPage: SidebarItem | undefined = topics.find((topic) => topic.href === pathname)

        if (!currentPage) return null

        if (previous) {
            if (!topics[currentPage.id - 1]) return null // id 0 edge case
            return topics[currentPage.id - 1]
        }
        return topics[currentPage.id + 1] || null
    }

    function getNameIfIntro(page: SidebarItem): string | null {
        if (page.href.includes('introduction')) {
            if (getFirstNameFromPathname(page.href) === '/') return 'Ecossistema'
            else if (getFirstNameFromPathname(page.href) === '/react') return 'React'
            else if (getFirstNameFromPathname(page.href) === '/next') return 'Next'
        }
        return page.title
    }

    const page = calculatePage(pathname, previous)
    if (!page) return null

    const pageTitle = getNameIfIntro(page)
    const href = page?.href || '/'

    const title: string = previous ? 'Página Anterior' : 'Próxima página'
    const flexDirection: string = previous ? 'items-start' : 'items-end'

    return (
        <Link href={href} className='text-sidebar-button-active' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <div className={cn('w-40 md:w-48 flex items-center justify-between px-6 py-4 border border-muted rounded-lg shadow-md', className)}>
                <div className={cn('w-full flex flex-col space-y-1', flexDirection)}>
                    <p className='text-xs font-bold text-secondary '>{title}</p>
                    <p className={isHover ? 'underline' : ''}>{pageTitle}</p>
                </div>
            </div>
        </Link>
    )
}

export { PageCard }
