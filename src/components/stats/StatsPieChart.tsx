import { Box, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts'

interface StatsPieChartProps {
    stats: Array<{ name: string; value: number }>
    title: string
}

const renderActiveShape = (props: any, textColor: string) => {
    const RADIAN = Math.PI / 180
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
    } = props
    const sin = Math.sin(-RADIAN * midAngle)
    const cos = Math.cos(-RADIAN * midAngle)
    const sx = cx + (outerRadius + 10) * cos
    const sy = cy + (outerRadius + 10) * sin
    const mx = cx + (outerRadius + 30) * cos
    const my = cy + (outerRadius + 30) * sin
    const ex = mx + (cos >= 0 ? 1 : -1) * 22
    const ey = my
    const textAnchor = cos >= 0 ? 'start' : 'end'

    return (
        <g>
            <text
                x={cx}
                y={cy}
                dy={8}
                textAnchor='middle'
                fill={fill}
                style={{ fontSize: 'calc(8px + 0.5vw)' }}
            >
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill='none'
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill={textColor}
            >{`${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill='#999'
            >
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    )
}

export const StatsPieChart = ({ stats, title }: StatsPieChartProps) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const onPieEnter = (_data: any, index: number, _e: React.MouseEvent) => {
        setActiveIndex(index)
    }

    const theme = useTheme()
    return (
        <Box
            width='100%'
            height='400px'
            display='flex'
            justifyContent='center'
            flexDirection='column'
        >
            <Typography
                variant='h6'
                sx={{ textAlign: 'center', marginTop: theme.spacing(2) }}
            >
                {title}
            </Typography>
            <ResponsiveContainer width='100%' height='100%'>
                <PieChart>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={props =>
                            renderActiveShape(props, theme.palette.idle.main)
                        }
                        data={stats}
                        cx='50%'
                        cy='50%'
                        innerRadius='40%'
                        outerRadius='70%'
                        fill={theme.palette.primary.main}
                        dataKey='value'
                        onMouseEnter={onPieEnter}
                    />
                </PieChart>
            </ResponsiveContainer>
        </Box>
    )
}
