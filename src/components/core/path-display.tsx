'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { SidebarEntry, SidebarItem } from '@/types/sidebar'
import { sidebar } from '@/data/sidebar'

const PathDisplay = () => {
    const pathname: string = usePathname()

    function getItem(pathname: string): SidebarItem | undefined {
        const allPaths: SidebarItem[] = sidebar.flatMap(entry => entry.items).filter(item => item !== undefined)
        const currentEntry: SidebarItem | undefined = allPaths.find(entry => entry.href === pathname)
        return currentEntry;
    }

    function getSection(pathname: string): SidebarEntry | undefined {
        let section = pathname.split('/')[1]
        const sidebarEntry: SidebarEntry | undefined = sidebar.find(entry => entry.href.split('/')[1] === section)
        return sidebarEntry;
    }

    const sectionItem = getItem(pathname)
    const names: string[] = sectionItem ? [sectionItem.title] : [];
    if (names.length === 0) return null
    let section = getSection(pathname)
    section = section ? section : { title: 'Ecossistema', href: '/introduction', id: 0, icon: null, items: [] }
    let currentName: string = ''

    return (
        <nav className='flex space-x-1 text-primary'>
            {names.length === 1 && (
                names[names.length - 1] === '/' ? (
                    <Link href='/introduction' className='text-secondary'>Ecossistema</Link>
                ) : (
                    <Link href={section.href} className='text-secondary'>{section.title}</Link>
                )
            )}
            <ChevronRight className='text-secondary' />
            {names.map((name, index) => {
                const isCurrent = index === names.length - 1
                let currrentHref = sectionItem ? sectionItem.href : "/introduction"
                return (
                    <React.Fragment key={index}>
                        <Link href={currrentHref} className={isCurrent ? 'text-primary hover:text-secondary' : 'text-secondary'}>
                            {name}
                        </Link>
                        {index < names.length - 1 && <ChevronRight />}
                    </React.Fragment>
                )
            })}
        </nav>
    )
}

export default PathDisplay
