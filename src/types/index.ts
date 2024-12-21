export enum ProductType {
    Enterprise = 'Enterprise',
    Cybersecurity = 'Cybersecurity',
    AI = 'AI',
    Virtualization = 'Virtualization',
    Environmental = 'Environmental',
    IT = 'IT',
    Cloud = 'Cloud',
    Communication = 'Communication',
    Aviation = 'Aviation',
    Encryption = 'Encryption',
    Ecommerce = 'Ecommerce',
    Backoffice = 'Backoffice',
}

export interface Interview {
    id: string
    companyType: string
    productType: Array<ProductType>
    position: string
    date: string
    stage: string
    method: string
    notes: string
    status: 'passed' | 'failed' | 'pending'
    summary: string
    duration: number
    interviewer: string
    location: string
    time: string
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
