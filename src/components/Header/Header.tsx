import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Grid, IconButton, Link, Typography } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Logo from '../Logo/Logo'
import NavMenu from './NavMenu/NavMenu'
// import Logo from '../../img/logo.svg'

interface Props {
    darkMode: boolean
    handleThemeChange: () => void
}

function Header({ darkMode, handleThemeChange }: Props) {
    const menuItems = [
        { id: 1, name: 'SGPA', link: '#SGPA' },
        { id: 2, name: 'CGPA', link: '#CGPA' },
        { id: 3, name: 'ABOUT US', link: '#ABOUT-US' },
        { id: 4, name: 'CONTACT US', link: '#CONTACT-US' },
    ]
    return (
        <div className="App">
            <AppBar sx={{ backgroundColor: 'background.default' }} position="static">
                <Toolbar>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Grid container alignItems="center" justifyContent="flex-start">
                                <Grid item>
                                    {/* <Logo /> */}
                                    <Typography variant="h3" sx={{ fontWeight: 800, mr: '10px' }}>
                                        G
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        sx={{
                                            color: 'primary.main',
                                            display: { xs: 'none', sm: 'block' },
                                            fontSize: '24px',
                                            fontWeight: 700,
                                        }}
                                    >
                                        Grade Calculator
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container alignItems="center" justifyContent="flex-end">
                                <Grid item xs={10} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                                    <Grid container alignItems="center" justifyContent="space-evenly">
                                        {menuItems.map((item) => (
                                            <Grid item key={item.id}>
                                                <Link href={item.link} underline="hover">
                                                    <Typography
                                                        sx={{
                                                            color: 'secondary.main',
                                                            fontSize: '16px',
                                                            fontWeight: 700,
                                                            '&:hover': { color: 'primary.main' },
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                </Link>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <Grid container alignItems="center" justifyContent="flex-end">
                                        <IconButton
                                            size="large"
                                            color="inherit"
                                            aria-label="menu"
                                            onClick={() => handleThemeChange()}
                                        >
                                            {darkMode ? (
                                                <Brightness7Icon color="primary" />
                                            ) : (
                                                <Brightness4Icon color="primary" />
                                            )}
                                        </IconButton>
                                    </Grid>
                                </Grid>

                                <Grid item sx={{ display: { md: 'none' } }}>
                                    <NavMenu menuItems={menuItems} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
