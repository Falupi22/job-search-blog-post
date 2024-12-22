import React from 'react'
import { Grid } from '@mui/material'
import StatCard from './StatCard'

interface StatsGridProps {
    stats: object
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
    console.log(Object.entries(stats))
    return (
        <Grid container spacing={3} sx={{ mb: 4 }}>
            {Object.entries(stats).map(([key, value]) => (
                <Grid item xs={12} sm={6} md={4} key={key}>
                    <StatCard label={key} value={value} total={200} />
                </Grid>
            ))}
        </Grid>
    )
}

export default StatsGrid
