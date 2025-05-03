import Image from 'next/image'
import { cn } from '@/utils/lib/tailwind-merge'

interface SeedaBitProps {
    className?: string
    size?: number
}
const SeedaBit: React.FC<SeedaBitProps> = ({ className, size = 24 }) => {
    return (
        <Image
            src='/images/seed-a-bit-logo.svg'
            alt='Seed a Bit logo'
            loading='lazy'
            quality={100}
            width={20}
            height={20}
            style={{ width: `${size}px`, height: `${size}px` }}
            className={cn('', className)}
        />
    )
}

export { SeedaBit }
