import React from 'react';
import { Card } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { JobSearchStats } from '../../types';

interface StatsChartProps {
  stats: JobSearchStats;
}

export const StatsChart: React.FC<StatsChartProps> = ({ stats }) => {
  const chartData = [
    { name: 'Applications', value: stats.totalApplications },
    { name: 'Rejections', value: stats.rejections },
    { name: 'Interviews', value: stats.interviews },
    { name: 'Offers', value: stats.offers },
  ];

  return (
    <Card sx={{ height: 400, p: 2 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#2196f3" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default StatsChart;