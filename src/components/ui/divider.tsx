import React from 'react'
import { cn } from '@/utils/lib/tailwind-merge'

interface DividerProps {
    variant?: 'vertical' | 'horizontal' | 'personalized'
    color?: 'default' | 'secondary' | 'highlight'
    className?: string
}
const Divider: React.FC<DividerProps> = ({ variant, color = 'default', className }) => {

    let colorClass: string = 'bg-secondary'
    if (color === 'secondary') {
        colorClass = 'bg-border'
    } else if (color === 'highlight') {
        colorClass = 'bg-sidebar-button-active'
    }

    if (variant === 'personalized') {
        return (
            <div className={cn(colorClass, className)} />
        )
    } else if (variant === 'horizontal') {
        return (
            <div className={cn(`${colorClass} w-[120px] h-[1px]`, className)} />
        )
    } else if (variant === 'vertical') {
        return (
            <div className={cn(`${colorClass} w-[1px] h-[30px]`, className)} />
        )
    } else {
        throw new Error('Invalid variant')
    }
}

export { Divider }