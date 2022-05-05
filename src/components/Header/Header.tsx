import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Button, Grid, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import ThemeToggle from './ThemeToggle/ThemeToggle'

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
    const handleLoginClick = () => {
        setLoginDialogOpen(true)
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

                    <Grid item xs={6}>
                        <Grid container alignItems="center" justifyContent="flex-end" columnSpacing={2}>
                            {/* <Grid item xs={10} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                                <NavItems menuItems={menuItems} />
                            </Grid> */}

                            {/* <Grid item>
                                <Button variant="outlined">SIGN IN</Button>
                            </Grid> */}

                            <Grid item>
                                <Button variant="contained" onClick={handleLoginClick}>
                                    <Typography sx={{ color: '#FFFFFF', fontSize: '14px' }}>SIGN IN</Typography>
                                </Button>
                            </Grid>

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
