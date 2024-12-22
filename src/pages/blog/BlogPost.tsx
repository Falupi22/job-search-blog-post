import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    Chip,
    Box,
    useTheme,
} from '@mui/material'
import { BlogPost as BlogPostType } from '../../types'
import dayjs from 'dayjs'
import { DATE_FORMAT } from '../../global/formats'
import { Link } from 'react-router-dom'

interface BlogPostProps {
    post: BlogPostType
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
    const theme = useTheme()

    return (
        <Card
            component={Link}
            to={`${new URL(window.location.href).origin}/blog/${post.id}`}
            sx={{
                mb: 3,
                cursor: 'pointer',
                ':hover': { backgroundColor: theme.palette.idle.main },
            }}
        >
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    {post.title}
                </Typography>
                <Typography
                    variant='caption'
                    color='text.secondary'
                    display='block'
                    gutterBottom
                >
                    {dayjs(post.date).format(DATE_FORMAT)}
                </Typography>
                <Typography variant='body1' paragraph>
                    {post.content}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {post.tags.map(tag => (
                        <Chip key={tag} label={tag} size='small' />
                    ))}
                </Box>
            </CardContent>
        </Card>
    )
}

export default BlogPost
