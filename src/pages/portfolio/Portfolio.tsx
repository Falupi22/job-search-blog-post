import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ProjectCard from './ProjectCard';
import { Project } from '../../types';
import data from '../../../data/data.json'

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Job Search Tracker',
    description: 'A full-stack application to track job applications and interview progress, built with React and TypeScript.',
    technologies: ['React', 'TypeScript', 'Material-UI', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/username/job-tracker',
    liveUrl: 'https://job-tracker.demo.com'
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing my projects and skills.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio.demo.com'
  }
];

const Portfolio: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Typography variant="body1" paragraph>
        Here are some of the projects I've worked on during my journey as a developer.
      </Typography>
      <Grid container spacing={3}>
        {data.projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;