import React, { useEffect, useReducer, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import DetailsForm from './DetailsForm/DetailsForm'
import SGPACalculator from './SGPACalculator/SGPACalculator'
import reducer from './reducer'
// import useLocalStorage from '../../../hooks/useLocalStorage'

function CalculateYourSGPA() {
    const [formData, setFormData] = useState({
        college: 'None',
        regulation: '',
        department: '',
        semesters: {},
    })

    const [mainData, dispatch] = useReducer(reducer, {
        college: 'None',
        regulation: '',
        department: '',
        semesters: {},
    })

    // const initializer = (
    //     initialValue = {
    //         college: 'None',
    //         regulation: '',
    //         department: '',
    //         semesters: {},
    //     },
    // ) => JSON.parse(localStorage.getItem('mainData') || '') || initialValue

    // const [mainData, dispatch] = useReducer(reducer, initializer())

    // useEffect(() => {
    //     localStorage.setItem('mainData', JSON.stringify(mainData))
    // }, [mainData])

    const addGrade = (semesters: any): any => {
        const data: any = {}
        Object.keys(semesters).forEach((semester) => {
            data[semester] = {
                ...semesters[semester],
                // eslint-disable-next-line arrow-body-style
                subject: semesters[semester].subject.map((sub: any) => {
                    return { ...sub, grade: '' }
                }),
            }
        })

        return data
    }

    useEffect(() => {
        if (
            formData.college !== 'None' &&
            formData.college !== '' &&
            formData.regulation !== '' &&
            formData.department !== ''
        ) {
            dispatch({
                type: 'ADD',
                payload: {
                    college: formData.college,
                    regulation: formData.regulation,
                    department: formData.department,
                    semesters: addGrade(formData.semesters),
                },
            })
        }

        if (formData.college === 'None' || formData.regulation === '' || formData.department === '') {
            dispatch({
                type: 'DEFAULT',
                payload: {
                    college: 'None',
                    regulation: '',
                    department: '',
                    semesters: {},
                },
            })
        }
    }, [formData])

    useEffect(() => {
        console.log('mainData', mainData)
    }, [mainData])

    return (
        <Grid item xs={12}>
            <Grid container columnSpacing={2} rowSpacing={2}>
                <Grid item xs={12}>
                    <Typography
                        variant="h1"
                        color="primary"
                        sx={{ fontWeight: 700, fontSize: { xs: '26px', sm: '30px', md: '34px' } }}
                    >
                        Calculate Your SGPA
                    </Typography>
                </Grid>

                <DetailsForm setFormData={setFormData} />

                <SGPACalculator mainData={mainData} dispatch={dispatch} />
            </Grid>
        </Grid>
    )
}

export default CalculateYourSGPA
