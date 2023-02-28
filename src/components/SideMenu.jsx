import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from './NavBar.module.css'

function SideMenu(props) {
    const [placeData, setPlaceData] = useState('')
    const { pathname } = useLocation()
    const effect = `first:text-orangeclear`
    useEffect(() => {
        setPlaceData(props.projects)
    },[])


    const list = (effect) => {
        return (
            placeData && placeData.map((element) => <NavLink to={`${props.location}/${element.id}`} key={element.id} className={({ isActive }) =>
                isActive ? `${classes.active}` : effect
            } ><li className=' font-tommylight indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased hover:text-naranjahover'>- {props.location == '/blog' ? `${element.name} (${element.date[1]} ${element.date[0]})` :element.name }</li></NavLink>)
        )
    }
    const listAbout = () => {
        return 
    }

    return (
        <div className='hidden showindex laptop:block  w-48 h-[25rem] laptop:w-[19vw] desktop:w-[16vw] fixed top-40 left-0'>
            <div className="tablet:ml-2 laptop:ml-[1vw] desktop:ml-[1.2vw]">
                <h2 className="font-chrono text-xl antialiased tracking-wider">{props.location == '/post-projects' ? 'Index of videos' : props.location == '/web-projects' ? 'Index of projects' : props.location == '/blog' ? 'Blog Entries' : props.location == '/about' ? 'Links' : ''}</h2>
                <div>
                    {
                        pathname == '/web-projects' || pathname == '/post-projects' || pathname == '/blog' ? (
                            <ul >
                                {
                                    list(effect)
                                }
                            </ul>
                        ) : pathname == '/about' ? (
                            <ul>
                                <li >
                                    <a className="font-tommylight indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased hover:text-naranjahover" href="https://github.com/Caracolaracol" target="_blank" >Github</a> 
                                </li>
                                <li >
                                    <a className="font-tommylight indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased hover:text-naranjahover"  href="https://www.linkedin.com/in/agustin-rojas-c4r4c01/" target="_blank">Linkedin</a>
                                </li>
                                <li >
                                    <a className="font-tommylight indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased hover:text-naranjahover" href="https://www.instagram.com/caracol.___/" target="_blank">Instagram</a>
                                </li>
                                <li >
                                    <a className="font-tommylight indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased hover:text-naranjahover" href="https://drive.google.com/file/d/1leg_c4dXK_TOjvJ2J35yD0Hf5FyeqX8f/view?usp=sharing" target="_blank">CV</a>
                                </li>
                            </ul> 
                        ) : (
                            <ul>
                                {
                                    list('')
                                }
                            </ul> 
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default SideMenu