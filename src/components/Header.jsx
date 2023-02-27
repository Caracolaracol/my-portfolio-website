
import { Link, NavLink } from 'react-router-dom'
import NavBar from './NavBar'
import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../context/general-context';
import { useRef } from 'react';
import {  Menu, Tooltip,MenuItem, Divider, Box, IconButton } from '@mui/material';

import logo1 from '../assets/logo1.png'
import menuicon from '/icons/menu.png'
import classes from './NavBar.module.css'
import '../index.css'

function Header() {
    const scollToRef = useRef();
    const { setScroll } = useContext(GeneralContext)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    useEffect(() => {
        setScroll(scollToRef)
    },[])
    
    return(
        <div id='header' className='fixed z-10 w-screen bg-[#0c0913]  '>
            <header className='flex flex-row justify-between items-center border-b-[1px] border-naranjaborder border-opacity-30 mx-2 tablet:mx-5 '>
                <div className='ml-2 tablet:ml-12'>
                    <Link to='/'>
                        <img ref={scollToRef} src={logo1} className='w-20 tablet:w-[7.5rem] transicion' />
                    </Link>
                </div>

                <div className="hidden tablet:mr-12 tablet:block ">
                    <NavBar />
                </div>
                <div className='tablet:hidden mr-4'>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title='Menu'>
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <div className='bg-naranjahover rounded-full w-10 h-10 flex justify-center'><img src={menuicon} className='w-8 h-auto'/></div>
                            </IconButton>
                        </Tooltip>
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
                            <MenuItem  
                                onClick={handleClose}
                                sx={(theme) => ({
                                    "& .MuiTouchRipple-child": {
                                      backgroundColor: 'rgb(11,0,78) !important',
                                    },
                                    "& .MuiMenuItem-root":{
                                        backgroundColor: 'red'
                                    }
                                    
                                  })}>
                            <NavLink
                        to='/web-projects'
                        className={({ isActive }) =>
                            isActive ? `tablet:text-xs laptop:text-lg self-center text-left font-tommyregular h-full w-full  ${classes.active}` : ` tablet:text-xs laptop:text-lg self-center text-left font-tommyregular h-full w-full`
                        }
                        >
                        Web development projects
                    </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose} sx={(theme) => ({
                                    "& .MuiTouchRipple-child": {
                                      backgroundColor: 'rgb(11,0,78) !important',
                                    },
                                  })}>
                            <NavLink to='/post-projects'
                        className={({ isActive }) =>
                            isActive ? `tablet:text-xs laptop:text-lg self-center text-left font-tommyregular h-full w-full ${classes.active}` : ` tablet:text-xs laptop:text-lg self-center text-left font-tommyregular h-full w-full`
                        }
                        >
                        Post & Motion Graphics
                    </NavLink>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose} sx={(theme) => ({
                                    "& .MuiTouchRipple-child": {
                                      backgroundColor: 'rgb(11,0,78) !important',
                                    },
                                  })}>
                            <NavLink to='/blog'
                        className={({ isActive }) =>
                            isActive ? `tablet:text-xs laptop:text-lg self-center text-left font-tommyregular h-full w-full  ${classes.active}` : ` tablet:text-xs laptop:text-lg self-center text-left font-tommyregular h-full w-full`
                        }
                        >
                        Blog
                    </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose} sx={(theme) => ({
                                    "& .MuiTouchRipple-child": {
                                      backgroundColor: 'rgb(11,0,78) !important',
                                    },
                                  })}>
                            <NavLink to='/about'
                        className={({ isActive }) =>
                            isActive ? `tablet:text-xs laptop:text-lg self-center text-left font-tommyregular h-full w-full  ${classes.active}` : ` tablet:text-xs laptop:text-lg self-center text-left font-tommyregular h-full w-full`
                        }
                        >
                        About
                    </NavLink>
                            </MenuItem>
                        </Menu>
                    </Box>
                </div>

            </header>
        </div>
    )
}

export default Header