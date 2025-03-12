'use client'

import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Clipboard } from 'lucide-react'

const possibleLanguages = ['bash', 'json', 'typescript', 'tsx', 'css', 'html'] as const
type Language = typeof possibleLanguages[number]

interface CodeAreaProps {
    title?: string
    code: string
    language?: Language
}
const CodeArea: React.FC<CodeAreaProps> = ({ title, code, language = 'tsx' }) => {
    return (
        <div className='flex flex-col space-y-0'>
            <p className='ml-1 font-thin italic'>{title}</p>
            <div className='relative w-full'>
                <div className='absolute p-1 right-3 top-[21px] hover:bg-zinc-800/70 rounded-md cursor-pointer' onClick={() => navigator.clipboard.writeText(code)}>
                    <Clipboard className='w-5 h-5 text-white' />
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
