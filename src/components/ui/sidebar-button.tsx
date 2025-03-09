'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/lib/tailwind-merge'

interface SidebarButtonProps {
    href: string
    children: React.ReactNode
    className?: string
}
const SidebarButton: React.FC<SidebarButtonProps> = ({ href, children, className }) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link passHref href={href}>
            <Button
                variant='sidebar'
                size='sidebar'
                className={cn('text-base font-bold', className, isActive ? 'text-sidebar-button-active' : 'text-sidebar-button')}
            >
                {children}
            </Button>
        </Link>
    )
}

export { SidebarButton }
