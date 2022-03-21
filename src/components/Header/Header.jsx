import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'
// import { Box } from '@mui/system'
import { Grid, IconButton, Typography } from '@mui/material'
import Logo from '../../img/logo.svg'

function Header() {
    return (
        <div className="App">
            <AppBar color="background" position="static">
                <Toolbar>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Grid container alignItems="center" justifyContent="flex-start">
                                <Grid>
                                    <img src={Logo} alt="Logo" />
                                </Grid>
                                <Grid>
                                    <Typography
                                        sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '24px', fontWeight: 700 }}
                                    >
                                        Grade Calculator
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ display: { sm: 'none' } }}>
                            <IconButton size="large" color="inherit" aria-label="menu">
                                <MenuIcon color="primary" sx={{}} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
