import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import NavigationLinks from './navigation/NavigationLinks'
import ThemeControls from './navigation/ThemeControls'

export const Navigation: React.FC = () => {
    return (
        <AppBar position='static' sx={{ mt: 0, mb: 'auto' }}>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Job Search Blog
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
