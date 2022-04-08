import { Grid, Typography } from '@mui/material'
import React from 'react'

function GradeCalculator() {
    return (
        <Grid item>
            <Typography
                variant="h1"
                color="primary"
                sx={{ fontWeight: 700, fontSize: { xs: '26px', sm: '30px', md: '34px' } }}
            >
                Grade Calculator
            </Typography>
            <Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' } }}>
                Lorem ipsum, dolor sit amet consectetur ad ipisicing elit. Neque dolor dolore voluptatibus corpor is,
                iusto quod assumenda alias quos. Id nobis aspernatur quos delectus possimus exercita tionem ipsa,
                molestiae omnis voluptas cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
        </Grid>
    )
}

export default GradeCalculator
