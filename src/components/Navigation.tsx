import React from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Box,
    useTheme,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { Sun, Moon, Languages } from 'lucide-react'
import { useThemeContext } from '../context/ThemeContext'
import NavigationLinks from './navigation/NavigationLinks'
import ThemeControls from './navigation/ThemeControls'

export const Navigation: React.FC = () => {
    const theme = useTheme()
    const { toggleMode, toggleDirection, mode, direction } = useThemeContext()

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    My Job Search Tracker
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <NavigationLinks />
                    <ThemeControls />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation
