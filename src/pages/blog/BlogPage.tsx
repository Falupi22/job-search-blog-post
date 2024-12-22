import { Typography, Chip, Box, useTheme } from '@mui/material'
import { BlogPost } from '../../types'
import dayjs from 'dayjs'
import { DATE_FORMAT } from '../../global/formats'
import BlogNav from './BlogNav'

interface BlogPageProps {
    post: BlogPost
    lastPostId: number
}

const BlogPage = ({ post, lastPostId }: BlogPageProps) => {
    const theme = useTheme()

    return (
        <Box height='100%' width='100%'>
            <Box height='100%' width='100%'>
                <Typography variant='h4'>{post.title}</Typography>
                <Typography
                    variant='caption'
                    color='text.secondary'
                    display='block'
                >
                    {dayjs(post.date).format(DATE_FORMAT)}
                </Typography>
                <Box
                    mt={2}
                    borderRadius={5}
                    border={1}
                    borderColor={theme.palette.idle.main}
                    overflow='hidden'
                    width='50%'
                >
                    <img
                        src={post.imageSrc}
                        alt={post.imageAlt}
                        style={{
                            width: '100%',
                            height: '40%',
                            maxHeight: '400px',
                        }}
                    />
                </Box>
                <Typography
                    variant='caption'
                    color='text.secondary'
                    display='block'
                    gutterBottom
                >
                    {post.imageDesc}
                </Typography>
                <Typography variant='body1' paragraph>
                    {post.content}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {post.tags.map(tag => (
                        <Chip key={tag} label={tag} size='small' />
                    ))}
                </Box>
            </Box>
            <Box
                height='100%'
                width='100%'
                display='flex'
                justifyContent='center'
            >
                <BlogNav postId={parseInt(post.id)} lastPost={lastPostId} />
            </Box>
        </Box>
    )
}

export default BlogPage
