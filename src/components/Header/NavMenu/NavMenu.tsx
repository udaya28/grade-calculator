import { IconButton, Menu, MenuItem, MenuList, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink } from 'react-router-dom'

interface Props {
    menuItems: Array<{ id: number; name: string; link: string }>
}

function NavMenu({ menuItems }: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={(event) => handleClick(event)}
            >
                <MenuIcon color="primary" />
            </IconButton>
            <Menu
                id="basic-menus"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    sx: {
                        //   maxHeight: ITEM_HEIGHT * 4.5,
                        //   width: '10ch',
                        backgroundColor: 'primary.main',
                    },
                }}
            >
                <MenuList>
                    {menuItems.map((item) => (
                        <MenuItem onClick={() => handleClose()} key={item.id}>
                            <NavLink
                                to={`${item.link}`}
                                style={{ textDecoration: 'none' }}
                                // style={({ isActive }) =>
                                //     isActive ?  : undefined
                                // }
                            >
                                <Typography sx={{ color: '#FFF', fontWeight: 800 }}>{item.name}</Typography>
                            </NavLink>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </>
    )
}

export default NavMenu
