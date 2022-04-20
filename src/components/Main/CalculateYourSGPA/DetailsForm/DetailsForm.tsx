import { Grid, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

function DetailsForm() {
    const colleges = [
        {
            id: 0,
            name: 'None',
        },
        {
            id: 1,
            name: 'VCET',
        },
        {
            id: 2,
            name: 'AU',
        },
    ]
    const regulations = [
        {
            id: 1,
            name: '2018',
        },
        {
            id: 2,
            name: '2021',
        },
    ]
    const departments = [
        {
            id: 1,
            name: 'CSE',
        },
        {
            id: 2,
            name: 'IT',
        },
        {
            id: 3,
            name: 'ECE',
        },
        {
            id: 4,
            name: 'MEC',
        },
    ]

    const [selectedCollege, setSelectedCollege] = useState<number>(0)
    // const [selectedRegulation, setSelectedRegulation] = useState('')
    // const [selectedDepartment, setSelectedDepartments] = useState('')

    const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.value)
        setSelectedCollege(+e.target.value)
    }

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
                        <MenuItem key={college.id} value={college.id}>
                            {college.name}
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
                        <MenuItem key={regulation.id} value={regulation.id}>
                            {regulation.name}
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
                        <MenuItem key={department.id} value={department.id}>
                            {department.name}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </>
    )
}

export default DetailsForm
