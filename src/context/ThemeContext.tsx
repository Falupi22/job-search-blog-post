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

const storedMode = localStorage.getItem('themeMode') as PaletteMode | null
const storedDirection = localStorage.getItem('themeDirection') as
    | 'ltr'
    | 'rtl'
    | null

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [mode, setMode] = useState<PaletteMode>(storedMode || 'light')
    const [direction, setDirection] = useState<'ltr' | 'rtl'>(
        storedDirection || 'ltr',
    )

    const theme = useMemo(() => getTheme(mode, direction), [mode, direction])

    const toggleMode = () => {
        setMode(prev => {
            const newMode = prev === 'light' ? 'dark' : 'light'
            localStorage.setItem('themeMode', newMode)
            return newMode
        })
    }

    const toggleDirection = () => {
        setDirection(prev => {
            const newDirection = prev === 'ltr' ? 'rtl' : 'ltr'
            localStorage.setItem('themeDirection', newDirection)
            return newDirection
        })
    }

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
