import React from 'react'
import { Card, CardContent, Typography, Chip, Box } from '@mui/material'
import { BlogPost as BlogPostType } from '../../types'

interface BlogPostProps {
    post: BlogPostType
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
    return (
        <Card sx={{ mb: 3 }}>
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
                    {new Date(post.date).toLocaleDateString()}
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
