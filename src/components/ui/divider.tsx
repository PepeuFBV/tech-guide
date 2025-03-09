import React from 'react'
import { cn } from '@/utils/lib/tailwind-merge'

interface DividerProps {
    variant?: 'vertical' | 'horizontal' | 'personalized'
    className?: string
}
const Divider: React.FC<DividerProps> = ({ variant, className }) => {
    if (variant === 'personalized') {
        return (
            <div className={cn('bg-secondary', className)} />
        )
    } else if (variant === 'horizontal') {
        return (
            <div className={cn('bg-secondary w-[120px] h-[1px]', className)} />
        )
    } else if (variant === 'vertical') {
        return (
            <div className={cn('bg-secondary w-[1px] h-[30px]', className)} />
        )
    } else {
        throw new Error('Invalid variant')
    }
}

export { Divider }