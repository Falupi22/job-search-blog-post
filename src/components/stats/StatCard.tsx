import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

interface StatCardProps {
    label: string
    value: number
}

export const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
    return (
        <Card>
            <CardContent>
                <Typography color='textSecondary' gutterBottom>
                    {label.replace(/([A-Z])/g, ' $1').toUpperCase()}
                </Typography>
                <Typography variant='h5'>{value}</Typography>
            </CardContent>
        </Card>
    )
}

export default StatCard
