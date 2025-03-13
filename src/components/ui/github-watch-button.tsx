'use client'

import React from 'react'
import GitHubButton from 'react-github-btn'

interface GithubWatchButtonProps {
    href: string
    size?: 'small' | 'large'
    showCount?: boolean
    ariaLabel?: string
}
const GithubWatchButton: React.FC<GithubWatchButtonProps> = ({ href, size = 'large', showCount = false, ariaLabel = 'Watch seedabit/react-next-guide on GitHub' }) => {
    return (
        <GitHubButton href={href} data-color-scheme='no-preference: light; light: light; dark: dark;' data-size={size} data-show-count={showCount} aria-label={ariaLabel}>Ver no Github</GitHubButton>
    )
}

export { GithubWatchButton }
