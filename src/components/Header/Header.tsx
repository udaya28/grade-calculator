import React, { useContext, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { getAuth, signOut } from 'firebase/auth'
import { Button, Grid, Typography } from '@mui/material'
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
                        <NavLink to="/" style={{ textDecoration: 'none' }}>
                            <Logo />
                        </NavLink>
                    </Grid>

                    <Grid item>
                        <Grid container alignItems="center" justifyContent="flex-end" columnSpacing={2}>
                            {/* <Grid item xs={10} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                                <NavItems menuItems={menuItems} />
                            </Grid> */}

                            {/* <Grid item>
                                <Button variant="outlined">SIGN IN</Button>
                            </Grid> */}

                            {!user && (
                                <Grid item>
                                    <Button variant="contained" onClick={handleLoginClick}>
                                        <Typography sx={{ color: '#FFFFFF', fontSize: '14px' }}>SIGN IN</Typography>
                                    </Button>
                                </Grid>
                            )}

                            {user && user?.uid !== '' && (
                                <Grid item>
                                    <Button variant="outlined" color="error" onClick={handleLogoutClick}>
                                        SIGN OUT
                                    </Button>
                                </Grid>
                            )}

                            <Grid item>
                                <ThemeToggle darkMode={darkMode} handleThemeChange={handleThemeChange} />
                            </Grid>

                            {/* <Grid item sx={{ display: { md: 'none' } }}>
                                <NavMenu menuItems={menuItems} />
                            </Grid> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
