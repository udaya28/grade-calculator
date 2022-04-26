import { Grid, Input, Theme, SxProps } from '@mui/material'
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

interface Props {
    removeBorder: SxProps<Theme>
    subject: string
    setSubject: React.Dispatch<React.SetStateAction<string>>
}

function SubjectBox({ subject, setSubject, removeBorder }: Props) {
    console.log(subject)
    return (
        <Grid item xs={12} sm={6} sx={SubjectBoxStyles}>
            <Input
                id="outlined-basic"
                fullWidth
                size="small"
                placeholder="Subject"
                sx={removeBorder}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                // disabled
                // readOnly
            />
        </Grid>
    )
}

export default SubjectBox
