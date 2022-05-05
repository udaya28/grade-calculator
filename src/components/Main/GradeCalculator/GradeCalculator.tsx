import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { doc, setDoc } from 'firebase/firestore'
import React, { useContext } from 'react'
import AuthContext from '../../../context/AuthContext'
import { firestoreDB } from '../../../firebaseSetup'

interface Props {
    mainData: any
}

function GradeCalculator({ mainData }: Props) {
    const user = useContext(AuthContext)
    const handleSave = async () => {
        console.log('save')
        if (user && user.uid) {
            try {
                const document = doc(firestoreDB, 'users', user.uid)
                await setDoc(document, { data: JSON.stringify(mainData) }, { merge: true })
                console.log('Document written with ID: ', user.uid)
            } catch (e) {
                console.error('Error adding document: ', e)
            }
        }
    }

    return (
        <>
            <Grid item>
                <Typography
                    variant="h1"
                    color="primary"
                    sx={{ fontWeight: 700, fontSize: { xs: '26px', sm: '30px', md: '34px' } }}
                >
                    Grade Calculator
                </Typography>
                <Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' } }}>
                    Lorem ipsum, dolor sit amet consectetur ad ipisicing elit. Neque dolor dolore voluptatibus corpor
                    is, iusto quod assumenda alias quos. Id nobis aspernatur quos delectus possimus exercita tionem
                    ipsa,
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Box
                    sx={{
                        p: '8px',
                        borderWidth: '1.5px',
                        borderColor: 'primary.main',
                        borderStyle: 'solid',
                        borderRadius: '10px',
                    }}
                >
                    {user && user.uid && (
                        <Grid container justifyContent="center" alignItems="center" columnSpacing={2}>
                            <Grid item>
                                <Typography
                                    sx={{ textAlign: 'justify', fontSize: { xs: '14px', sm: '16px', md: '18px' } }}
                                >
                                    store your data in online by clicking the save button
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="small" onClick={handleSave}>
                                    <Typography sx={{ color: '#ffffff', fontWeight: 700 }}>Save</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                    {!user && (
                        <Grid container justifyContent="center" alignItems="center" columnSpacing={2}>
                            <Grid item>
                                <Typography
                                    sx={{ textAlign: 'justify', fontSize: { xs: '14px', sm: '16px', md: '18px' } }}
                                >
                                    Store your data in online by singing in with email and password
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Grid>
        </>
    )
}

export default GradeCalculator
