import { Grid, Input, Typography } from '@mui/material'
import { SxProps, Theme } from '@mui/system'
import React from 'react'

// const boxStyles: SxProps<Theme> = {}

const removeBorder: SxProps<Theme> = {
    '&&&:before': {
        borderBottom: 'none',
    },
    '&&:after': {
        borderBottom: 'none',
    },
    height: '100%',
    color: 'secondary.main',
    '& div:focus': { backgroundColor: 'inherit' },
    '& .MuiSvgIcon-root': {
        color: 'secondary.main',
        opacity: 0.9,
    },
    '& > input::placeholder': {
        color: 'secondary.main',
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: 1.5,
        opacity: 0.7,
    },
    textAlign: 'center',
}

interface SemesterDetails {
    semesterNumber: number
    totalCredits: number | string
    SGPA: number | string
}
interface Prop {
    semesterData: SemesterDetails
}

function SGPADetails({ semesterData }: Prop) {
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
                    <Typography
                        sx={{ color: 'secondary.main', textAlign: 'center' }}
                    >{`${semesterData.semesterNumber}`}</Typography>
                </Grid>
                <Grid item xs={5}>
                    <Input
                        id="outlined-basic"
                        fullWidth
                        size="small"
                        placeholder="Total Credits"
                        sx={removeBorder}
                        type="number"
                        // inputProps={{ sx: { textAlign: 'center' } }}
                        value={semesterData.totalCredits}
                        // onChange={(e) => setSubject(e.target.value)}
                        // disabled
                        // readOnly
                    />
                </Grid>
                <Grid item xs={3}>
                    <Input
                        id="outlined-basic"
                        fullWidth
                        size="small"
                        placeholder="SGPA"
                        sx={removeBorder}
                        type="number"
                        // inputProps={{ sx: { textAlign: 'center' } }}
                        value={semesterData.SGPA}
                        // onChange={(e) => setSubject(e.target.value)}
                        // disabled
                        // readOnly
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SGPADetails
