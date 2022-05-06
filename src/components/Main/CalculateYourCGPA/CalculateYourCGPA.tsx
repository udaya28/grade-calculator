import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CGPACalculator from './CGPACalculator/CGPACalculator'
import SemestersForm from './SemestersForm/SemestersForm'

function calculateSGPA(subjects: Array<any>) {
    // console.log(subjects)
    let result = 0

    const totalCredit = subjects.reduce((acc, curr) => acc + curr.credit, 0)
    const totalGradePoints = subjects.reduce((acc, curr) => acc + (curr.grade ? curr.grade : 0) * curr.credit, 0)

    // console.log({ totalCredit, totalGradePoints })

    result = totalGradePoints / totalCredit
    return +result.toFixed(2)
}

const init = (semesterDetails: Array<any>, noOfSemesters: number, semesters: any) => {
    // console.log('init', semesterDetails, noOfSemesters)
    if (semesterDetails.length > noOfSemesters - 1) {
        const data = [...semesterDetails]
        data.length = noOfSemesters
        return data
    }

    const data = [...semesterDetails]
    for (let i = 0; i < noOfSemesters - semesterDetails.length; i += 1) {
        const semester = semesters[i + 1 + semesterDetails.length]
        // console.log('semester', semester)
        data.push({
            semesterNumber: i + 1 + semesterDetails.length,
            totalCredits: semester?.subject?.reduce((acc: number, curr: any) => acc + curr.credit, 0),
            SGPA: calculateSGPA(semester.subject),
        })
    }
    return data
}

interface Props {
    mainData: any
}

const extractSemesterDetails = (semesters: any = {}) => {
    const data: Array<any> = []
    // console.log(semesters)

    for (let sem = 1; sem <= Object.keys(semesters).length; sem += 1) {
        const semester = semesters[sem]
        data.push({
            semesterNumber: sem,
            totalCredits: semester?.subject?.reduce((acc: number, curr: any) => acc + curr.credit, 0),
            SGPA: calculateSGPA(semester.subject),
        })
    }

    return data
}

function CalculateYourCGPA({ mainData }: Props) {
    const [noOfSemesters, setNoOfSemesters] = useState<string | number>(1)
    const [semesterDetails, setSemesterDetails] = useState<Array<any>>([])

    useEffect(() => {
        setSemesterDetails(init(semesterDetails, +noOfSemesters, mainData.semesters))
    }, [noOfSemesters])

    const setTotalCredits = (semesterNumber: number, totalCredits: string) => {
        if (Number.isNaN(+totalCredits)) {
            return
        }
        if (+totalCredits < 0 || +totalCredits > 99) {
            return
        }
        const data = [...semesterDetails]
        data[semesterNumber - 1].totalCredits = totalCredits
        setSemesterDetails(data)
    }

    const setSGPA = (semesterNumber: number, SGPA: string) => {
        if (Number.isNaN(+SGPA)) {
            return
        }
        if (+SGPA < 0 || +SGPA > 10) {
            return
        }
        const data = [...semesterDetails]
        data[semesterNumber - 1].SGPA = SGPA
        setSemesterDetails(data)
    }

    useEffect(() => {
        // console.log(mainData)
        if (mainData.college === 'None' || mainData.regulation === '' || mainData.department === '') {
            return
        }
        setNoOfSemesters(Object.keys(mainData?.semesters).length || 1)
        // console.log('data', extractSemesterDetails(mainData.semesters))
        setSemesterDetails(extractSemesterDetails(mainData.semesters))
    }, [mainData])

    return (
        <Grid item xs={12}>
            <Grid container columnSpacing={2} rowSpacing={2}>
                <Grid item xs={12}>
                    <Typography
                        variant="h1"
                        color="primary"
                        sx={{ fontWeight: 700, fontSize: { xs: '26px', sm: '30px', md: '34px' } }}
                    >
                        Calculate Your CGPA
                    </Typography>
                </Grid>

                <SemestersForm noOfSemesters={noOfSemesters} setNoOfSemesters={setNoOfSemesters} />

                <CGPACalculator semesterDetails={semesterDetails} setTotalCredits={setTotalCredits} setSGPA={setSGPA} />
            </Grid>
        </Grid>
    )
}

export default CalculateYourCGPA
