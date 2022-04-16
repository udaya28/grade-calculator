import React from 'react'
import { Grid, MenuItem, Select, Theme, Typography, SxProps } from '@mui/material'

const gradeBoxStyles: SxProps<Theme> = {
    borderBottom: {
        xs: '0px',
        sm: '1px',
        md: '1px',
        lg: '1px',
        xl: '1px',
    },
    borderBottomColor: 'secondary.main',
    borderBottomStyle: 'solid',
    borderRightWidth: {
        xs: '0px',
        sm: '1px',
        md: '1px',
        lg: '1px',
        xl: '1px',
    },
    borderRightStyle: 'solid',
    borderRightColor: 'secondary.main',
}

const gradeArr = [
    { value: 10, name: 'O' },
    { value: 9, name: 'A+' },
    { value: 8, name: 'A' },
    { value: 7, name: 'B+' },
    { value: 6, name: 'B' },
    { value: 0, name: 'RA' },
]

interface Props {
    removeBorder: SxProps<Theme>
    grade: string
    setGrade: React.Dispatch<React.SetStateAction<string>>
}

function GradeBox({ removeBorder, grade, setGrade }: Props) {
    return (
        <Grid item xs={6} sm={3} sx={gradeBoxStyles}>
            <Select
                id="outlined-basic"
                variant="standard"
                fullWidth
                sx={removeBorder}
                size="small"
                displayEmpty
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            >
                <MenuItem value="" disabled>
                    <Typography style={{ color: 'secondary.main', opacity: 0.8, fontWeight: 500 }}>Grade</Typography>
                </MenuItem>
                {gradeArr.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                        {`${item.name}`}
                    </MenuItem>
                ))}
            </Select>
        </Grid>
    )
}

export default GradeBox
