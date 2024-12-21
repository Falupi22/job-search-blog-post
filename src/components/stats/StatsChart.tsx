import React from 'react'
import { Box, Card, Typography, useTheme } from '@mui/material'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

interface StatsChartProps {
    stats: Array<{ name: string; value: number }>
    title: string
}

export const StatsChart: React.FC<StatsChartProps> = ({ stats, title }) => {
    const theme = useTheme()
    console.table(stats)
    return (
        <Card sx={{ width: '100%', height: '100%' }}>
            <Box
                width='100%'
                height='400px'
                display='flex'
                flexDirection='column'
                alignItems='center'
            >
                <Typography
                    variant='h6'
                    sx={{ textAlign: 'center', marginTop: theme.spacing(2) }}
                >
                    {title}
                </Typography>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart data={stats} barCategoryGap='10%'>
                        <CartesianGrid strokeDasharray='2 2' />
                        <XAxis dataKey='name' tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 15 }} />
                        <Tooltip />
                        <Bar
                            dataKey='value'
                            fill={theme.palette.primary.main}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </Card>
    )
}

export default StatsChart
