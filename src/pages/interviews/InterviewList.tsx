import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { Interview } from '../../types';
import data from '../../../data/data.json'

const getStatusColor = (status: Interview['status']) => {
  const colors = {
    passed: 'success',
    failed: 'error',
    mismatch: 'error',
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
              <TableCell>Company Type</TableCell>
              <TableCell>Product Type</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(data.interviews as Interview[]).reverse().map((interview) => (
              <TableRow key={interview.id}>
                <TableCell>{new Date(interview.date).toLocaleDateString()}</TableCell>
                <TableCell>{interview.companyType}</TableCell>
                <TableCell>{interview.productType}</TableCell>
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