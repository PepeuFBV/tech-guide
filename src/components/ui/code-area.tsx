'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Clipboard, Download } from 'lucide-react'

type Language = 'bash' | 'json' | 'typescript' | 'tsx' | 'css' | 'html' | 'javascript' | 'plaintext'

const extensionToLanguageMap: { [key: string]: Language } = {
    'plaintext': 'plaintext',
    'sh': 'bash',
    'json': 'json',
    'ts': 'typescript',
    'tsx': 'tsx',
    'css': 'css',
    'html': 'html',
    'js': 'javascript',
    'mjs': 'javascript'
}

interface CodeAreaProps {
    link?: string
    code?: string
    copy?: boolean
    language?: Language
    showLineNumbers?: boolean
}
const CodeArea: React.FC<CodeAreaProps> = ({ link, code, copy = true, language, showLineNumbers = true }) => {
    const [fileContent, setFileContent] = useState<string | null>(null)
    const [fileName, setFileName] = useState<string | null>(null)
    const [fileExtension, setFileExtension] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [downloadLink, setDownloadLink] = useState<string | null>(null)

    if ((link && code) || (!link && !code)) {
        throw new Error('Either link or code must be provided')
    }

    if (code && !language) {
        throw new Error('Language must be provided when raw code is provided')
    }

    if (language === 'bash') {
        showLineNumbers = false
    }

    function checkIfExtensionIsValid(extension: string | null): boolean {
        if (!extension || extension === null) return false
        return extension in extensionToLanguageMap
    }

    function makeDownloadLink(content: string) {
        const blob = new Blob([content], { type: 'text/plain' })
        return URL.createObjectURL(blob)
    }

    const fetchFileContent = useCallback(async (link: string) => {
        try {
            const response = await fetch(`/api?link=${link}`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json()
            setFileContent(data.content)
            const name = link.split('/').pop()
            if (!name) throw new Error('Invalid link')
            setFileName(name)
            const extension = name.split('.').pop()
            if (extension && !checkIfExtensionIsValid(extension)) {
                throw new Error('Invalid extension')
            } else if (extension) {
                setFileExtension(extension)
            } else {
                setFileExtension(null)
            }
            setDownloadLink(makeDownloadLink(data.content))
        } catch (error) {
            if (error instanceof Error) {
                setError(`Failed to fetch file content: ${error.message}`)
            } else {
                setError('Failed to fetch file content')
            }
        }
    }, [])

    useEffect(() => {
        if (link) fetchFileContent(link)
    }, [link, fetchFileContent])

    const handleCopy = () => {
        const formattedCode = (code || fileContent)?.replace(/\t/g, '    ')
        navigator.clipboard.writeText(formattedCode || '')
    }

    return (
        <div className='flex flex-col space-y-0'>
            {downloadLink && (
                <a href={downloadLink} download={fileName} className='w-fit'>
                    <div className='ml-1 flex items-center gap-2'>
                        <p className='font-thin italic'>{fileName}</p>
                        <Download className='w-5 h-5' />
                    </div>
                </a>
            ) || <p className='ml-1 font-thin italic'>{fileName}</p>}
            <div className='relative w-full'>
                {copy &&
                    <div className='absolute p-1 right-3 top-[21px] hover:bg-zinc-800/70 rounded-md cursor-pointer' onClick={handleCopy}>
                        <Clipboard className='w-5 h-5 text-white' />
                    </div>}
                {error ? (
                    <p className='text-red-500'>{error}</p>
                ) : (
                    <SyntaxHighlighter
                        lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                        wrapLines={true}
                        showLineNumbers={showLineNumbers}
                        language={extensionToLanguageMap[fileExtension || ''] || language}
                        style={oneDark}
                    >
                        {code || fileContent || ''}
                    </SyntaxHighlighter>
                )}
            </div>
        </div>
    )
}

export { CodeArea }
