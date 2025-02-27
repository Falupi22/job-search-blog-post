import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import InterviewList from './pages/interviews/InterviewList'
import Portfolio from './pages/portfolio/Portfolio'
import Blog from './pages/blog/Blog'
import About from './pages/about/About'
import { ProductType, Stage, Status } from './types'
import BlogPageProvider from './pages/blog/BlogPageProvider'
import useFirebase from './firebase/useFirebase'
import localData from '../data/data.json'
import { Analytics } from "@vercel/analytics/react"
import { Typography } from "@mui/material"

function App() {
    const { data, error } = useFirebase()

    const rawData = error ? localData : data;

    const memoData = {
        interviews: rawData?.interviews?.map(interview => ({
            ...interview,
            productType: interview.productType.map(pt => pt as ProductType),
            status: interview.status as Status,
            stage: interview.stage as Stage,
            companyId: Number.parseInt(interview.companyId),
        })),
        blogPosts: rawData?.blogsPosts?.slice().reverse(),
        projects: rawData?.projects,
        general: rawData?.general,
        about: rawData?.about,
    }

    const { interviews, blogPosts, projects, general, about } = memoData

    if (process.env.VITE_MAINTENANCE) {
        return <Typography variant='h1'>Under Maintenance</Typography>
    }
    
    return (data &&
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route
                            index
                            element={
                                <Dashboard
                                    interviews={interviews}
                                    general={general}
                                />
                            }
                        />
                        <Route
                            path='interviews'
                            element={<InterviewList interviews={interviews} />}
                        />
                        <Route
                            path='portfolio'
                            element={<Portfolio projects={projects} />}
                        />
                        <Route
                            path='blog'
                            element={<Blog blogPosts={blogPosts} />}
                        />
                        <Route
                            path='blog/:id'
                            element={
                                <BlogPageProvider blogs={blogPosts?.slice()} />
                            }
                        />
                        <Route
                            path='about'
                            element={
                                <About
                                    name={about?.name}
                                    caption={about?.caption}
                                    body={about?.body}
                                />
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Analytics />
        </ThemeProvider>
    )
}

export default App
