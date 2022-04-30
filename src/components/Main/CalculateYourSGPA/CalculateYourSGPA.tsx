import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import DetailsForm from './DetailsForm/DetailsForm'
import SGPACalculator from './SGPACalculator/SGPACalculator'

function CalculateYourSGPA() {
    const [formData, setFormData] = useState({
        college: 'None',
        regulation: '',
        department: '',
        semesters: {},
    })

    const [mainData, setMainData] = useState({
        college: 'None',
        regulation: '',
        department: '',
        semesters: {},
    })

    useEffect(() => {
        if (
            formData.college !== 'None' &&
            formData.college !== '' &&
            formData.regulation !== '' &&
            formData.department !== ''
        ) {
            setMainData({
                college: formData.college,
                regulation: formData.regulation,
                department: formData.department,
                semesters: formData.semesters,
            })
        }

        if (formData.college === 'None' || formData.regulation === '' || formData.department === '') {
            setMainData({
                college: 'None',
                regulation: '',
                department: '',
                semesters: {},
            })
        }
    }, [formData])

    useEffect(() => {
        console.log('mainData', mainData)
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

                <SGPACalculator mainData={mainData} />
            </Grid>
        </Grid>
    )
}

export default CalculateYourSGPA
