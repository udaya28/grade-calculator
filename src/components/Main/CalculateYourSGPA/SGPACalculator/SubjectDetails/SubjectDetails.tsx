import { Grid, IconButton } from '@mui/material'
import React from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import Subject from './Subject/Subject'

function SubjectDetails() {
    return (
        <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={11}>
                <Subject />
            </Grid>
            <Grid item xs={1}>
                <Grid container justifyContent="unset" alignItems="center">
                    <IconButton>
                        <CancelOutlinedIcon sx={{ color: 'secondary.main' }} />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SubjectDetails
