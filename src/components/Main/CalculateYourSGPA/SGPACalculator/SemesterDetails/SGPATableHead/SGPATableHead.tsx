import { Grid, SxProps, Typography } from '@mui/material'
import { Theme } from '@mui/system'
import React from 'react'

const SubjectBoxStyles: SxProps<Theme> = {
    borderBottomWidth: {
        xs: '1px',
        sm: '1px',
    },
    borderBottomStyle: 'solid',
    borderBottomColor: 'secondary.main', // browser BUG
    borderRightWidth: {
        xs: '0px',
        sm: '1px',
    },
    borderRightStyle: 'solid',
    borderRightColor: 'secondary.main',
    borderLeftWidth: {
        xs: '0px',
        sm: '1px',
    },
    borderLeftStyle: 'solid',
    borderLeftColor: 'secondary.main',
}

const creditBoxStyles: SxProps<Theme> = {
    borderBottomWidth: {
        xs: '0px',
        sm: '1px',
    },
    borderBottomColor: 'secondary.main',
    borderBottomStyle: 'solid',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'secondary.main', // browser BUG
}

const gradeBoxStyles: SxProps<Theme> = {
    borderBottomWidth: {
        xs: '0px',
        sm: '1px',
    },
    borderBottomColor: 'secondary.main', // browser BUG
    borderBottomStyle: 'solid',
    borderRightWidth: {
        xs: '0px',
        sm: '1px',
    },
    borderRightStyle: 'solid',
    borderRightColor: 'secondary.main',
}

function SGPATableHead() {
    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={12} sm={6} sx={SubjectBoxStyles}>
                        <Typography sx={{ padding: '10px 16px', textAlign: 'center', fontWeight: 700 }}>
                            Subject
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} sx={creditBoxStyles}>
                        <Typography sx={{ padding: '10px 16px', textAlign: 'center', fontWeight: 700 }}>
                            Credit
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} sx={gradeBoxStyles}>
                        <Typography sx={{ padding: '10px 16px', textAlign: 'center', fontWeight: 700 }}>
                            Grade
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SGPATableHead
