'use client'

import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Clipboard } from 'lucide-react'

type Language = 'bash' | 'json' | 'typescript' | 'tsx' | 'css' | 'html'

interface CodeAreaProps {
    title?: string
    downloadLink?: string
    code: string
    copy?: boolean
    language?: Language
}
const CodeArea: React.FC<CodeAreaProps> = ({ title, downloadLink, code, copy = true, language = 'tsx' }) => {
    const handleCopy = () => {
        const formattedCode = code.replace(/\t/g, '    '); // Replace tabs with spaces
        navigator.clipboard.writeText(formattedCode)
    }

    return (
        <div className='flex flex-col space-y-0'>
            <p className='ml-1 font-thin italic'>{title}</p>
            <div className='relative w-full'>
                <div className='flex flex-col items-center'>
                    {downloadLink &&
                        <a href={downloadLink} download className='absolute p-1 left-3 top-[21px] hover:bg-zinc-800/70 rounded-md cursor-pointer'>
                            <Clipboard className='w-5 h-5 text-white' />
                        </a>}
                    {copy &&
                        <div className='absolute p-1 right-3 top-[21px] hover:bg-zinc-800/70 rounded-md cursor-pointer' onClick={handleCopy}>
                            <Clipboard className='w-5 h-5 text-white' />
                        </div>}
                </div>
                <SyntaxHighlighter
                    lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                    wrapLines={true}
                    showLineNumbers
                    language={language}
                    style={oneDark}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export { CodeArea }
