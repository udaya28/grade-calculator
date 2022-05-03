import { Grid, MenuItem, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { URL } from '../../../../constants/config'
import { getLocalStorage, setLocalStorage } from '../../../../util/LocalStorage'

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
    setFormData: any
}

function DetailsForm({ setFormData }: Props) {
    const [colleges, setColleges] = useState(['None'])
    const [regulations, setRegulations] = useState([''])
    const [departments, setDepartments] = useState([''])

    const [selectedCollege, setSelectedCollege] = useState(getLocalStorage('selectedCollege') || 'None')
    const [selectedRegulation, setSelectedRegulation] = useState(getLocalStorage('selectedRegulation') || '')
    const [selectedDepartment, setSelectedDepartment] = useState(getLocalStorage('selectedDepartment') || '')

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
        setLocalStorage('selectedCollege', selectedCollege)
        if (selectedCollege !== 'None' && selectedCollege !== '') {
            fetchRegulation()
            setSelectedRegulation(getLocalStorage('selectedRegulation') || '')
        }
        if (selectedCollege === 'None' || selectedCollege === '') {
            setSelectedRegulation('')
            setLocalStorage('selectedRegulation', '')
            setLocalStorage('selectedDepartment', '')
        }
    }, [selectedCollege])

    useEffect(() => {
        setLocalStorage('selectedRegulation', selectedRegulation)
        if (selectedCollege !== 'None' && selectedCollege !== '' && selectedRegulation !== '') {
            fetchDepartment()
            setSelectedDepartment(getLocalStorage('selectedDepartment') || '')
        }
        if (selectedRegulation === '') {
            setSelectedDepartment('')
            setLocalStorage('selectedDepartment', '')
        }
    }, [selectedRegulation])

    useEffect(() => {
        setLocalStorage('selectedDepartment', selectedDepartment)
        if (selectedDepartment !== '') {
            fetchSemester()
        }
    }, [selectedDepartment])

    useEffect(() => {
        console.log({ selectedCollege, selectedRegulation, selectedDepartment })
        setFormData({
            college: selectedCollege,
            regulation: selectedRegulation,
            department: selectedDepartment,
            semesters: {},
        })
    }, [selectedCollege, selectedRegulation, selectedDepartment])

    const handleCollegeChange = (e: any) => {
        setLocalStorage('selectedRegulation', '')
        setLocalStorage('selectedDepartment', '')
        setSelectedCollege(e.target.value)
    }

    const handleRegulationChange = (e: any) => {
        setLocalStorage('selectedDepartment', '')
        setSelectedRegulation(e.target.value)
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
                    onChange={handleCollegeChange}
                    InputProps={{ sx: { color: 'secondary.main' } }}
                    sx={sxStyles}
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
                    sx={sxStyles}
                    disabled={selectedCollege === 'None'}
                    value={selectedRegulation}
                    onChange={handleRegulationChange}
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
                    sx={sxStyles}
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
