import { Grid, MenuItem, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { URL } from '../../../../constants/config'

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

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormData: any
}

function DetailsForm({ setFormData }: Props) {
    const [colleges, setColleges] = useState(['None'])
    const [regulations, setRegulations] = useState([''])
    const [departments, setDepartments] = useState([''])

    const [selectedCollege, setSelectedCollege] = useState<string>('None')
    const [selectedRegulation, setSelectedRegulation] = useState('')
    const [selectedDepartment, setSelectedDepartment] = useState('')

    const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.value)
        setSelectedCollege(e.target.value)
    }

    const fetchCollege = async () => {
        const response = await fetch(`${URL.FULL_URL}/data`)
        const data = await response.json()
        console.log(data.colleges)
        setColleges(['None', ...data.colleges])
    }

    const fetchRegulation = async () => {
        const response = await fetch(`${URL.FULL_URL}/data?college=${selectedCollege}`)
        const data = await response.json()
        console.log(data.regulations)
        setRegulations(data.regulations)
    }

    const fetchDepartment = async () => {
        const response = await fetch(`${URL.FULL_URL}/data?college=${selectedCollege}&regulation=${selectedRegulation}`)
        const data = await response.json()
        console.log(data.departments)
        setDepartments(data.departments)
    }

    const fetchSemester = async () => {
        const response = await fetch(
            `${URL.FULL_URL}/data?college=${selectedCollege}&regulation=${selectedRegulation}&department=${selectedDepartment}`,
        )
        const data = await response.json()
        console.log(data.semesters)
        setFormData({
            college: selectedCollege,
            regulation: selectedRegulation,
            department: selectedDepartment,
            semesters: data.semesters,
        })
    }

    useEffect(() => {
        fetchCollege()
    }, [])

    useEffect(() => {
        if (selectedCollege !== 'None' && selectedCollege !== '') {
            fetchRegulation()
            setSelectedRegulation('')
        }
        if (selectedCollege === 'None' || selectedCollege === '') {
            setSelectedRegulation('')
        }
    }, [selectedCollege])

    useEffect(() => {
        if (selectedCollege !== 'None' && selectedCollege !== '' && selectedRegulation !== '') {
            fetchDepartment()
            setSelectedDepartment('')
        }
        if (selectedRegulation === '') {
            setSelectedDepartment('')
            setSelectedRegulation('')
        }
    }, [selectedRegulation])

    useEffect(() => {
        if (selectedDepartment !== '') {
            fetchSemester()
        }
    }, [selectedDepartment])

    useEffect(() => {
        console.log({ selectedCollege, selectedRegulation, selectedDepartment })
    }, [selectedCollege, selectedRegulation, selectedDepartment])

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
                    disabled={selectedCollege === 'None'}
                    value={selectedRegulation}
                    onChange={(e) => setSelectedRegulation(e.target.value)}
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
                    disabled={selectedCollege === 'None' || selectedRegulation === ''}
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
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
