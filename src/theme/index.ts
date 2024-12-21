import { createTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'

declare module '@mui/material/styles' {
    interface Palette {
        idle: {
            main: string
        }
    }
    interface PaletteOptions {
        idle: {
            main: string
        }
    }
}

export const getTheme = (mode: PaletteMode, direction: 'ltr' | 'rtl') => {
    const { palette } = createTheme()
    const theme = createTheme({
        direction,
        palette: {
            mode,
            idle: palette.augmentColor({
                color: {
                    main: mode === 'light' ? '#B5B2A6' : '#6D6A60',
                },
            }),
            primary: {
                main: '#2196f3',
            },
            secondary: {
                main: '#f50057',
            },
        },
        typography: {
            fontFamily: 'system-ui, -apple-system, sans-serif',
        },
        components: {
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                    },
                },
            },
            MuiDialog: {
                styleOverrides: {
                    paper: {
                        padding: '5px',
                        borderRadius: '12px',
                        maxWidth: '600px',
                        width: '100%',
                    },
                },
            },
            MuiDialogTitle: {
                styleOverrides: {
                    root: {
                        paddingBottom: '5px',
                    },
                },
            },
            MuiDialogContent: {
                styleOverrides: {
                    root: {
                        paddingBottom: '5px',
                    },
                },
            },
            MuiDialogActions: {
                styleOverrides: {
                    root: {
                        paddingTop: '5px',
                    },
                },
            },
        },
    })

    return theme
}
