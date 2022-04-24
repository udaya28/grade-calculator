import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import DetailsForm from './DetailsForm/DetailsForm'
import SGPACalculator from './SGPACalculator/SGPACalculator'
import { URL } from '../../../constants/config'

function CalculateYourSGPA() {
    const [formData, setFormData] = useState({
        college: 'None',
        regulation: '',
        department: '',
    })

    const [mainData, setMainData] = useState({
        college: 'None',
        regulation: '',
        department: '',
        semesters: {},
    })

    const fetchSemesters = async () => {
        const response = await fetch(
            `${URL.FULL_URL}/data?college=${formData.college}&regulation=${formData.regulation}&department=${formData.department}`,
        )
        const data = await response.json()
        setMainData({
            college: formData.college,
            regulation: formData.regulation,
            department: formData.department,
            semesters: data.semesters,
        })
    }

    useEffect(() => {
        if (
            formData.college !== 'None' &&
            formData.college !== '' &&
            formData.regulation !== '' &&
            formData.department !== ''
        ) {
            fetchSemesters()
        }
        // else {
        //     setMainData({
        //         college: 'None',
        //         regulation: '',
        //         department: '',
        //         semesters: {}
        //     })
        // }
    }, [formData])

    useEffect(() => {
        console.log(mainData)
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
                        Calculate Your SGPA
                    </Typography>
                </Grid>

                <DetailsForm setFormData={setFormData} />

                <SGPACalculator />
            </Grid>
        </Grid>
    )
}

export default CalculateYourSGPA
