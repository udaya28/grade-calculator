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
    dispatch: any
    mainData: any
    setCurrentAccordion: any
}

function DetailsForm({ dispatch, mainData, setCurrentAccordion }: Props) {
    const [colleges, setColleges] = useState(['None'])
    const [regulations, setRegulations] = useState([''])
    const [departments, setDepartments] = useState([''])

    const { college: selectedCollege, regulation: selectedRegulation, department: selectedDepartment } = mainData

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

        dispatch({
            type: 'SET_FETCHED_DATA_WITHOUT_GRADE',
            payload: {
                college: selectedCollege,
                regulation: selectedRegulation,
                department: selectedDepartment,
                semesters: data.semesters,
            },
        })
    }

    useEffect(() => {
        fetchCollege()
    }, [])

    useEffect(() => {
        console.log('selectedCollege Change', selectedCollege)
        setLocalStorage('selectedCollege', selectedCollege)
        if (selectedCollege !== 'None' && selectedCollege !== '') {
            fetchRegulation()
            dispatch({ type: 'SET_REGULATION', payload: getLocalStorage('selectedRegulation') || '' })
        }
        if (selectedCollege === 'None' || selectedCollege === '') {
            dispatch({ type: 'SET_REGULATION', payload: '' })
            setLocalStorage('selectedRegulation', '')
            setLocalStorage('selectedDepartment', '')
        }
    }, [selectedCollege])

    useEffect(() => {
        setLocalStorage('selectedRegulation', selectedRegulation)
        if (selectedCollege !== 'None' && selectedCollege !== '' && selectedRegulation !== '') {
            fetchDepartment()
            dispatch({ type: 'SET_DEPARTMENT', payload: getLocalStorage('selectedDepartment') || '' })
        }
        if (selectedRegulation === '') {
            dispatch({ type: 'SET_DEPARTMENT', payload: '' })

            setLocalStorage('selectedDepartment', '')
        }
    }, [selectedRegulation])

    useEffect(() => {
        setLocalStorage('selectedDepartment', selectedDepartment)
        if (selectedDepartment !== '') {
            fetchSemester()
        }
        setCurrentAccordion(0)
    }, [selectedDepartment])

    const handleCollegeChange = (e: any) => {
        setLocalStorage('selectedRegulation', '')
        setLocalStorage('selectedDepartment', '')
        dispatch({ type: 'SET_COLLEGE', payload: e.target.value })
    }

    const handleRegulationChange = (e: any) => {
        setLocalStorage('selectedDepartment', '')
        dispatch({ type: 'SET_REGULATION', payload: e.target.value })
    }

    const handleDepartmentChange = (e: any) => {
        dispatch({ type: 'SET_DEPARTMENT', payload: e.target.value })
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
                    onChange={handleDepartmentChange}
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
