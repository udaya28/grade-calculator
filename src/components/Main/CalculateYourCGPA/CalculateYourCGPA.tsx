import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CGPACalculator from './CGPACalculator/CGPACalculator'
import SemestersForm from './SemestersForm/SemestersForm'

const init = (semesterDetails: Array<any>, noOfSemesters: number) => {
    if (semesterDetails.length > noOfSemesters - 1) {
        const data = [...semesterDetails]
        data.length = noOfSemesters
        return data
    }

    const data = [...semesterDetails]
    for (let i = 0; i < noOfSemesters - semesterDetails.length; i += 1) {
        data.push({
            semesterNumber: i + 1 + semesterDetails.length,
            totalCredits: '',
            SGPA: '',
        })
    }
    return data
}

function CalculateYourCGPA() {
    const [noOfSemesters, setNoOfSemesters] = useState<string | number>(1)
    const [semesterDetails, setSemesterDetails] = useState<Array<any>>([])

    useEffect(() => {
        setSemesterDetails(init(semesterDetails, +noOfSemesters))
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
