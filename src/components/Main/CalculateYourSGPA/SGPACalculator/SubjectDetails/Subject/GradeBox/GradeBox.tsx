import React from 'react'
import { Grid, MenuItem, Select, Theme, Typography, SxProps, SelectChangeEvent } from '@mui/material'

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

const gradeArr = [
    { value: 10, name: 'O' },
    { value: 9, name: 'A+' },
    { value: 8, name: 'A' },
    { value: 7, name: 'B+' },
    { value: 6, name: 'B' },
    { value: 0, name: 'RA/AB' },
]

interface Props {
    removeBorder: SxProps<Theme>
    grade: number
    handleGradeChange: (event: SelectChangeEvent<string>) => void
}

function GradeBox({ removeBorder, grade, handleGradeChange }: Props) {
    console.log('GradeBox', grade, grade.toString())
    return (
        <Grid item xs={6} sm={3} sx={gradeBoxStyles}>
            <Select
                id="outlined-basic"
                variant="standard"
                fullWidth
                sx={removeBorder}
                size="small"
                displayEmpty
                value={grade.toString() || ''}
                onChange={handleGradeChange}
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
