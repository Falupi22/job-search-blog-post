import { Box, Typography } from '@mui/material'
import { BlogPost as BlogPostType } from '../../types'
import BlogPost from './BlogPost'

interface BlogProps {
    blogPosts: Array<BlogPostType>
}

const Blog = ({ blogPosts }: BlogProps) => {
    return (
        <Box display='flex' flexDirection='column'>
            <Typography variant='h4' gutterBottom>
                Blog
            </Typography>
            <Typography variant='body1' paragraph>
                Sharing my experiences and insights from my journey.
            </Typography>
            <Typography variant='body2' paragraph>
                FYI: The dates represent the time the post discusses, not the
                publish time.
            </Typography>
            {blogPosts.map(post => (
                <BlogPost key={post.id} post={post} />
            ))}
        </Box>
    )
}

export default Blog
