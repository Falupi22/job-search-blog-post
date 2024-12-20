import React from 'react'
import { Box, Typography, Paper, Grid, Avatar } from '@mui/material'

const About: React.FC = () => {
    return (
        <Box>
            <Typography variant='h4' gutterBottom>
                About Me
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, textAlign: 'center' }}>
                        <Avatar
                            src='/images/image.png'
                            sx={{ width: 200, height: 200, mx: 'auto', mb: 2 }}
                        />
                        <Typography variant='h6' gutterBottom>
                            Tal Frumkin
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Aspiring Software Developer
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant='h6' gutterBottom>
                            My Story
                        </Typography>
                        <Typography variant='body1' paragraph>
                            Hello everyone! I am Tal, a 23-year-old software
                            engineer from Israel with a deep passion for
                            technology and software development.
                            <br />
                            <br />
                            After completing my military service as a full stack
                            engineer, a temporary contract at a startup, and
                            reserve duty, I decided to take a career break and
                            travel through South America. During my travels, I
                            decided to start job hunting. I purchased a laptop,
                            worked on small projects, and began sending out
                            resumes.
                            <br />
                            <br />
                            To make the most of this journey, I decided to track
                            and document my job search process. This helped me
                            monitor my progress, identify areas for improvement,
                            and gather valuable insights. Additionally, I wanted
                            to share my experience to help others navigate their
                            own job search journeys. I realized that this
                            process can be long and challenging, so I aimed to
                            provide useful knowledge and guidance to fellow
                            candidates.
                        </Typography>

                        <Typography variant='h6' gutterBottom sx={{ mt: 4 }}>
                            Skills
                        </Typography>
                        <Typography variant='body1' paragraph>
                            • Frontend: React, TypeScript, HTML5, CSS3, WPF,
                            Chakra UI
                            <br />
                            • Backend: C# .NET Core, Python, Node.js, REST APIs
                            <br />
                            • Databases: MongoDB, MSSQL, Redis
                            <br />
                            • Tools: Git, Consul, Openshift, Wireshark, Visio
                            <br />• Soft Skills: Problem Solving, Team
                            Collaboration, Autodidact
                        </Typography>

                        <Typography variant='h6' gutterBottom sx={{ mt: 4 }}>
                            Goals
                        </Typography>
                        <Typography variant='body1'>
                            My goal is to join a company where I can contribute
                            to meaningful projects while continuing to learn and
                            grow as a developer. I'm particularly interested in
                            full stack or backend development and creating
                            efficient and reliable systems.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default About
