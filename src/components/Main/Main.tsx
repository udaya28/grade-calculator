import React from 'react'
import { Grid, Container, Typography } from '@mui/material'
import GradeCalculator from './GradeCalculator/GradeCalculator'
import SGPACalculator from './SGPACalculator/SGPACalculator'

function Main() {
    return (
        <Container maxWidth="xl" sx={{ px: { md: '50px', lg: '70px' } }}>
            <Grid container columnSpacing={4} rowSpacing={3}>
                <Grid item xs={12} md={8}>
                    <Grid container alignItems="flex-start" justifyContent="flex-start" rowSpacing={2}>
                        <GradeCalculator />
                        <SGPACalculator />
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4}>
                    aside
                </Grid>
            </Grid>
        </Container>
    )
}

export default Main
