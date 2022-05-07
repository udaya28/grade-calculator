import React from 'react'
import { Grid, Typography } from '@mui/material'

interface Props {
    displayCGPA: any
    semesterDetails: any
}

function CGPATableBottom({ displayCGPA, semesterDetails }: Props) {
    return (
        <Grid item xs={12}>
            <Grid
                container
                sx={{
                    '& > div': {
                        padding: { xs: '10px 14px', sm: '12px 18px' },
                    },
                }}
            >
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
                        {`Your Calculated CGPA is ${displayCGPA(semesterDetails) || '0.00'}`}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CGPATableBottom
