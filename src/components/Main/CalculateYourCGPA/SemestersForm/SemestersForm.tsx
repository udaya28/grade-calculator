import { Grid, MenuItem, TextField } from '@mui/material'
import React from 'react'

const sxStyles = {
    '& .MuiOutlinedInput-root': {
        '& > fieldset': {
            borderColor: 'secondary.main',
            borderRadius: '10px',
        },
    },
    '& .MuiOutlinedInput-root:hover': {
        '& > fieldset': {
            borderColor: 'secondary.main',
        },
    },
    '& .MuiSvgIcon-root': {
        color: 'secondary.main',
    },
    '& .MuiInputLabel-root.Mui-disabled': {
        WebkitTextFillColor: 'secondary.main',
        color: 'secondary.main',
        opacity: 0.6,
    },
    '& .Mui-disabled': {
        '& > fieldset': {
            borderColor: 'secondary.main',
            // opacity: 0.6,
        },
    },
    // '& .Mui-disabled > fieldset .MuiOutlinedInput-notchedOutline': {
    //     borderColor: 'secondary.main',
    // },
}

interface Props {
    noOfSemesters: number | string
    setNoOfSemesters: React.Dispatch<React.SetStateAction<number | string>>
}

function SemestersForm({ noOfSemesters, setNoOfSemesters }: Props) {
    return (
        <Grid item xs={7} sm={5} md={4}>
            <TextField
                select
                id="outlined-basic"
                label="No. of. Semesters"
                variant="outlined"
                fullWidth
                InputProps={{ sx: { color: 'secondary.main' } }}
                sx={sxStyles}
                // disabled={selectedCollege === 'None'}
                value={noOfSemesters}
                onChange={(e) => setNoOfSemesters(e.target.value)}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
                    <MenuItem key={semester} value={semester}>
                        {semester}
                    </MenuItem>
                ))}
            </TextField>
        </Grid>
    )
}

export default SemestersForm
