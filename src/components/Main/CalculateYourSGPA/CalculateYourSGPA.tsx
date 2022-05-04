import React, { useEffect } from 'react'
import { Grid, Typography } from '@mui/material'
import DetailsForm from './DetailsForm/DetailsForm'
import SGPACalculator from './SGPACalculator/SGPACalculator'

interface Prop {
    mainData: any
    dispatch: any
}

function CalculateYourSGPA({ mainData, dispatch }: Prop) {
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

                <DetailsForm mainData={mainData} dispatch={dispatch} />

                <SGPACalculator mainData={mainData} dispatch={dispatch} />
            </Grid>
        </Grid>
    )
}

export default CalculateYourSGPA
