
import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom'
import {  Menu,MenuItem } from '@mui/material';

import { GeneralContext } from '../context/general-context';

import menuhexagon from '/icons/menuhexagon.svg'
import classes from './NavBar.module.css'

function SideMenuNav(){
    const {projectsContext, locationSection} = useContext(GeneralContext)
    const [anchorEl, setAnchorEl] = useState(null)
    const [placeData, setPlaceData] = useState('')
    const effect = `first:text-orangeclear`
    const open = Boolean(anchorEl)
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const list = (effect) => {
        return (
            projectsContext && projectsContext.map((element) => (
                <MenuItem
                    key={element.id}
                    onClick={handleClose}
                    sx={(theme) => ({
                        "& .MuiTouchRipple-child": {
                            backgroundColor: 'rgb(11,0,78) !important',
                        }
                    })}>
                    <NavLink to={`${locationSection}/${element.id}`} key={element.id} className={({ isActive }) =>
                        isActive ? `${classes.active}` : effect
                    }> - {locationSection == '/blog' ? `${element.name} (${element.date[1]} ${element.date[0]})` : element.name}
                    </NavLink>
                </MenuItem>
                )
            )   
        )
    }

    useEffect(() => {
        setPlaceData(projectsContext)
    },[projectsContext])
    return (
        <div className='flex justify-center items-center self-center'>
            <img src={menuhexagon} onClick={handleClick} className='w-[27px] h-[28px] ' />
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
                                locationSection == '/web-projects' || locationSection == '/post-projects' || locationSection == '/blog' ? (
                                    <ul >
                                        {
                                            list(effect)
                                        }
                                    </ul>
                                ) : (
                                    <ul>
                                        {
                                            list('')
                                        }
                                    </ul>
                                )
                            }
                        </Menu>
        </div>
    )
}

export default SideMenuNav