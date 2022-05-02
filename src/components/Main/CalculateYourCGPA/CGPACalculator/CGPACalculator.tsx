import React from 'react'
import { Grid, Typography, SxProps } from '@mui/material'
import { Theme } from '@mui/system'
import CGPATableHead from './CGPATableHead/CGPATableHead'
import SGPADetails from './SGPADetails/SGPADetails'

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

const displayCGPA = () => 0

interface SemesterDetails {
    semesterNumber: number
    totalCredits: number | string
    SGPA: number | string
}

interface Prop {
    semesterDetails: Array<SemesterDetails>
}

function CGPACalculator({ semesterDetails }: Prop) {
    return (
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
                        <CGPATableHead />
                        {semesterDetails.map((semester) => (
                            <SGPADetails semesterData={semester} key={semester.semesterNumber} />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CGPACalculator
