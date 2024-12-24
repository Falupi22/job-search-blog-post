import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import { useThemeContext } from '../context/ThemeContext'
import ContactLinks from './navigation/ContactLinks'

const Layout = () => {
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
                    minHeight: '100vh',
                    '@media (max-width: 600px)': {
                        justifyContent: 'flex-start',
                    },
                    '@media (min-width: 600px) and (max-width: 960px)': {
                        justifyContent: 'center',
                    },
                    '@media (min-width: 960px)': {
                        justifyContent: 'center',
                    },
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
