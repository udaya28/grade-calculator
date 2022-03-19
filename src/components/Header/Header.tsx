import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'

function Header() {
    return (
        <div className="App">
            <AppBar color="primary" position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon color='secondary' />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
