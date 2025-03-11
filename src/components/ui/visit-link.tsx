import Link from 'next/link'

interface VisitLinkProps {
    href: string
    children: React.ReactNode
}
const VisitLink: React.FC<VisitLinkProps> = ({ href, children }) => {
    return (
        <Link href={href} className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
            {children}
        </Link>
    )
}

export default VisitLink
