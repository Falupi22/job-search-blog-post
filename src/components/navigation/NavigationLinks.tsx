import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { navigationLinks } from '../../config/navigation'

export const NavigationLinks = () => {
    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {navigationLinks.map(({ path, label }) => (
            <Button
                key={path}
                color='inherit'
                component={Link}
                to={path}
            >
                {label}
            </Button>
            ))}
        </Box>
    )
}

export default NavigationLinks
