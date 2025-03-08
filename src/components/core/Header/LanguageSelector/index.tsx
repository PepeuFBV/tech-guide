import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Languages, ChevronDown } from 'lucide-react'
import { cn } from '@/utils/lib/tailwind-merge'

interface LanguageSelectorProps {
    className?: string
}
const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant='ghost'
                        className={cn(className, 'h-8 flex items-center gap-0.5 opacity-50 py-1 px-2')}
                    >
                        <Languages size={20} />
                        <ChevronDown size={16} />
                    </Button>
                </TooltipTrigger>
                <TooltipContent className='border-none' side='bottom' align='end'>
                    <p className='text-xs'>Ainda não implementado</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default LanguageSelector
