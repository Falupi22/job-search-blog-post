export enum ProductType {
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

export enum Status {
    Passed = 'passed',
    Failed = 'failed',
    Mismatch = 'mismatch',
    Pending = 'pending',
}

export enum Stage {
    Recruiter = 'Recruiter',
    TeamMember = 'Team Member',
    Technical = 'Technical',
    HR = 'HR',
    DepartmentLeader = 'Department Leader',
    Assignment = 'Assignment',
    Tests = 'Tests',
}

export interface Interview {
    id: string
    companyId: number
    companyType: string
    productType: Array<ProductType>
    position: string
    date: string
    stage: Stage
    method: string
    notes: string
    status: Status
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
    totalInterviews: number
    offers: number
    averageResponseTime: number
}
