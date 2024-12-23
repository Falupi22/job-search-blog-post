import { Box, Typography, Paper, Grid, Avatar, useTheme } from '@mui/material'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface AboutProps 
{
    name: string
    caption: string
    body: string
}

const About = ({ name, caption, body }: AboutProps) => {
    const theme = useTheme();
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
                            {name}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {caption}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper>
                        <Box width='100%' sx={{ p: 5 }} 
                        className='prose lg:prose-xl'>
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    h1: ({...props}) => <h1 style={{color: theme.palette.text.primary }} {...props}/>,
                                    h2: ({...props}) => <h2 style={{color: theme.palette.text.primary }} {...props}/>,
                                    h3: ({...props}) => <h3 style={{color: theme.palette.text.primary }} {...props}/>,
                                    h4: ({...props}) => <h4 style={{color: theme.palette.text.primary }} {...props}/>,
                                    h5: ({...props}) => <h5 style={{color: theme.palette.text.primary }} {...props}/>,
                                    h6: ({...props}) => <h6 style={{color: theme.palette.text.primary}} {...props}/>,
                                    p: ({...props}) => <p style={{color: theme.palette.text.primary }} {...props}/>,
                                    strong: ({...props}) => <strong style={{color: theme.palette.text.primary }} {...props}/>,
                                    li: ({...props}) => <li style={{color: theme.palette.text.primary }} {...props}/>,
                                    b: ({...props}) => <b style={{color: theme.palette.text.primary }} {...props}/>,
                                }}>
                                {body}
                            </ReactMarkdown>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default About
