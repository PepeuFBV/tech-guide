'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/lib/tailwind-merge'
import { getFirstNameFromPathname } from '@/utils/string'

const sidebarVariants = cva(
    'px-2',
    {
        variants: {
            variant: {
                title: 'text-wrap text-start font-bold text-base',
                subtitle: 'text-wrap text-start font-thin text-sm',
            },
        },
        defaultVariants: {
            variant: 'title',
        },
    }
)

interface SidebarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof sidebarVariants> {
    href: string
    icon?: React.ReactNode
    children: React.ReactNode
    className?: string
}
const SidebarButton: React.FC<SidebarButtonProps> = ({ variant, href, icon, children, className, ...props }) => {
    const pathname = usePathname()

    function checkForSubsections(): boolean {
        return getFirstNameFromPathname(pathname) === getFirstNameFromPathname(href) && variant === 'title'
    }

    const isActive: boolean = (pathname === href || checkForSubsections()) && pathname !== '/'

    return (
        <Link passHref href={href} className='w-fit'>
            <Button
                variant='sidebar'
                size='sidebar'
                className={cn(sidebarVariants({ variant }), isActive ? 'text-sidebar-button-active' : 'text-sidebar-button', className)
                }
                {...props}
            >
                {icon}
                {children}
            </Button>
        </Link >
    )
}

export { SidebarButton }
