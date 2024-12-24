import { Box, Fade, Typography } from '@mui/material'
import StatsGrid from '../components/stats/StatsGrid'
import StatsChart from '../components/stats/StatsChart'
import { StatsPieChart } from '../components/stats/StatsPieChart'
import useCalcStats from './useCalcStats'
import { Interview } from '../types'
import { useInView } from 'react-intersection-observer';

interface DashboardProps {
    general: {
        totalApplications: number
        rejections: number
        offers: number
        averageResponseTimeInDays: number
    }
    interviews: Array<Interview>
}

export const Dashboard = ({ interviews, general }: DashboardProps) => {
    const {
        interviewsPerStage,
        interviewsPerStatus,
        companiesPerProductType,
        interviewsPerLocation,
        interviewsPerCompanyType,
        totalCompaniesInterested,
        totalInterviews,
    } = useCalcStats(interviews)

    const { ref: generalStatsRef, inView: generalStatsInView } = useInView({ triggerOnce: true });
    const { ref: interviewLabelRef, inView: interviewLabelInView } = useInView({ triggerOnce: true });
    const { ref: companiesLabelRef, inView: companiesLabelInView } = useInView({ triggerOnce: true });

    return (
        <Box>
            <Typography variant='h4' gutterBottom mb={4}>
                A Long, Challenging Journey
            </Typography>

            <Typography variant='body1' paragraph>
                My journey began three months ago while I was travelling across
                America. Since I decided to look for a job while on career
                break, I devoted myself to the challenging process, while
                tracking it and gathering information and statistics, to help me
                and more candidates with their process.
            </Typography>

            <Typography variant='h5' mb={4} mt={3} height='20vh' alignContent='center' textAlign='center' fontWeight='bold'>
                As for now, I haven't found a job yet, but I keep gathering some
                interesting stats!
            </Typography>

            <Box ref={generalStatsRef} style={{ transformOrigin: '0 0 0' }}>
                <Fade in={generalStatsInView} timeout={1000}>
                    <Box>
                        <StatsGrid 
                            stats={{
                                totalApplications: general?.totalApplications ?? 0,
                                rejections: general?.rejections ?? 0,
                                totalCompaniesInterested,
                                totalInterviews,
                                offers: general?.offers ?? 0,
                                averageResponseTimeInDays:
                                    general?.averageResponseTimeInDays ?? 0,
                            }}
                        />
                    </Box>
                </Fade>
            </Box>

            <Box ref={interviewLabelRef}>
            <Fade in={interviewLabelInView} timeout={1000}>
                <Box>
                    <Typography variant='h5' mt={10} alignContent='center' textAlign='center'>
                        Interviews are the main challenge of the search
                    </Typography>
                    <Typography variant='h6' mt={2} height='5vh' alignContent='center' textAlign='center' >
                        Every company has its own process, but most of them share similar stages.
                    </Typography>

            <Box width='100%' display='flex' flexWrap='wrap' justifyContent='center' mt={10}>
                <StatsPieChart
                    stats={interviewsPerStage}
                    title='Interviews Per Stage'
                />
                <StatsPieChart
                    stats={interviewsPerStatus}
                    title='Interviews Per Status'
                />
                </Box>
                </Box>
                </Fade>
            </Box>
           
            <Box ref={companiesLabelRef}>
            <Fade in={companiesLabelInView} timeout={1000}>
                <Box>
            <Typography variant='h5' mt={10} alignContent='center' textAlign='center'>
                There are many companies interested in hiring, from different fields
            </Typography>
            <Typography variant='h6' mt={2} height='5vh' alignContent='center' textAlign='center' >
                However, there are some clear trends in the market.
            </Typography>

            <Box width='100%' display='flex' justifyContent='center' mt={10}>
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
            </Fade>
            </Box>
        </Box>
    )
}

export default Dashboard
