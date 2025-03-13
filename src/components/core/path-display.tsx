'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { SidebarItem } from '@/types/sidebar'
import { sidebar } from '@/data/sidebar'

const PathDisplay = () => {
    const pathname: string = usePathname()

    function getNames(pathname: string): string[] {
        const allPaths: SidebarItem[] = sidebar.flatMap(entry => entry.items).filter(item => item !== undefined)
        const currentEntry: SidebarItem | undefined = allPaths.find(entry => entry.href === pathname)
        return currentEntry ? [currentEntry.title] : []
    }

    function getSection(pathname: string) {
        const sidebarEntry: SidebarItem | undefined = sidebar.find(entry => entry.href === pathname)
        return sidebarEntry ? sidebarEntry.title : 'Ecossistema'
    }

    const names: string[] = getNames(pathname)
    if (names.length === 0) return null

    let currentName: string = ''

    return (
        <nav className='flex space-x-1 text-primary'>
            {names.length === 1 && (
                names[names.length - 1] === '/' ? (
                    <Link href='/introduction' className='text-secondary'>Ecossistema</Link>
                ) : (
                    <Link href='/introduction' className='text-secondary'>{getSection(pathname)}</Link>
                )
            )}
            <ChevronRight className='text-secondary' />
            {names.map((name, index) => {
                currentName += `/${name}`
                const isCurrent = index === names.length - 1
                return (
                    <React.Fragment key={index}>
                        <Link href={currentName} className={isCurrent ? 'text-primary hover:text-secondary' : 'text-secondary'}>
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
