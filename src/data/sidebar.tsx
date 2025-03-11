import type { SidebarEntry } from '@/types/sidebar'
import { Ecosystem } from '@/components/ui/icons/ecosystem'
import { ReactJS } from '@/components/ui/icons/reactjs'
import { NextJS } from '@/components/ui/icons/nextjs'

const sidebar: SidebarEntry[] = [
    {
        title: 'Ecosystem',
        href: '/introduction',
        icon: <Ecosystem />,
        items: [
            {
                title: 'Introdução',
                href: '/introduction',
            },
            {
                title: 'Configuração',
                href: '/configuration',
            },
            {
                title: 'Features',
                href: '/features',
            },
            {
                title: 'Typescript',
                href: '/typescript',
            },
            {
                title: 'Tailwind',
                href: '/tailwind',
            },
            {
                title: 'ESLint',
                href: '/eslint',
            }
        ],
    },
    {
        title: 'React',
        href: '/react/introduction',
        icon: <ReactJS />,
        items: [
            {
                title: 'Introdução',
                href: '/react/introduction',
            },
            {
                title: 'Instalação',
                href: '/react/installation',
            },
            {
                title: 'Configuração',
                href: '/react/configuration',
            },
            {
                title: 'Features',
                href: '/react/features',
            },
        ],
    },
    {
        title: 'Next',
        href: '/next/introduction',
        icon: <NextJS />,
        items: [
            {
                title: 'Introdução',
                href: '/next/introduction',
            },
            {
                title: 'Instalação',
                href: '/next/installation',
            },
            {
                title: 'Configuração',
                href: '/next/configuration',
            },
            {
                title: 'Features',
                href: '/next/features',
            },
        ],
    }
]

export { sidebar }
