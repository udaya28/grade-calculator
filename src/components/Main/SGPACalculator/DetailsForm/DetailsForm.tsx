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
    const [selectedRegulation, setSelectedRegulation] = useState(null)
    const [selectedDepartment, setSelectedDepartments] = useState(null)

    const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.value)
        setSelectedCollege(+e.target.value)
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
                    sx={{ width: '100%' }}
                    onChange={(e) => handelChange(e)}
                >
                    {colleges.map((college) => (
                        <MenuItem key={college.id} value={college.id}>
                            {college.name}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={6} sm={3}>
                <TextField select id="outlined-basic" label="Regulation" variant="outlined" sx={{ width: '100%' }}>
                    {regulations.map((regulation) => (
                        <MenuItem key={regulation.id} value={regulation.id}>
                            {regulation.name}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={6} sm={3}>
                <TextField select id="outlined-basic" label="Department" variant="outlined" sx={{ width: '100%' }}>
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
