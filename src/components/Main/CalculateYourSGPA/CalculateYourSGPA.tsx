import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import DetailsForm from './DetailsForm/DetailsForm'
import SGPACalculator from './SGPACalculator/SGPACalculator'
import { getLocalStorage, setLocalStorage } from '../../../util/LocalStorage'
// import useLocalStorage from '../../../hooks/useLocalStorage'

interface Prop {
    mainData: any
    dispatch: any
}

function CalculateYourSGPA({ mainData, dispatch }: Prop) {
    const [formData, setFormData] = useState({
        college: 'None',
        regulation: '',
        department: '',
        semesters: {},
    })

    // const [mainData, dispatch] = useReducer(reducer, {
    //     college: 'None',
    //     regulation: '',
    //     department: '',
    //     semesters: {},
    // })

    // const initializer = (
    //     initialValue = {
    //         college: 'None',
    //         regulation: '',
    //         department: '',
    //         semesters: {},
    //     },
    // ) => JSON.parse(localStorage.getItem('mainData') || '') || initialValue

    // const [mainData, dispatch] = useReducer(reducer, initializer())

    const localMainData = getLocalStorage('mainData')

    const getGrade = (semester: string, currentSubject: any) => {
        if (!localMainData || Object.keys(localMainData.semesters).length === 0) return ''
        // console.log(semester, currentSubject, localMainData.semesters)

        const { college: localCollege, regulation: localRegulation, department: localDepartment } = localMainData

        if (
            localCollege !== formData.college ||
            localRegulation !== formData.regulation ||
            localDepartment !== formData.department
        ) {
            return ''
        }

        const { semesters } = localMainData
        // console.log(semesters)
        const { subject } = semesters[semester]
        const storedSubject = subject.find((s: any) => s.subject === currentSubject.subject)
        if (!storedSubject) return ''
        const { grade } = storedSubject
        // console.log(grade)
        return grade
    }

    const addGrade = (semesters: any): any => {
        const data: any = {}
        if (!semesters) return data
        Object.keys(semesters).forEach((semester) => {
            data[semester] = {
                ...semesters[semester],
                // eslint-disable-next-line arrow-body-style
                subject: semesters[semester].subject.map((sub: any) => {
                    return { ...sub, grade: getGrade(semester, sub) }
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
                type: 'ADD',
                payload: {
                    college: formData.college,
                    regulation: formData.regulation,
                    department: formData.department,
                    semesters: {},
                },
            })
        }
    }, [formData])

    useEffect(() => {
        console.log('mainData', mainData)
    }, [mainData])

    useEffect(() => {
        const localData = getLocalStorage('mainData')
        const { semesters } = mainData

        if (Object.keys(semesters).length === 0) return

        if (!localData) {
            setLocalStorage('mainData', mainData)
            return
        }

        setLocalStorage('mainData', mainData)
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
