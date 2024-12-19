import React from 'react';
import { Box, Typography } from '@mui/material';
import BlogPost from './BlogPost';
import { BlogPost as BlogPostType } from '../../types';

const mockPosts: BlogPostType[] = [
  {
    id: '1',
    title: 'My Journey into Tech',
    content: 'Three months ago, I decided to make a career transition into tech. Here\'s what I\'ve learned so far...',
    date: '2024-02-20',
    tags: ['Career Change', 'Learning', 'Tech Journey']
  },
  {
    id: '2',
    title: 'Mastering Technical Interviews',
    content: 'After going through multiple technical interviews, here are my top tips for success...',
    date: '2024-02-15',
    tags: ['Interviews', 'Tips', 'Career']
  }
];

const Blog: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Blog
      </Typography>
      <Typography variant="body1" paragraph>
        Sharing my experiences and insights from my journey into tech.
      </Typography>
      {mockPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default Blog;