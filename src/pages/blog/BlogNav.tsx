import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface BlogNavProps {
    postId: number
    lastPost: number
}

const BlogNav = ({ postId, lastPost }: BlogNavProps) => {
    return (
        <Box
            sx={{
                width: '12%',
                display: 'flex',
                justifyContent: 'space-around',
                mt: 4,
            }}
        >
            {postId > 1 && (
                <Typography
                    component={Link}
                    to={`${new URL(window.location.href).origin}/blog/${postId - 1}`}
                    variant='button'
                    color='primary'
                >
                    Previous
                </Typography>
            )}
            {postId < lastPost && (
                <Typography
                    component={Link}
                    to={`${new URL(window.location.href).origin}/blog/${postId + 1}`}
                    variant='button'
                    color='primary'
                >
                    Next
                </Typography>
            )}
        </Box>
    )
}

export default BlogNav
