import React from 'react';
import { Card, CardContent, Typography, LinearProgress } from '@mui/material';

interface StatCardProps {
  label: string;
  value: number;
  total: number;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, total }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {label.replace(/([A-Z])/g, ' $1').toUpperCase()}
        </Typography>
        <Typography variant="h5">{value}</Typography>
        <LinearProgress
          variant="determinate"
          value={(value / total) * 100}
          sx={{ mt: 2 }}
        />
      </CardContent>
    </Card>
  );
};

export default StatCard;