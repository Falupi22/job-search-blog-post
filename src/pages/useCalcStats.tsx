import { useMemo } from 'react'
import { Interview, ProductType, Stage, Status } from '../types'

interface CalculatedStats {
    interviewsPerStage: Array<{ name: string; value: number }>
    companiesPerProductType: Array<{ name: string; value: number }>
    interviewsPerStatus: Array<{ name: string; value: number }>
    interviewsPerLocation: Array<{ name: string; value: number }>
    interviewsPerCompanyType: Array<{ name: string; value: number }>
}

const useCalcStats = (interviews: Array<Interview>): CalculatedStats => {
    const stats = useMemo(() => {
        const mismatchStage = interviews.filter(
            interview => interview.status === Status.Mismatch,
        ).length
        const teamStage = interviews.filter(
            interview => interview.stage === Stage.TeamMember,
        ).length
        const technicalStage = interviews.filter(
            interview => interview.stage === Stage.Technical,
        ).length
        const hrStage = interviews.filter(
            interview => interview.stage === Stage.HR,
        ).length
        const departmentStage = interviews.filter(
            interview => interview.stage === Stage.DepartmentLeader,
        ).length
        const assignmentStage = interviews.filter(
            interview => interview.stage === Stage.Assignment,
        ).length
        const testsStage = interviews.filter(
            interview => interview.stage === Stage.Tests,
        ).length

        const interviewsPerStage: Array<{ name: string; value: number }> = [
            { name: Stage.Recruiter, value: mismatchStage },
            { name: Stage.TeamMember, value: teamStage },
            { name: Stage.Technical, value: technicalStage },
            { name: Stage.HR, value: hrStage },
            { name: Stage.DepartmentLeader, value: departmentStage },
            { name: Stage.Assignment, value: assignmentStage },
            { name: Stage.Tests, value: testsStage },
        ]

        const companiesPerProductType: Array<{ name: string; value: number }> =
            Object.values(ProductType).map(productType => {
                const uniqueCompanies = new Set(
                    interviews
                        .filter(interview =>
                            interview.productType.includes(productType),
                        )
                        .map(interview => interview.companyId),
                )

                return {
                    name: productType,
                    value: uniqueCompanies.size,
                }
            })

        const interviewsPerLocation: Array<{ name: string; value: number }> =
            Array.from(
                new Set(interviews.map(interview => interview.location)),
            ).map(location => {
                const uniqueCompanies = new Set(
                    interviews
                        .filter(interview => interview.location === location)
                        .map(interview => interview.companyId),
                )

                return {
                    name: location,
                    value: uniqueCompanies.size,
                }
            })

        const interviewsPerCompanyType: Array<{ name: string; value: number }> =
            Array.from(
                new Set(interviews.map(interview => interview.companyType)),
            ).map(companyType => {
                const uniqueCompanies = new Set(
                    interviews
                        .filter(
                            interview => interview.companyType === companyType,
                        )
                        .map(interview => interview.companyId),
                )

                return {
                    name: companyType,
                    value: uniqueCompanies.size,
                }
            })

        const interviewsPerStatus: Array<{ name: string; value: number }> =
            Object.values(Status).map(status => ({
                name: status,
                value: interviews.filter(
                    interview => interview.status === status,
                ).length,
            }))

        return {
            interviewsPerStage,
            companiesPerProductType,
            interviewsPerStatus,
            interviewsPerLocation,
            interviewsPerCompanyType,
        }
    }, [interviews])

    return stats
}

export default useCalcStats
