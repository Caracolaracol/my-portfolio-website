import { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GeneralContext } from "../context/general-context";
import classes from './NavBar.module.css'

function SideMenu(props) {
    const [placeData, setPlaceData] = useState('')
    const [indexVideos, setIndexVideos] = useState('')
    const [indexWeb, setIndexWeb] = useState('')
    const { language } = useContext(GeneralContext)
    const { pathname } = useLocation()
    const effect = `first:text-orangeclear`

    
    useEffect(() => {
        setPlaceData(props.projects)
        if (language == 'EN') {
            setIndexVideos('Index of Videos')
            setIndexWeb('Index of Projects')
        } else if (language == 'ES')  {
            setIndexVideos('Indice de Videos')
            setIndexWeb('Proyectos web')
        }
    },[language])


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
        <div className='hidden showindex laptop:block  w-48 h-[24.8rem] laptop:w-[22vw] desktop:w-[19rem] fixed laptop:top-[11.4rem] desktop:top-[11.9rem] left-0'>
            <div className="pl-4 pb-4 bg-[#000] rounded-tr-sm rounded-br-sm bg-opacity-30">
                <h2 className="font-chrono text-xl antialiased tracking-wider">{props.location == '/post-projects' ? indexVideos : props.location == '/web-projects' ? indexWeb : props.location == '/blog' ? 'Blog Entries' : props.location == '/about' ? 'Links' : ''}</h2>
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