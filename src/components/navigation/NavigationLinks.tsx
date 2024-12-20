import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { navigationLinks } from '../../config/navigation'

export const NavigationLinks: React.FC = () => {
    return (
        <>
            {navigationLinks.map(link => (
                <Button
                    key={link.path}
                    color='inherit'
                    component={Link}
                    to={link.path}
                >
                    {link.label}
                </Button>
            ))}
        </>
    )
}

export default NavigationLinks
