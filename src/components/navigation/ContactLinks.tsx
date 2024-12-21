import { GitHub, LinkedIn, Facebook } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const ContactLinks: React.FC = () => {
    return (
        <Box>
            <Typography variant='body1' textAlign='center' gutterBottom>
                Stay in touch!
            </Typography>
            <Box
                sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 4 }}
            >
                <a
                    href='https://github.com/falupi22'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <GitHub sx={{ mx: 1, fontSize: 40 }} />
                </a>
                <a
                    href='https://www.linkedin.com/in/tal-frumkin-402aa026a'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <LinkedIn sx={{ mx: 1, fontSize: 40 }} />
                </a>
                <a
                    href='https://www.facebook.com/tfrumkin/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Facebook sx={{ mx: 1, fontSize: 40 }} />
                </a>
            </Box>
        </Box>
    )
}

export default ContactLinks
