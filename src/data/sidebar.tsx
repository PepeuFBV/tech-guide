import type { SidebarEntry } from '@/types/sidebar'
import { Ecosystem } from '@/components/ui/icons/ecosystem'
import { ReactJS } from '@/components/ui/icons/reactjs'
import { NextJS } from '@/components/ui/icons/nextjs'
import { Github } from '@/components/ui/icons/github'
import { Archive } from 'lucide-react'
import { FaLaptopCode } from 'react-icons/fa'
import { SeedaBit } from '@/components/ui/icons/seedabit'

const sidebar: SidebarEntry[] = [
    {
        id: 0,
        title: 'Ecossistema',
        href: '/introduction',
        icon: <Ecosystem />,
        items: [
            {
                id: 0,
                title: 'Introdução e Instalação',
                href: '/introduction',
            },
            {
                id: 1,
                title: 'Configurações e Diretórios',
                href: '/settings',
            },
            {
                id: 2,
                title: 'Node',
                href: '/node',
            },
            {
                id: 3,
                title: 'Typescript',
                href: '/typescript',
            },
            {
                id: 4,
                title: 'Tailwind',
                href: '/tailwind',
            },
            {
                id: 5,
                title: 'ESLint',
                href: '/eslint',
            },
            {
                id: 6,
                title: 'Husky',
                href: '/husky',
            }
        ],
    },
    {
        id: 1,
        title: 'React',
        href: '/react/introduction',
        icon: <ReactJS />,
        items: [
            {
                id: 7,
                title: 'Introdução ao React',
                href: '/react/introduction',
            },
            {
                id: 8,
                title: 'Componentes',
                href: '/react/components',
            },
            {
                id: 9,
                title: 'Props',
                href: '/react/props',
            },
            {
                id: 10,
                title: 'Hooks',
                href: '/react/hooks',
            },
        ],
    },
    {
        id: 2,
        title: 'Next',
        href: '/next/introduction',
        icon: <NextJS />,
        items: [
            {
                id: 11,
                title: 'Introdução',
                href: '/next/introduction',
            },
            {
                id: 12,
                title: 'Instalação e Configuração',
                href: '/next/installation-and-settings',
            },
            {
                id: 13,
                title: 'Roteamento',
                href: '/next/routing',
            }
        ],
    },
    {
        id: 3,
        title: 'Git e GitHub',
        href: '/git/introduction',
        icon: <Github size={16} />,
        items: [
            {
                id: 14,
                title: 'Introdução',
                href: '/git/introduction',
            },
            {
                id: 15,
                title: 'Repositórios, Commits e Branches',
                href: '/git/repositories-commits-and-branches',
            },
            {
                id: 16,
                title: 'Commits Semânticos',
                href: '/git/semantic-commits',
            }
        ],

    },
    {
        id: 4,
        title: 'Seed a Bit - CLI',
        href: '/cli/learn',
        icon: <SeedaBit size={16} />,
        items: [
            {
                id: 17,
                title: 'Aprenda',
                href: '/cli/learn',
            },
            {
                id: 18,
                title: 'Projetos',
                href: '/cli/projects',
            },
            {
                id: 19,
                title: 'Componentes',
                href: '/cli/components',
            }
        ]
    },
    {
        id: 5,
        title: 'Desafio',
        href: '/desafio/introduction',
        icon: <FaLaptopCode />,
        items: [
            {
                id: 20,
                title: 'Introdução',
                href: '/desafio/introduction',
            },
            // {
            //     id: 21,
            //     title: 'Monitorias',
            //     href: '/desafio/steps',
            // },
        ],
    },
    {
        id: 6,
        title: 'Recomendações',
        href: '/recommendations/introduction',
        icon: <Archive size={16} />,
        items: [
            {
                id: 21,
                title: 'Introdução',
                href: '/recommendations/introduction'
            },
            {
                id: 22,
                title: 'Jest',
                href: '/recommendations/jest',
            }
        ]
    }
]

export { sidebar }
