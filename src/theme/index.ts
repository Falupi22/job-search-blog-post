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

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        selectable: true
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
    })

    const extendedTheme = createTheme(theme, {
        components: {
            MuiCard: {
                defaultProps: {
                    variant: 'elevation', // Set default variant type
                },
                styleOverrides: {
                    root: {
                        // Default styles for all Cards
                        borderRadius: '12px',
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

    return extendedTheme
}
