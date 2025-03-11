'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { getPathnameNames } from '@/utils/string'
import { ChevronRight } from 'lucide-react'

const ptbrMapping: { [key: string]: string } = {
    'introduction': 'Introdução',
    'installation': 'Instalação',
    'configuration': 'Configuração',
    'features': 'Features',
    'typescript': 'Typescript',
    'tailwind': 'Tailwind',
    'eslint': 'ESLint',
}

const PathDisplay = () => {
    const pathname: string = usePathname()
    const names: string[] = getPathnameNames(pathname)
    if (names.length === 0) return null

    let currentName: string = ''

    return (
        <nav className='flex space-x-1 text-primary'>
            {names.length === 1 && (
                names[names.length - 1] === '/' ? (
                    <Link href='/introduction' className='text-secondary'>Ecossistema</Link>
                ) : (
                    <Link href='/introduction' className='text-secondary'>Ecossistema</Link>
                )
            )}
            <ChevronRight className='text-secondary' />
            {names.map((name, index) => {
                currentName += `/${name}`
                const isCurrent = index === names.length - 1
                return (
                    <React.Fragment key={index}>
                        <Link href={currentName} className={isCurrent ? 'text-primary hover:text-secondary' : 'text-secondary capitalize'}>
                            {ptbrMapping[name] || name}
                        </Link>
                        {index < names.length - 1 && <ChevronRight />}
                    </React.Fragment>
                )
            })}
        </nav>
    )
}

export default PathDisplay