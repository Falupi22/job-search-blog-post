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
                    flexGrow: 1,
                    justifyContent: 'center',
                }}
            >
                <Navigation />
                <Container component='main' sx={{ py: 4 }}>
                    <Outlet />
                </Container>
                <ContactLinks />
            </Box>
        </ThemeProvider>
    )
}

export default Layout
