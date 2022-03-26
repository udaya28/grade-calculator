import React from 'react'
import { Grid, IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

interface Props {
    darkMode: boolean
    handleThemeChange: () => void
}

function ThemeToggle({ darkMode, handleThemeChange }: Props) {
    return (
        <Grid container alignItems="center" justifyContent="flex-end">
            <IconButton size="large" color="inherit" aria-label="menu" onClick={() => handleThemeChange()}>
                {darkMode ? <Brightness7Icon color="primary" /> : <Brightness4Icon color="primary" />}
            </IconButton>
        </Grid>
    )
}

export default ThemeToggle
