import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from './NavBar.module.css'

function SideMenu(props) {
    const [placeData, setPlaceData] = useState('')
    const { pathname } = useLocation()
    const effect = `first:text-orangeclear`
    useEffect(() => {
        if (props.location == '/web-projects') {
            setPlaceData(props.projects)
        }
        if (props.location == '/post-projects') {
            setPlaceData(props.projects)
        }
        if(props.location == '/blog') {
            setPlaceData(props.projects)
        }
    },[])


    const list = (effect) => {

        return (
            placeData && placeData.map((element) => <NavLink to={`${props.location}/${element.id}`} key={element.id} className={({ isActive }) =>
                isActive ? `${classes.active}` : effect
            } ><li className=' font-tommylight indent-1 laptop:text-[13px] desktop:text-[15px] tracking-wide antialiased hover:text-naranjahover'>- {element.name}</li></NavLink>)
        )
    }

    return (
        <div className='hidden showindex laptop:block  w-48 h-[25rem] laptop:w-[19vw] desktop:w-[16vw] fixed top-40 left-0'>
            <div className="tablet:ml-2 laptop:ml-[1vw] desktop:ml-[1.2vw]">
                <h2 className="font-chrono text-xl antialiased tracking-wider">{props.location == '/post-projects' ? 'Index of videos' : props.location == '/web-projects' ? 'Index of projects' : ''}</h2>
                <div>
                    {
                        pathname == '/web-projects' || pathname == '/post-projects' || pathname == '/blog' ? (
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
                    
                </div>
            </div>
        </div>
    )
}

export default SideMenu