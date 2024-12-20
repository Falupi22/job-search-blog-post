import React, { createContext, useContext, useState, useMemo } from 'react'
import { PaletteMode } from '@mui/material'
import { getTheme } from '../theme'

interface ThemeContextType {
    mode: PaletteMode
    direction: 'ltr' | 'rtl'
    toggleMode: () => void
    toggleDirection: () => void
    theme: ReturnType<typeof getTheme>
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [mode, setMode] = useState<PaletteMode>('light')
    const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr')

    const theme = useMemo(() => getTheme(mode, direction), [mode, direction])

    const toggleMode = () =>
        setMode(prev => (prev === 'light' ? 'dark' : 'light'))
    const toggleDirection = () =>
        setDirection(prev => (prev === 'ltr' ? 'rtl' : 'ltr'))

    return (
        <ThemeContext.Provider
            value={{ mode, direction, toggleMode, toggleDirection, theme }}
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
