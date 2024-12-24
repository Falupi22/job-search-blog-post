import React, { createContext, useContext, useState, useMemo, useCallback } from 'react'
import { PaletteMode } from '@mui/material'
import { getTheme } from '../theme'

interface ThemeContextType {
    mode: PaletteMode
    toggleMode: () => void
    theme: ReturnType<typeof getTheme>
}

const storedMode = localStorage.getItem('themeMode') as PaletteMode | null
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const getDefaultMode = (): PaletteMode => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
    }
    return 'light'
}

interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeProvider = ({
    children,
}: ThemeProviderProps) => {

    const [mode, setMode] = useState<PaletteMode>(storedMode || getDefaultMode())
    const theme = useMemo(() => getTheme(mode), [mode])

    const toggleMode = useCallback(() => {
        setMode(prev => {
            const newMode = prev === 'light' ? 'dark' : 'light'
            localStorage.setItem('themeMode', newMode)
            return newMode
        })
    }, [])

    return (
        <ThemeContext.Provider
            value={{ mode, toggleMode, theme }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if (!context)
        throw new Error('useThemeContext must be used within ThemeProvider')
    return context
}
