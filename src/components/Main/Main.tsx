import React from 'react'
import { Grid, Container } from '@mui/material'
import GradeCalculator from './GradeCalculator/GradeCalculator'
import CalculateYourSGPA from './CalculateYourSGPA/CalculateYourSGPA'
import Aside from './Aside/Aside'

function Main() {
    return (
        <Container maxWidth="xl" sx={{ px: { md: '50px', lg: '70px' } }}>
            <Grid container columnSpacing={4} rowSpacing={3} justifyContent="space-around">
                <Grid item xs={12} md={8} lg={7}>
                    <Grid container alignItems="flex-start" justifyContent="flex-start" rowSpacing={2}>
                        <GradeCalculator />
                        <CalculateYourSGPA />
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                    <Grid container alignItems="flex-start" justifyContent="flex-start" rowSpacing={2}>
                        <Aside />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Main
