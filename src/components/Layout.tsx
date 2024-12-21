import React from 'react'
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import { useThemeContext } from '../context/ThemeContext'
import ContactLinks from './navigation/ContactLinks'

const Layout: React.FC = () => {
    const { theme } = useThemeContext()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    justifyContent: 'center',
                }}
            >
                <Navigation />
                <Container component='main' sx={{ flexGrow: 0, py: 4 }}>
                    <Outlet />
                </Container>
                <ContactLinks />
            </Box>
        </ThemeProvider>
    )
}

export default Layout
