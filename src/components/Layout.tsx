import React from 'react'
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import { useThemeContext } from '../context/ThemeContext'

const Layout: React.FC = () => {
    const { theme } = useThemeContext()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <Navigation />
                <Container component='main' sx={{ flexGrow: 1, py: 4 }}>
                    <Outlet />
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default Layout
