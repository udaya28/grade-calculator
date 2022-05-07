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
                {`\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Grade calculator is a web application designed to calculate both your SGPA and CGPA of your college semester examination. You can calculate your SGPA just by entering your grades of your semester examination. After calculating your Grades, it can be stored in online via email and password for future CGPA calculation.`}
            </Typography>
        </Grid>
    )
}

export default GradeCalculator
