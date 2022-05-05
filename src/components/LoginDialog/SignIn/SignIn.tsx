import MailIcon from '@mui/icons-material/Mail'
import LockIcon from '@mui/icons-material/Lock'
import { Grid, InputAdornment, TextField, Button, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'

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
}

function SignIn({ setTabValue }: Props) {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSignIn = () => {
        console.log('Sign in')
        console.log(email, password)
    }

    return (
        <Grid container rowSpacing={3}>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: 'gray' }}>
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
                                        <VisibilityOff sx={{ color: 'secondary.main' }} />
                                    ) : (
                                        <Visibility sx={{ color: 'secondary.main' }} />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
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
        </Grid>
    )
}

export default SignIn
