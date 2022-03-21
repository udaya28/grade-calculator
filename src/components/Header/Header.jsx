import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'
import { Grid, IconButton } from '@mui/material'
import Logo from '../../img/logo.svg'

function Header() {
    return (
        <div className="App">
            <AppBar color="background" position="static">
                <Toolbar>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <img src={Logo} alt="Logo" />
                        </Grid>
                        <Grid item sx={{ display: { sm: 'none' } }}>
                            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                <MenuIcon color="secondary" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
