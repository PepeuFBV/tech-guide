'use client'

import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Clipboard, Download } from 'lucide-react'

type Language = 'bash' | 'json' | 'typescript' | 'tsx' | 'css' | 'html' | 'javascript'

interface CodeAreaProps {
    title?: string
    downloadLink?: string
    code: string
    copy?: boolean
    language?: Language
    showLineNumbers?: boolean
}
const CodeArea: React.FC<CodeAreaProps> = ({ title, downloadLink, code, copy = true, language = 'tsx', showLineNumbers = true }) => {
    if ((title && !downloadLink) || (!title && downloadLink)) {
        throw new Error('Both title and downloadLink must be provided together.')
    }

    const handleCopy = () => {
        const formattedCode = code.replace(/\t/g, '    ')
        navigator.clipboard.writeText(formattedCode)
    }

    return (
        <div className='flex flex-col space-y-0'>
            {downloadLink && (
                <a href={downloadLink} download className='w-fit'>
                    <div className='ml-1 flex items-center gap-2'>
                        <p className='font-thin italic'>{title}</p>
                        <Download className='w-5 h-5' />
                    </div>
                </a>)
                ||
                <p className='ml-1 font-thin italic'>{title}</p>
            }
            <div className='relative w-full'>
                {copy &&
                    <div className='absolute p-1 right-3 top-[21px] hover:bg-zinc-800/70 rounded-md cursor-pointer' onClick={handleCopy}>
                        <Clipboard className='w-5 h-5 text-white' />
                    </div>}
                <SyntaxHighlighter
                    lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                    wrapLines={true}
                    showLineNumbers={showLineNumbers}
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
