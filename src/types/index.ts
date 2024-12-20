export interface Interview {
    id: string
    companyType: string
    productType: string
    position: string
    date: string
    stage: string
    notes: string
    status: 'passed' | 'failed' | 'pending'
}

export interface Project {
    id: string
    title: string
    description: string
    technologies: string[]
    imageUrl: string
    githubUrl: string
    liveUrl?: string
}

export interface BlogPost {
    id: string
    title: string
    content: string
    date: string
    tags: string[]
}

export interface JobSearchStats {
    totalApplications: number
    rejections: number
    interviews: number
    offers: number
    averageResponseTime: number
}
