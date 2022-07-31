import { Button, Grid, Snackbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { doc, setDoc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import AuthContext from '../../../context/AuthContext'
import { firestoreDB } from '../../../firebaseSetup'

interface Props {
    mainData: any
}

function SaveData({ mainData }: Props) {
    const [openSnackBar, setOpenSnackBar] = useState({
        open: false,
        message: '',
    })
    const user = useContext(AuthContext)
    const handleSave = async () => {
        // console.log('save')
        if (user && user.uid) {
            try {
                const document = doc(firestoreDB, 'users', user.uid)
                await setDoc(document, { data: JSON.stringify(mainData) }, { merge: true })
                // console.log('Document written with ID: ', user.uid)
                setOpenSnackBar({
                    open: true,
                    message: 'Data Saved Successfully',
                })
            } catch (e) {
                setOpenSnackBar({
                    open: true,
                    message: 'Error in Saving Data',
                })
                console.error('Error adding document: ', e)
            }
        }
    }
    return (
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
                <Grid container justifyContent="center" alignItems="center" columnSpacing={2}>
                    <Grid item>
                        <Typography
                            sx={{
                                textAlign: 'justify',
                                fontWeight: 'bold',
                                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                            }}
                        >
                            {user && user.uid ? 'Click save button to save your changes' : 'Sign in to save your data'}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" size="small" onClick={handleSave} disabled={!(user && user.uid)}>
                            <Typography sx={{ color: '#ffffff', fontWeight: 700 }}>Save</Typography>
                        </Button>
                    </Grid>
                </Grid>

                {/* {user && user.uid && (
            <Grid container justifyContent="center" alignItems="center" columnSpacing={2}>
                <Grid item>
                    <Typography
                        sx={{ textAlign: 'justify', fontSize: { xs: '14px', sm: '16px', md: '18px' } }}
                    >
                        Click the save button to save your current data
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
                        Sign in to save your data to online
                    </Typography>
                </Grid>
            </Grid>
        )} */}
            </Box>
            <Snackbar
                open={openSnackBar.open}
                autoHideDuration={3000}
                onClose={() => setOpenSnackBar({ open: false, message: '' })}
                message={openSnackBar.message}
            />
        </Grid>
    )
}

export default SaveData
