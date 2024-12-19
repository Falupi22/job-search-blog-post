import React from 'react';
import { Box, Typography } from '@mui/material';
import StatsGrid from '../components/stats/StatsGrid';
import StatsChart from '../components/stats/StatsChart';
import { JobSearchStats } from '../types';

const mockStats: JobSearchStats = {
  totalApplications: 150,
  rejections: 80,
  interviews: 20,
  offers: 2,
  averageResponseTime: 14,
};

export const Dashboard: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Job Search Journey
      </Typography>
      
      <Typography variant="body1" paragraph>
        My journey began three months ago when I decided to transition into tech. 
        Through persistence and continuous learning, I've been working towards my goal 
        of becoming a software developer.
      </Typography>

      <StatsGrid stats={mockStats} />
      <StatsChart stats={mockStats} />
    </Box>
  );
};

export default Dashboard;