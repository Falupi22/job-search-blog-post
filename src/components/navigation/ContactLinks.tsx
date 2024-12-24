import { GitHub, LinkedIn, Facebook } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { ReactElement } from 'react'

interface ContactLinkProps {
    href: string
    child: ReactElement
}

const props = {
    target:'_blank' ,
    rel: 'noopener noreferrer',
    icon: {
        sx: {
            mx: 1,
            width: 40,
            height: 40,
        }
    }
}

const ContactLink = ({ href, child }: ContactLinkProps) => {
    return (
        <Link to={href} target={props.target} rel={props.rel}>
            {child}
        </Link>)
 }

const ContactLinks = () => {
    return (
        <Box>
            <Typography variant='body1' textAlign='center' gutterBottom>
                Stay in touch!
            </Typography>
            <Box
                sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 4 }}
            >
                <ContactLink href='https://github.com/falupi22' child={<GitHub {...(props.icon)} />}/>
                <ContactLink href='https://www.linkedin.com/in/tal-frumkin-402aa026a' child={<LinkedIn {...(props.icon)} />}/>
                <ContactLink href='https://www.facebook.com/tfrumkin/' child={<Facebook {...(props.icon)} />}/>
            </Box>
        </Box>
    )
}

export default ContactLinks
