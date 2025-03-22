import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext<string>('light')

interface ThemeProviderProps {
    children: React.ReactNode
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => {
    return useContext(ThemeContext)
}

export { ThemeProvider, ThemeContext, useTheme }