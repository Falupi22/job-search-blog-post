import React from 'react'
import { Box, Typography } from '@mui/material'
import StatsGrid from '../components/stats/StatsGrid'
import StatsChart from '../components/stats/StatsChart'
import data from '../../data/data.json'
import { StatsPieChart } from '../components/stats/StatsPieChart'
import useCalcStats from './useCalcStats'
import { Interview } from '../types'

interface DashboardProps {
    interviews: Array<Interview>
}

export const Dashboard = ({ interviews }: DashboardProps) => {
    const {
        interviewsPerStage,
        interviewsPerStatus,
        companiesPerProductType,
        interviewsPerLocation,
        interviewsPerCompanyType,
    } = useCalcStats(interviews)

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
            <Typography variant='h5' mt={4}>
                Interviews Statistics
            </Typography>

            <Box width='100%' display='flex' justifyContent='center' mt={2}>
                <StatsPieChart
                    stats={interviewsPerStage}
                    title='Interviews Per Stage'
                />
                <StatsPieChart
                    stats={interviewsPerStatus}
                    title='Interviews Per Status'
                />
            </Box>

            <Typography variant='h5' mt={4}>
                Companies Statistics
            </Typography>

            <Box width='100%' display='flex' justifyContent='center' mt={4}>
                <StatsChart
                    stats={companiesPerProductType}
                    title='Companies By Product (Some companies match more than one field)'
                />
            </Box>
            <Box width='100%' display='flex' justifyContent='center' mt={4}>
                <StatsChart
                    stats={interviewsPerLocation}
                    title='Companies By Location'
                />
            </Box>
            <Box width='100%' display='flex' justifyContent='center' mt={4}>
                <StatsChart
                    stats={interviewsPerCompanyType}
                    title='Companies By Type'
                />
            </Box>
        </Box>
    )
}

export default Dashboard
