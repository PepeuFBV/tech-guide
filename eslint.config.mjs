import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        rules: {
            'react/no-unescaped-entities': 0,
        },
        ignores: [
            'node_modules/',
            'dist/',
            'build/',
            '*.min.js',
            'public/**'
        ],
    },
]

export default eslintConfig
