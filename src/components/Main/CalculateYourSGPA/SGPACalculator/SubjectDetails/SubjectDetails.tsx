import { Grid } from '@mui/material'
import React from 'react'
import Subject from './Subject/Subject'

interface Props {
    subject: {
        subject: string
        credit: number
        grade: number
    }
    semesterNumber: number
    dispatch: React.Dispatch<any>
}

function SubjectDetails({ subject, semesterNumber, dispatch }: Props) {
    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Subject subjectDetails={subject} semesterNumber={semesterNumber} dispatch={dispatch} />
            </Grid>
            {/* <Grid item xs={1}>
                <Grid container justifyContent="flex-end" alignItems="center">
                    <IconButton sx={{ p: { xs: '0px', sm: '12px' } }}>
                        <CancelOutlinedIcon sx={{ color: 'secondary.main' }} />
                    </IconButton>
                </Grid>
            </Grid> */}
        </Grid>
    )
}

export default React.memo(SubjectDetails)
