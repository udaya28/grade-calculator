import { Grid } from '@mui/material'

import React, { useState } from 'react'
import SemesterDetails from './SemesterDetails/SemesterDetails'

function SGPACalculator() {
    return (
        <Grid item xs={12}>
            <Grid
                container
                sx={{
                    p: { xs: '10px', sm: '20px', lg: '30px' },
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'secondary.main',
                    borderRadius: '5px',
                }}
            >
                <SemesterDetails semesterNumber={1} />
                <SemesterDetails semesterNumber={2} />
                <SemesterDetails semesterNumber={3} />
                <SemesterDetails semesterNumber={4} />
                <SemesterDetails semesterNumber={5} />
                <SemesterDetails semesterNumber={6} />
                <SemesterDetails semesterNumber={7} />
                <SemesterDetails semesterNumber={8} />
            </Grid>
        </Grid>
    )
}

export default SGPACalculator
