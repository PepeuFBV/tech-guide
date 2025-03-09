import React from 'react'
import { cn } from '@/utils/lib/tailwind-merge'

interface DividerProps {
    className?: string
    width?: number
    height?: number
}
const Divider: React.FC<DividerProps> = ({ className, width = 5, height = 5 }) => {
    return (
        <div className={cn(`w-[${width}px] h-[${height}px] bg-secondary`, className)} />
    )
}

export default Divider
