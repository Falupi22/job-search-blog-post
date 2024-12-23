import React from 'react'
import { IconButton } from '@mui/material'
import { Sun, Moon } from 'lucide-react'
import { useThemeContext } from '../../context/ThemeContext'

export const ThemeControls: React.FC = () => {
    const { toggleMode, mode } = useThemeContext()

    return (
        <>
            <IconButton color='inherit' onClick={toggleMode}>
                {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </IconButton>
        </>
    )
}

export default ThemeControls
