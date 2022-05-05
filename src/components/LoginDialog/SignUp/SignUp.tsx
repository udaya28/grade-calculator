import MailIcon from '@mui/icons-material/Mail'
import LockIcon from '@mui/icons-material/Lock'
import { Grid, InputAdornment, TextField, Button, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { createNewUserWithEmail } from '../../../services/Auth'

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
    setLoginDialogOpen: any
}

function SignUp({ setTabValue, setLoginDialogOpen }: Props) {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [signUpError, setSignUpError] = useState('')

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            setPasswordError(true)
            return
        }
        console.log('Sign up')
        console.log(email, password, confirmPassword)
        if (email !== '' && password !== '' && confirmPassword !== '') {
            try {
                const res = await createNewUserWithEmail(email, password)
                console.log('user created', res)
                setLoginDialogOpen(false)
            } catch (error: any) {
                console.log(JSON.stringify(error))
                const { code } = error
                let message = ''
                switch (code) {
                    case 'auth/invalid-email':
                        console.log('Invalid email')
                        message = 'Invalid email, Enter a valid email address'
                        break
                    case 'auth/weak-password':
                        console.log('Weak password')
                        message = 'Weak password, Password must be at least 6 characters long'
                        break
                    case 'auth/email-already-in-use':
                        console.log('Email already in use')
                        message = 'Email already in use, Enter a different email address'
                        break
                    default:
                        console.log('Something went wrong')
                        message = 'Something went wrong, Contact support'
                        break
                }
                setSignUpError(message)
            }
        }
    }

    return (
        <Grid container rowSpacing={3}>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: 'gray' }}>
                    Create your account with email
                </Typography>
                <Typography sx={{ color: 'gray', fontSize: '14px' }}>
                    Already have an account?{' '}
                    <Typography
                        variant="button"
                        onClick={() => setTabValue('sign-in')}
                        sx={{ color: 'primary.main', fontSize: '14px', fontWeight: 'bold' }}
                    >
                        Sign In
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
                                        <VisibilityOff sx={{ color: 'secondary.main' }} />
                                    ) : (
                                        <Visibility sx={{ color: 'secondary.main' }} />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                    error={passwordError}
                    helperText={passwordError && password.length ? 'Passwords do not match' : ''}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="input-with-icon-textfield"
                    fullWidth
                    size="small"
                    type="password"
                    sx={sxStyles}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    InputProps={{
                        sx: { color: 'secondary.main' },
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon color="primary" />
                            </InputAdornment>
                        ),
                        // endAdornment: (
                        //     <InputAdornment position="end">
                        //         <IconButton
                        //             aria-label="toggle password visibility"
                        //             onClick={handleClickShowPassword}
                        //             edge="end"
                        //         >
                        //             {showPassword ? (
                        //                 <VisibilityOff sx={{ color: 'secondary.main' }} />
                        //             ) : (
                        //                 <Visibility sx={{ color: 'secondary.main' }} />
                        //             )}
                        //         </IconButton>
                        //     </InputAdornment>
                        // ),
                    }}
                    variant="outlined"
                    error={passwordError}
                    helperText={passwordError ? 'Password does not match' : ''}
                />
            </Grid>

            {signUpError !== '' && (
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <Typography sx={{ color: 'red' }}>{signUpError}</Typography>
                    </Grid>
                </Grid>
            )}

            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={handleSignUp}>
                            <Typography sx={{ color: '#FFFFFF', fontSize: '14px' }}>Sign in</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SignUp
