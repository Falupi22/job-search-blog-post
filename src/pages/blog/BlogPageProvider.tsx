import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BlogPost } from '../../types'
import { Box } from '@mui/material'
import BlogPage from './BlogPage'

interface BlogPageProviderProps {
    blogs: Array<BlogPost>
}

const BlogPageProvider: React.FC<BlogPageProviderProps> = ({
    blogs,
}: BlogPageProviderProps) => {
    const { id } = useParams<{ id: string }>()
    const [blog, setBlog] = useState<BlogPost | null>(null)

    useEffect(() => {
        const blogData = blogs?.find((blog: BlogPost) => blog.id === id)
        if (blogData) {
            setBlog(blogData)
        }
    }, [blogs, id])

    if (!blog) {
        return (
            <Box
                height='100%'
                width='100%'
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                404 - This blog does not exist
            </Box>
        )
    }

    return (
        <Box
            height='100%'
            width='100%'
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
        >
            <BlogPage post={blog} lastPostId={parseInt(blogs[0]?.id ?? 0)} />
        </Box>
    )
}

export default BlogPageProvider
