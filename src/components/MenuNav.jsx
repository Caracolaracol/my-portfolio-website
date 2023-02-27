import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Menu, MenuItem, Box } from '@mui/material';
import menuicon from '/icons/menusolid.svg'
import classes from './NavBar.module.css'


function MenuNav() {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }


    const navNames = [
        {
            name: "Web development projects",
            direccion: "/web-projects"
        },
        {
            name: "Post & Motion Graphics",
            direccion: '/post-projects'
        },
        {
            name: "Blog",
            direccion: '/blog'
        },
        {
            name: "About",
            direccion: '/about'
        },
    ]

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>



            <img src={menuicon} onClick={handleClick} className='w-[32px] h-[36px]' />


            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        bgcolor: 'rgb(221,212,237)',
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'rgba(44,40,68,0.2)',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >


                {
                    navNames.map(s => (
                        
                            <MenuItem
                                key={s.name}
                                onClick={handleClose}
                                sx={(theme) => ({
                                    "& .MuiTouchRipple-child": {
                                        backgroundColor: 'rgb(11,0,78) !important',
                                    }

                                })}>
                                <NavLink
                                    to={s.direccion}
                                    className={({ isActive }) =>
                                        isActive ? `tablet:text-xs laptop:text-lg self-center text-left font-tommyregular h-full w-full  ${classes.active}` : ` tablet:text-xs laptop:text-lg self-center text-left font-tommyregular h-full w-full`
                                    }
                                >
                                    {s.name}
                                </NavLink>

                            </MenuItem>
                            
                    ))
                }
            </Menu>
        </Box>
    )
}


export default MenuNav