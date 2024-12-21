import React from 'react'
import { Box, Typography } from '@mui/material'
import StatsGrid from '../components/stats/StatsGrid'
import StatsChart from '../components/stats/StatsChart'
import data from '../../data/data.json'

export const Dashboard: React.FC = () => {
    return (
        <Box>
            <Typography variant='h4' gutterBottom>
                A Long, Challenging Journey
            </Typography>

            <Typography variant='body1' paragraph>
                My journey began three months ago while I was travelling across
                America. Since I decided to look for a job while on career
                break, I devoted myself to the challenging process, while
                tracking it and gathering information and statistics, to help me
                and more candidates with their process.
            </Typography>

            <StatsGrid stats={data.general} />
            <StatsChart stats={data.general} />
        </Box>
    )
}

export default Dashboard
