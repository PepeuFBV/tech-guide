'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/lib/tailwind-merge'

interface SidebarButtonProps {
    href: string
    logo?: React.ReactNode
    children: React.ReactNode
    className?: string
}
const SidebarButton: React.FC<SidebarButtonProps> = ({ href, logo, children, className }) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link passHref href={href}>
            <Button
                variant='sidebar'
                size='sidebar'
                className={cn('text-base font-bold', className, isActive ? 'text-sidebar-button-active' : 'text-sidebar-button')}
            >
                {logo}
                {children}
            </Button>
        </Link>
    )
}

export { SidebarButton }
