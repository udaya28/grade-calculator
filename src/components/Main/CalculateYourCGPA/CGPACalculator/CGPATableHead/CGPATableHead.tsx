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
                    <Typography sx={{ textAlign: 'center', fontWeight: 700 }}>Semester</Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography sx={{ textAlign: 'center', fontWeight: 700 }}>Total Credits</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{ textAlign: 'center', fontWeight: 700 }}>SGPA</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CGPATableHead
