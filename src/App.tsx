import React, { useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import InterviewList from './pages/interviews/InterviewList'
import Portfolio from './pages/portfolio/Portfolio'
import Blog from './pages/blog/Blog'
import About from './pages/about/About'
import data from '../data/data.json'
import { ProductType } from './types'

function App() {
    const interviews = useMemo(
        () =>
            data.interviews.map(interview => ({
                ...interview,
                productType: interview.productType.map(pt => pt as ProductType),
                status: interview.status as 'passed' | 'failed' | 'pending',
            })),
        [],
    )
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route
                            path='interviews'
                            element={<InterviewList interviews={interviews} />}
                        />
                        <Route path='portfolio' element={<Portfolio />} />
                        <Route path='blog' element={<Blog />} />
                        <Route path='about' element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
