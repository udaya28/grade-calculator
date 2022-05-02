import { Grid, SxProps, Typography } from '@mui/material'
import { Theme } from '@mui/system'
import React, { useState } from 'react'
import CGPACalculator from './CGPACalculator/CGPACalculator'
import SemestersForm from './SemestersForm/SemestersForm'

const sxProps: SxProps<Theme> = {
    // border: '1px solid red',

    '& > div > div > div': {
        borderWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
    },

    '& > div > div:last-child > div': {
        borderWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: 'secondary.main',
    },

    '& > div > div > div:first-child': {
        borderWidth: '1px',
        borderLeftStyle: 'solid',
        borderLeftColor: 'secondary.main',
    },
    '& > div:last-child > div > div': {
        borderWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'secondary.main',
    },

    '& > div:first-child > div > div:first-child': {
        borderWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
        borderTopLeftRadius: '10px',
    },

    '& > div:first-child > div > div:last-child': {
        borderWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
        borderTopRightRadius: '10px',
    },

    '& > div:last-child > div > div:first-child': {
        borderWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
        borderBottomLeftRadius: '10px',
    },
    '& > div:last-child > div > div:last-child': {
        borderWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
        borderBottomRightRadius: '10px',
    },
}

function TableHead() {
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

const displayCGPA = () => 0

function CalculateYourCGPA() {
    const [noOfSemesters, setNoOfSemesters] = useState<string | number>(1)
    return (
        <Grid item xs={12}>
            <Grid container columnSpacing={2} rowSpacing={2}>
                <Grid item xs={12}>
                    <Typography
                        variant="h1"
                        color="primary"
                        sx={{ fontWeight: 700, fontSize: { xs: '26px', sm: '30px', md: '34px' } }}
                    >
                        Calculate Your CGPA
                    </Typography>
                </Grid>

                <SemestersForm noOfSemesters={noOfSemesters} setNoOfSemesters={setNoOfSemesters} />

                <Grid item xs={12}>
                    <Grid
                        container
                        sx={{
                            padding: { xs: '15px', md: '30px' },
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: 'secondary.main',
                            borderRadius: '20px',
                        }}
                    >
                        <Grid item xs={12}>
                            <Typography sx={{ fontWeight: 'bold', color: 'primary.main', padding: '10px' }}>
                                {`CGPA ${displayCGPA() || '0'}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container sx={sxProps}>
                                <TableHead />
                                {[...Array(noOfSemesters)].map((i, semesterNumber) => (
                                    <CGPACalculator semesterNumber={semesterNumber + 1} />
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CalculateYourCGPA
