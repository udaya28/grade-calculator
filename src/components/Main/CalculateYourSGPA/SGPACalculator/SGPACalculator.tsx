import { Grid } from '@mui/material'

import React, { useState } from 'react'
import SemesterDetails from './SemesterDetails/SemesterDetails'

function SGPACalculator() {
    return (
        <Grid item xs={12}>
            <Grid
                container
                sx={{
                    p: { xs: '6px', sm: '10px', lg: '20px' },
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgba(24, 26, 27, 0.8)',
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
