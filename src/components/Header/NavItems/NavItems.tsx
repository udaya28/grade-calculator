import { Grid, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
    menuItems: Array<{ id: number; name: string; link: string }>
}

function NavItems({ menuItems }: Props) {
    return (
        <Grid container alignItems="center" justifyContent="space-evenly">
            {menuItems.map((item) => (
                <Grid item key={item.id}>
                    <NavLink
                        to={`${item.link}`}
                        style={{ textDecoration: 'none' }}
                        // style={({ isActive }) =>
                        //     isActive ?  : undefined
                        // }
                    >
                        <Typography
                            sx={{
                                color: 'secondary.main',
                                fontSize: '16px',
                                fontWeight: 700,
                                '&:hover': {
                                    color: 'primary.main',
                                    borderBottom: '3px solid black',
                                    borderBottomColor: 'primary.main',
                                },
                            }}
                        >
                            {item.name}
                        </Typography>
                    </NavLink>
                </Grid>
            ))}
        </Grid>
    )
}

export default NavItems
