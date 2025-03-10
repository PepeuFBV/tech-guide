import type { SidebarEntry, SidebarItem } from '@/types/sidebar'
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
                title: 'Introduction',
                href: '/introduction',
            },
            {
                title: 'Installation',
                href: '/installation',
            },
            {
                title: 'Configuration',
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
                title: 'Introduction',
                href: '/react/introduction',
            },
            {
                title: 'Installation',
                href: '/react/installation',
            },
            {
                title: 'Configuration',
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
                title: 'Introduction',
                href: '/next/introduction',
            },
            {
                title: 'Installation',
                href: '/next/installation',
            },
            {
                title: 'Configuration',
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
