import React, { useContext, useEffect, useReducer } from 'react'
import { Grid, Container } from '@mui/material'
import { doc, getDoc } from 'firebase/firestore'
import GradeCalculator from './GradeCalculator/GradeCalculator'
import CalculateYourSGPA from './CalculateYourSGPA/CalculateYourSGPA'
import Aside from './Aside/Aside'
import CalculateYourCGPA from './CalculateYourCGPA/CalculateYourCGPA'
import reducer from './CalculateYourSGPA/reducer'
import { getLocalStorage, setLocalStorage } from '../../util/LocalStorage'
import AuthContext from '../../context/AuthContext'
import { firestoreDB } from '../../firebaseSetup'
import SaveData from './SaveData/SaveData'

function Main() {
    const user = useContext(AuthContext)
    const [mainData, dispatch] = useReducer(reducer, {
        college: getLocalStorage('selectedCollege') || 'None',
        regulation: getLocalStorage('selectedRegulation') || '',
        department: getLocalStorage('selectedDepartment') || '',
        semesters: getLocalStorage('mainData')?.semesters || {},
    })

    useEffect(() => {
        setLocalStorage('mainData', mainData)
    }, [mainData])

    const fetchData = async () => {
        // console.log('fetching data')
        try {
            if (user && user.uid) {
                console.log('user.uid', user.uid)
                const document = doc(firestoreDB, 'users', user.uid)
                const docSnap = await getDoc(document)
                if (docSnap.exists()) {
                    // // console.log('Document data:', docSnap.data())
                    const allFetchedData = docSnap.data()
                    if (allFetchedData?.data) {
                        const parsedData = JSON.parse(allFetchedData.data)
                        setLocalStorage('fetchedData', parsedData)
                        dispatch({ type: 'SET_FETCHED_DATA', payload: parsedData })
                    }
                } else {
                    // console.log('No such document!')
                }
            }
        } catch (error) {
            // console.log('error', error)
        }
    }

    useEffect(() => {
        // console.log('AuthContext USER in main', user)
        fetchData()
    }, [user])

    return (
        <Container maxWidth="xl" sx={{ px: { md: '50px', lg: '70px' } }}>
            <Grid container columnSpacing={4} rowSpacing={3} justifyContent="space-around">
                <Grid item xs={12} md={8} lg={7}>
                    <Grid container alignItems="flex-start" justifyContent="flex-start" rowSpacing={2}>
                        <GradeCalculator />
                        <SaveData mainData={mainData} />
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
