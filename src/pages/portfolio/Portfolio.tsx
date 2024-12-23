import { Box, Typography, Grid } from '@mui/material'
import ProjectCard from './ProjectCard'
import { Project } from '../../types'

interface PortfolioProps {
    projects: Project[]
}

const Portfolio = ({ projects }: PortfolioProps) => {
    return (
        <Box>
            <Typography variant='h4' gutterBottom>
                My Projects
            </Typography>
            <Typography variant='body1' paragraph>
                Here are some of the projects I've worked on during my journey
                as a developer.
            </Typography>
            <Grid container spacing={3}>
                {projects.map(project => (
                    <Grid item xs={12} md={6} key={project.id}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Portfolio
