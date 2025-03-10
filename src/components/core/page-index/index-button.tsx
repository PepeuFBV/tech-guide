'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-scroll'
import { cn } from '@/utils/lib/tailwind-merge'

interface IndexButtonProps {
    href: string
    children: React.ReactNode
    className?: string
}
const IndexButton: React.FC<IndexButtonProps> = ({ href, children, className }) => {
    return (
        <Link
            to={href}
            className=''
            smooth={true}
            duration={500}
            offset={-120}
            href={href}
        >
            <Button
                variant='index'
                size='index'
                className={cn('', className)}
            >
                {children}
            </Button>
        </Link>
    )
}

export { IndexButton }
