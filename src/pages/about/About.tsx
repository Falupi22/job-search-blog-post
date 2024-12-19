import React from 'react';
import { Box, Typography, Paper, Grid, Avatar } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Avatar
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
              sx={{ width: 200, height: 200, mx: 'auto', mb: 2 }}
            />
            <Typography variant="h6" gutterBottom>
              John Doe
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Aspiring Software Developer
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              My Story
            </Typography>
            <Typography variant="body1" paragraph>
              After working in marketing for several years, I discovered my passion for coding 
              and decided to make a career transition into software development. The journey 
              hasn't been easy, but every challenge has been an opportunity to learn and grow.
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Skills
            </Typography>
            <Typography variant="body1" paragraph>
              • Frontend: React, TypeScript, HTML5, CSS3, Material-UI<br />
              • Backend: Node.js, Express, REST APIs<br />
              • Tools: Git, VS Code, Figma<br />
              • Soft Skills: Problem Solving, Team Collaboration, Fast Learner
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Goals
            </Typography>
            <Typography variant="body1">
              My goal is to join a company where I can contribute to meaningful projects while 
              continuing to learn and grow as a developer. I'm particularly interested in 
              frontend development and creating intuitive user experiences.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;