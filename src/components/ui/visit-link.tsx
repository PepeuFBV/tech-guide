import Link from 'next/link'
import React from 'react'
import { cn } from '@/utils/lib/tailwind-merge'

interface VisitLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: React.ReactNode
    className?: string
}
const VisitLink: React.FC<VisitLinkProps> = ({ href, children, className, ...props }) => {
    return (
        <Link href={href} {...props} className={cn('underline text-blue-600 hover:text-blue-800 visited:text-purple-600', className)}>
            {children}
        </Link>
    )
}

export default VisitLink