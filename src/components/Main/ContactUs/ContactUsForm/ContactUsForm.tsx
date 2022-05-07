import { Button, Grid, Snackbar, TextField, Typography } from '@mui/material'
import { doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { firestoreDB } from '../../../../firebaseSetup'

const sxStyles = {
    '& .MuiOutlinedInput-root': {
        '& > fieldset': {
            borderColor: 'secondary.main',
            borderRadius: '8px',
        },
    },
    '& .MuiOutlinedInput-root:hover': {
        '& > fieldset': {
            borderColor: 'primary.main',
        },
    },
}

function ContactUsForm() {
    const [openSnackBar, setOpenSnackBar] = useState({
        open: false,
        message: '',
    })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    // const [nameError, setNameError] = useState(false)
    // const [emailError, setEmailError] = useState(false)
    // const [messageError, setMessageError] = useState(false)

    const postMessage = async (data: any) => {
        console.log('post message')
        try {
            const document = doc(firestoreDB, 'contactUs', `${Date.now()}`)
            await setDoc(document, { ...data })
            console.log('Message written with ID: ', document.id)
            setOpenSnackBar({
                open: true,
                message: 'Message Sent Successfully',
            })
        } catch (e) {
            setOpenSnackBar({
                open: true,
                message: 'Error in Sending Message, Try again later',
            })
            console.error('Error adding message: ', e)
        }
    }

    const handleSend = async () => {
        console.log('Send')
        console.log(name, email, message)
        if (name !== '' && email !== '' && message !== '') {
            setError('')
            if (name.length > 2 && email.length > 2 && message.length > 2) {
                // if()
                // console.log(validateEmail(email))
                console.log('valid')
                try {
                    await postMessage({ name, email, message })
                    setName('')
                    setEmail('')
                    setMessage('')
                    console.log('Message sent')
                } catch (err: any) {
                    console.log(err)
                    setError('Something went wrong, please try again later')
                }
            }
        } else {
            console.log('Fill all fields')
            setError('Fill all fields')
        }
    }

    return (
        <Grid container sx={{ px: { xs: '15px', sm: '80px', md: '100px' } }} rowSpacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="input-with-icon-textfield"
                    fullWidth
                    type="text"
                    sx={sxStyles}
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                        sx: { color: 'secondary.main' },
                    }}
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="input-with-icon-textfield"
                    fullWidth
                    type="email"
                    sx={sxStyles}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Mail address"
                    InputProps={{
                        sx: { color: 'secondary.main' },
                    }}
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="input-with"
                    fullWidth
                    multiline
                    // maxRows={4}
                    rows={5}
                    type="text"
                    sx={sxStyles}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    InputProps={{
                        sx: { color: 'secondary.main' },
                    }}
                    variant="outlined"
                />
            </Grid>
            {error !== '' && (
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <Typography sx={{ color: 'red' }}>{error}</Typography>
                    </Grid>
                </Grid>
            )}
            <Grid item xs={12}>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={handleSend}>
                            <Typography sx={{ color: '#FFFFFF', fontSize: '14px', px: '20px' }}>send</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Snackbar
                open={openSnackBar.open}
                autoHideDuration={3000}
                onClose={() => setOpenSnackBar({ open: false, message: '' })}
                message={openSnackBar.message}
            />
        </Grid>
    )
}

export default ContactUsForm
