import React from 'react'
import { Grid, Typography } from '@mui/material'

function Logo() {
    return (
        <Grid container alignItems="center" justifyContent="flex-start">
            <Grid item>
                {/* <Logo /> */}
                <Typography variant="h4" sx={{ fontWeight: 500, mr: '10px' }}>
                    G
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    sx={{
                        color: 'primary.main',
                        display: { xs: 'none', sm: 'block' },
                        fontSize: '24px',
                        fontWeight: 700,
                    }}
                >
                    Grade Calculator
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Logo
