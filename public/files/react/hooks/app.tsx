import React, { useContext } from 'react'
import { ThemeProvider, ThemeContext } from '@/components/context/use-context' // <- também pode estar no diretório /hooks

const App: React.FC = () => {
    const theme = useContext(ThemeContext)

    return (
        <ThemeProvider>
            <div className={theme === 'light' ? 'bg-white/50' : 'bg-black/50'}>
                <p>Olá mundo</p>
            </div>
        </ThemeProvider>
    )
}

export default App