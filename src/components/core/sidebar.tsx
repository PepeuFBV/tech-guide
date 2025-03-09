import React from 'react'
import { cn } from '@/utils/lib/tailwind-merge'

interface SidebarProps {
    className?: string
}
const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    return (
        <section className={cn('bg-sidebar', className)}>
            <p>test</p>
        </section>
    )
}

export default Sidebar
