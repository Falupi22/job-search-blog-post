import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import InterviewList from './pages/interviews/InterviewList'
import Portfolio from './pages/portfolio/Portfolio'
import Blog from './pages/blog/Blog'
import About from './pages/about/About'

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path='interviews' element={<InterviewList />} />
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
