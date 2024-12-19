import React from 'react';
import { Grid } from '@mui/material';
import StatCard from './StatCard';
import { JobSearchStats } from '../../types';

interface StatsGridProps {
  stats: JobSearchStats;
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {Object.entries(stats).map(([key, value]) => (
        <Grid item xs={12} sm={6} md={4} key={key}>
          <StatCard
            label={key}
            value={value}
            total={stats.totalApplications}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsGrid;