import React from 'react'
import { SidebarTitle } from '@/components/core/sidebar/sidebar-title'
import { Divider } from '@/components/ui/divider'

import type { SidebarItem } from '@/types/sidebar'

import { cn } from '@/utils/lib/tailwind-merge'
import { SidebarButton } from './sidebar-button'

const INDIVIDUAL_DIV_HEIGHT = 300

interface SidebarGroupProps {
    title: string
    href?: string
    icon?: React.ReactNode
    items?: SidebarItem[]
    className?: string
}
const SidebarGroup: React.FC<SidebarGroupProps> = ({ title, href = '', icon, items, className }) => {

    const dividerHeight = INDIVIDUAL_DIV_HEIGHT * (items?.length || 0)

    return (
        <div className={cn('h-full flex flex-col space-y-1', className)}>
            <SidebarTitle href={href} icon={icon}>
                {title}
            </SidebarTitle>
            <div className='h-full flex flex-row space-x-2'>
                <Divider className={cn('ml-4 h-full', `h-[${dividerHeight}px]`)} variant='vertical' />
                <div className='h-full flex flex-col space-y-1'>
                    {items && items.map((item, index) => (
                        <SidebarButton key={index} href={item.href} variant='subtitle'>
                            {item.title}
                        </SidebarButton>
                    ))}
                </div>
            </div>
        </div>
    )
}

export { SidebarGroup }