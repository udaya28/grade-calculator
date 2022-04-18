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
                <Grid container justifyContent="flex-end" alignItems="center">
                    <IconButton sx={{ p: { xs: '0px', sm: '12px' } }}>
                        <CancelOutlinedIcon sx={{ color: 'secondary.main' }} />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SubjectDetails
