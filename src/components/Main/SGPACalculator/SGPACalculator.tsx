import React, { useState } from 'react'
import { Grid, MenuItem, TextField, Typography } from '@mui/material'
import DetailsForm from './DetailsForm/DetailsForm'

function SGPACalculator() {
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

                <DetailsForm />
            </Grid>
        </Grid>
    )
}

export default SGPACalculator
