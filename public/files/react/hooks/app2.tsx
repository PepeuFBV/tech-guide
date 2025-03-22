import React from 'react'
import { useTheme } from '@/components/context/custom-context'

const MyComponent: React.FC = () => {
    const theme = useTheme()

    return <div>Current theme: {theme}</div>
}

export default MyComponent