import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box, Link, CardActions, Button } from '@mui/material';
import { Github, Globe } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={project.imageUrl}
        alt={project.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          {project.technologies.map((tech) => (
            <Chip key={tech} label={tech} size="small" />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button 
          startIcon={<Github size={18} />}
          href={project.githubUrl}
          target="_blank"
          size="small"
        >
          Code
        </Button>
        {project.liveUrl && (
          <Button
            startIcon={<Globe size={18} />}
            href={project.liveUrl}
            target="_blank"
            size="small"
          >
            Live Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;