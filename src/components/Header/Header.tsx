import React, { useContext, useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { getAuth, signOut } from 'firebase/auth'
import { Button, Grid, Typography, Box, Snackbar } from '@mui/material'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import ThemeToggle from './ThemeToggle/ThemeToggle'
import AuthContext from '../../context/AuthContext'

interface Props {
    darkMode: boolean
    handleThemeChange: () => void
    setLoginDialogOpen: (value: boolean) => void
}

function Header({ darkMode, handleThemeChange, setLoginDialogOpen }: Props) {
    const [openSnackBar, setOpenSnackBar] = useState({
        open: false,
        message: '',
    })
    // const menuItems = [
    //     { id: 1, name: 'SGPA', link: '#sgpa' },
    //     { id: 2, name: 'CGPA', link: '#cgpa' },
    //     { id: 3, name: 'ABOUT US', link: '#about-us' },
    //     { id: 4, name: 'CONTACT US', link: '#contact-us' },
    // ]
    const user = useContext(AuthContext)

    useEffect(() => {
        console.log('user in Header', user?.uid)
    }, [user])

    const handleLoginClick = () => {
        setLoginDialogOpen(true)
    }

    const handleLogoutClick = async () => {
        try {
            const auth = getAuth()
            await signOut(auth)
            setOpenSnackBar({
                open: true,
                message: 'Sign Out Successfully',
            })
            console.log('sign out success')
            console.log('id', user.uid)
        } catch (error) {
            console.log('error in sign out', error)
        }
    }

    return (
        <AppBar sx={{ backgroundColor: 'background.default' }} position="fixed">
            <Toolbar>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Grid container alignItems="center" justifyContent="flex-start" sx={{ position: 'relative' }}>
                            <Grid item>
                                <NavLink to="/" style={{ textDecoration: 'none' }}>
                                    <Logo />
                                </NavLink>
                            </Grid>
                            <Grid item sx={{ position: 'absolute', left: '89%' }}>
                                <Box>
                                    <Typography
                                        sx={{
                                            color: 'primary.main',
                                            whiteSpace: 'nowrap',
                                            display: { xs: 'none', sm: 'block' },
                                            fontSize: { xs: '22px', lg: '24px' },
                                            fontWeight: 400,
                                        }}
                                    >
                                        rade Calculator
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container alignItems="center" justifyContent="flex-end">
                            {/* <Grid item xs={10} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                                <NavItems menuItems={menuItems} />
                            </Grid> */}

                            {/* <Grid item>
                                <Button variant="outlined">SIGN IN</Button>
                            </Grid> */}

                            {!user && (
                                <Grid item>
                                    <Button variant="contained" onClick={handleLoginClick}>
                                        <Typography sx={{ color: '#FFFFFF', fontSize: '12px' }}>SIGN IN</Typography>
                                    </Button>
                                </Grid>
                            )}

                            {user && user?.uid !== '' && (
                                <Grid item>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={handleLogoutClick}
                                        sx={{
                                            color: 'primary.main',
                                            borderWidth: '2px',
                                            fontSize: '12px',
                                            fontWeight: 700,
                                        }}
                                    >
                                        SIGN OUT
                                    </Button>
                                </Grid>
                            )}

                            <Grid item sx={{ paddingLeft: '16px' }}>
                                <ThemeToggle darkMode={darkMode} handleThemeChange={handleThemeChange} />
                            </Grid>

                            {/* <Grid item sx={{ display: { md: 'none' } }}>
                                <NavMenu menuItems={menuItems} />
                            </Grid> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
            <Snackbar
                open={openSnackBar.open}
                autoHideDuration={3000}
                onClose={() => setOpenSnackBar({ open: false, message: '' })}
                message={openSnackBar.message}
            />
        </AppBar>
    )
}

export default Header
