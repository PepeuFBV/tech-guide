import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Divider } from '@/components/ui/divider'
import LanguageSelector from '@/components/core/language-selector'
import { ArrowUpRight } from 'lucide-react'
import { Github } from '@/components/ui/icons/github'
import { cn } from '@/utils/lib/tailwind-merge'

interface HeaderProps {
    className?: string
}
const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={cn('z-10 top-0 h-20 w-full bg-background border-b border-b-black flex justify-end items-center px-6', className)}>
            <div className='flex items-center gap-2 justify-center'>
                <Link
                    href='https://seedabit.org.br'
                    passHref
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Button variant='link'>
                        <Image
                            src='/images/seed-a-bit-logo.svg'
                            alt='Seed a Bit logo'
                            loading='lazy'
                            quality={100}
                            width={20}
                            height={20}
                            style={{ width: '20px', height: '20px' }}
                        />
                        <div className='flex items-center gap-0.5'>
                            <p>Seed a Bit</p>
                            <ArrowUpRight size={15} />
                        </div>
                    </Button>
                </Link>
                <Divider variant='vertical' />
                <LanguageSelector className='ml-2 mr-2 cursor-not-allowed' />
                <Divider variant='vertical' />
                <Button variant='link' className='ml-2 p-2'>
                    <Github size={21} />
                </Button>
            </div>
        </header>
    )
}

export default Header
