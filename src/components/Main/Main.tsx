import React, { useEffect, useReducer } from 'react'
import { Grid, Container } from '@mui/material'
import GradeCalculator from './GradeCalculator/GradeCalculator'
import CalculateYourSGPA from './CalculateYourSGPA/CalculateYourSGPA'
import Aside from './Aside/Aside'
import CalculateYourCGPA from './CalculateYourCGPA/CalculateYourCGPA'
import reducer from './CalculateYourSGPA/reducer'
import { getLocalStorage, setLocalStorage } from '../../util/LocalStorage'

function Main() {
    const [mainData, dispatch] = useReducer(reducer, {
        college: getLocalStorage('selectedCollege') || 'None',
        regulation: getLocalStorage('selectedRegulation') || '',
        department: getLocalStorage('selectedDepartment') || '',
        semesters: getLocalStorage('mainData')?.semesters || {},
    })

    useEffect(() => {
        setLocalStorage('mainData', mainData)
    }, [mainData])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLocalStorage('fetchedData', sampleData)
    //         dispatch({ type: 'SET_FETCHED_DATA', payload: sampleData })
    //     }, 1000)
    // }, [])

    return (
        <Container maxWidth="xl" sx={{ px: { md: '50px', lg: '70px' } }}>
            <Grid container columnSpacing={4} rowSpacing={3} justifyContent="space-around">
                <Grid item xs={12} md={8} lg={7}>
                    <Grid container alignItems="flex-start" justifyContent="flex-start" rowSpacing={2}>
                        <GradeCalculator />
                        <CalculateYourSGPA mainData={mainData} dispatch={dispatch} />
                        <CalculateYourCGPA mainData={mainData} />
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                    <Grid container alignItems="flex-start" justifyContent="flex-start" rowSpacing={2}>
                        <Aside />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Main
