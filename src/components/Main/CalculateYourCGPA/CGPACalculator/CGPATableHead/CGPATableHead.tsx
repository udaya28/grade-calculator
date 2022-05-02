import React from 'react'
import { Grid, Typography } from '@mui/material'

function CGPATableHead() {
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
                <Grid item xs={4}>
                    <Typography sx={{ color: 'secondary.main' }}>Semester</Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography sx={{ color: 'secondary.main' }}>Total Credits</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{ color: 'secondary.main' }}>SGPA</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CGPATableHead
