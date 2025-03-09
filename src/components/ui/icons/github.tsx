import React from 'react'
import Image from 'next/image'

interface GithubProps {
    className?: string
    size?: number
}
const Github: React.FC<GithubProps> = ({ className, size = 20 }) => {
    return (
        <Image src='/images/github-mark-white.svg' alt='Github' loading='lazy' quality={100} width={size} height={size} style={{ width: `${size}px`, height: `${size}px` }} />
    )
}

export { Github }
