import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { Interview } from '../../types';

const mockInterviews: Interview[] = [
  {
    id: '1',
    company: 'Tech Corp',
    position: 'Frontend Developer',
    date: '2024-02-15',
    stage: 'Technical',
    notes: 'Discussed React, TypeScript, and system design',
    status: 'passed'
  },
  {
    id: '2',
    company: 'StartupX',
    position: 'Full Stack Developer',
    date: '2024-02-10',
    stage: 'Final',
    notes: 'Team culture fit interview',
    status: 'pending'
  }
];

const getStatusColor = (status: Interview['status']) => {
  const colors = {
    passed: 'success',
    failed: 'error',
    pending: 'warning'
  };
  return colors[status];
};

const InterviewList: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Interview History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockInterviews.map((interview) => (
              <TableRow key={interview.id}>
                <TableCell>{new Date(interview.date).toLocaleDateString()}</TableCell>
                <TableCell>{interview.company}</TableCell>
                <TableCell>{interview.position}</TableCell>
                <TableCell>{interview.stage}</TableCell>
                <TableCell>
                  <Chip 
                    label={interview.status}
                    color={getStatusColor(interview.status) as any}
                    size="small"
                  />
                </TableCell>
                <TableCell>{interview.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InterviewList;