import { Button, Dialog, DialogContent, Grid, InputAdornment, Snackbar, TextField, Typography } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail'
import { sendPasswordReset } from '../../services/Auth'

interface Props {
    forgotPassDialogOpen: boolean
    setForgotPassDialogOpen: (value: boolean) => void
}

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

function ForgotPassDialog({ forgotPassDialogOpen, setForgotPassDialogOpen }: Props) {
    const [email, setEmail] = React.useState('')
    const [resetEmailError, setResetEmailError] = useState('')
    const [resetEmailSuccess, setResetEmailSuccess] = useState(false)
    const [openSnackBar, setOpenSnackBar] = useState({
        open: false,
        message: '',
    })

    const handleForgotPassword = async () => {
        setResetEmailError('')
        setResetEmailSuccess(false)
        // console.log('Forgot password')
        try {
            await sendPasswordReset(email)
            // console.log('Email sent to', email)
            setResetEmailSuccess(true)
            setOpenSnackBar({ open: true, message: 'Password reset link has been sent to your email' })
        } catch (error: any) {
            // console.log(JSON.stringify(error))
            const { code } = error
            let message = ''
            switch (code) {
                case 'auth/invalid-email':
                    // console.log('Invalid email')
                    message = 'Invalid email, Enter a valid email address'
                    break
                case 'auth/user-not-found':
                    // console.log('User not found')
                    message = 'User not found, Enter a valid email address'
                    break
                default:
                    // console.log('Something went wrong')
                    message = 'Something went wrong, Contact support'
                    break
            }
            // console.log(message)
            setResetEmailError(message)
        }
    }
    const handleDialogClose = () => {
        setEmail('')
        setResetEmailError('')
        setResetEmailSuccess(false)
        setForgotPassDialogOpen(false)
    }

    return (
        <Dialog onClose={handleDialogClose} open={forgotPassDialogOpen} maxWidth="xs">
            <DialogContent>
                <Grid container rowSpacing={2}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="center">
                            <LockIcon color="error" fontSize="large" sx={{ fontSize: '100px' }} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" sx={{ color: 'secondary.main', textAlign: 'center' }}>
                            Reset Password
                        </Typography>
                        <Typography sx={{ color: 'gray', fontSize: '14px', textAlign: 'center' }}>
                            A password reset email will be sent to this email
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="input-with-icon-textfield"
                            fullWidth
                            type="email"
                            size="small"
                            sx={sxStyles}
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                sx: { color: 'secondary.main' },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailIcon color="primary" />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                        />
                    </Grid>
                    {resetEmailError !== '' && (
                        <Grid item xs={12}>
                            <Grid container justifyContent="center">
                                <Typography sx={{ color: 'red' }}>{resetEmailError}</Typography>
                            </Grid>
                        </Grid>
                    )}
                    {resetEmailSuccess && (
                        <Grid item xs={12}>
                            <Grid container justifyContent="center">
                                <Typography sx={{ color: 'green' }}>
                                    A password reset email please check your mail If not found please check your Spam
                                    Folder{' '}
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={handleForgotPassword}>
                                    <Typography sx={{ color: '#FFFFFF', fontSize: '14px' }}>Send mail</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <Snackbar
                open={openSnackBar.open}
                autoHideDuration={5000}
                onClose={() => setOpenSnackBar({ open: false, message: '' })}
                message={openSnackBar.message}
            />
        </Dialog>
    )
}

export default ForgotPassDialog
