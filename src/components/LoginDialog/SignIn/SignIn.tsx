import MailIcon from '@mui/icons-material/Mail'
import LockIcon from '@mui/icons-material/Lock'
import { Grid, InputAdornment, TextField, Button, Typography, IconButton, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { signInWithEmail } from '../../../services/Auth'

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

interface Props {
    setTabValue: any
    setLoginDialogOpen: (value: boolean) => void
    setForgotPassDialogOpen: (value: boolean) => void
}

function SignIn({ setTabValue, setLoginDialogOpen, setForgotPassDialogOpen }: Props) {
    const [openSnackBar, setOpenSnackBar] = useState({
        open: false,
        message: '',
    })
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signInError, setSignInError] = useState('')
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSignIn = async () => {
        console.log('Sign in')
        console.log(email, password)
        if (email !== '' && password !== '') {
            // signInWithEmailAndPassword
            try {
                const res = await signInWithEmail(email, password)
                console.log('user signed in', res)
                setLoginDialogOpen(false)
                // setTimeout(() => {
                //     setOpenSnackBar({ open: true, message: 'Signed In Successfully' })
                // }, 5000)
            } catch (error: any) {
                console.log(JSON.stringify(error))
                const { code } = error
                let message = ''
                switch (code) {
                    case 'auth/invalid-email':
                        console.log('Invalid email')
                        message = 'Invalid email, Enter a valid email address'
                        break
                    case 'auth/wrong-password':
                        console.log('Wrong password')
                        message = 'Wrong password, Enter a valid password'
                        break
                    case 'auth/user-not-found':
                        console.log('User not found')
                        message = 'User not found, Enter a valid email address'
                        break
                    default:
                        console.log('Something went wrong')
                        message = 'Something went wrong, Contact support'
                        break
                }
                setSignInError(message)
            }
        }
    }

    const openForgotPasswordDialog = () => {
        setLoginDialogOpen(false)
        setForgotPassDialogOpen(true)
    }

    return (
        <Grid container rowSpacing={3}>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: 'secondary.main' }}>
                    Hi there, Welcome Back!!!
                </Typography>
                <Typography sx={{ color: 'gray', fontSize: '14px' }}>
                    Don’t have an account?{' '}
                    <Typography
                        variant="button"
                        onClick={() => setTabValue('sign-up')}
                        sx={{ color: 'primary.main', fontSize: '14px', fontWeight: 'bold' }}
                    >
                        Sign up
                    </Typography>
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
            <Grid item xs={12}>
                <TextField
                    id="input-with-icon-textfield"
                    fullWidth
                    size="small"
                    type={showPassword ? 'text' : 'password'}
                    sx={sxStyles}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        sx: { color: 'secondary.main' },
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon color="primary" />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff sx={{ color: 'rgb(107 108 109)' }} />
                                    ) : (
                                        <Visibility sx={{ color: 'rgb(107 108 109)' }} />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
            </Grid>

            {signInError !== '' && (
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <Typography sx={{ color: 'red' }}>{signInError}</Typography>
                    </Grid>
                </Grid>
            )}
            <Grid item xs={12}>
                <Grid container justifyContent="flex-end">
                    <Typography
                        // variant="button"
                        onClick={() => openForgotPasswordDialog()}
                        sx={{ color: 'primary.main', fontSize: '12px' }}
                    >
                        Forgot Password?
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={handleSignIn}>
                            <Typography sx={{ color: '#FFFFFF', fontSize: '14px' }}>Sign in</Typography>
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

export default SignIn
