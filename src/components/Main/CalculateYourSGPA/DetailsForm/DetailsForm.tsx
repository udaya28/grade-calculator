import { Grid, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

const sxrop = {
    '& .MuiOutlinedInput-root': {
        '& > fieldset': {
            borderColor: 'secondary.main',
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
}

function DetailsForm() {
    const colleges = ['None', 'VCET', 'AU']
    const regulations = ['2016', '2018']
    const departments = ['CSE','IT','ECE','MEC']

    const [selectedCollege, setSelectedCollege] = useState<string>('None')
    // const [selectedRegulation, setSelectedRegulation] = useState('')
    // const [selectedDepartment, setSelectedDepartments] = useState('')

    const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.value)
        setSelectedCollege(e.target.value)
    }



    return (
        <>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    value={selectedCollege}
                    id="outlined-basic"
                    label="University/College"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => handelChange(e)}
                    InputProps={{ sx: { color: 'secondary.main' } }}
                    sx={sxrop}
                >
                    {colleges.map((college) => (
                        <MenuItem key={college} value={college}>
                            {college}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={6} sm={3}>
                <TextField
                    select
                    id="outlined-basic"
                    label="Regulation"
                    variant="outlined"
                    fullWidth
                    InputProps={{ sx: { color: 'secondary.main' } }}
                    sx={sxrop}
                >
                    {regulations.map((regulation) => (
                        <MenuItem key={regulation} value={regulation}>
                            {regulation}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={6} sm={3}>
                <TextField
                    select
                    id="outlined-basic"
                    label="Department"
                    variant="outlined"
                    fullWidth
                    InputProps={{ sx: { color: 'secondary.main' } }}
                    sx={sxrop}
                >
                    {departments.map((department) => (
                        <MenuItem key={department} value={department}>
                            {department}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </>
    )
}

export default DetailsForm
