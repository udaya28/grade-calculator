import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CGPACalculator from './CGPACalculator/CGPACalculator'
import SemestersForm from './SemestersForm/SemestersForm'

interface SemesterDetails {
    semesterNumber: number
    totalCredits: number | string
    SGPA: number | string
}

function CalculateYourCGPA() {
    const [noOfSemesters, setNoOfSemesters] = useState<string | number>(1)
    const [semesterDetails, setSemesterDetails] = useState<Array<SemesterDetails>>([])

    useEffect(() => {
        const data = []
        for (let i = 0; i < noOfSemesters; i += 1) {
            data.push({
                semesterNumber: i + 1,
                totalCredits: '',
                SGPA: '',
            })
        }
        setSemesterDetails(data)
    }, [noOfSemesters])

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

                <CGPACalculator semesterDetails={semesterDetails} />
            </Grid>
        </Grid>
    )
}

export default CalculateYourCGPA
