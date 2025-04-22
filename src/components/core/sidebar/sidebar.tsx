'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { SidebarGroup } from '@/components/core/sidebar/sidebar-group'
import { Divider } from '@/components/ui/divider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sidebar } from '@/data/sidebar'
import { cn } from '@/utils/lib/tailwind-merge'

interface SidebarProps {
    className?: string
}
const Sidebar: React.FC<SidebarProps> = ({ className }) => { // sidebar class for the sidebar scroll style
    const pathname = usePathname()

    const pathnameHighlight: string = pathname === '/' ? 'text-sidebar-button-active' : ''

    return (
        <section className={cn('w-full bg-sidebar overflow-y-scroll sidebar', className)}>
            <div className='my-9 px-8 w-full h-full flex flex-col space-y-7'>
                <div className='flex flex-col md:gap-1'>
                    <Link passHref href='/'>
                        <Button
                            variant='link'
                            className={cn('w-fit px-2 text-base text-wrap font-bold text-accent-foreground hover:no-underline', pathnameHighlight)}
                        >
                            React and Next Guide
                        </Button>
                    </Link>
                    <Divider variant='horizontal' color={pathname === '/' ? 'highlight' : 'secondary'} className='my-0' />
                </div>
                <div className='flex flex-col space-y-3'>
                    {sidebar.map((group, index) => (
                        <SidebarGroup key={index} {...group} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Sidebar