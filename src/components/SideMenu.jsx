import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function SideMenu(props) {
    const [placeData, setPlaceData] = useState('')

    useEffect(() => {
        if (props.location == '/web-projects') {
            setPlaceData(props.projects)
        }
        if (props.location == '/post-projects') {
            setPlaceData(props.projects)
        }
    },[])

    return (
        <div className='hidden showindex laptop:block  w-40 h-[25rem] fixed top-40 left-0'>
            <div className="ml-2">
                <h2 className="font-chrono text-lg antialiased tracking-wider">{props.location == '/post-projects' ? 'Index of videos' : props.location == '/web-projects' ? 'Index of projects' : ''}</h2>
                <div>
                    <ul> 
                        { 
                           placeData && placeData.map((element) => <NavLink to={`${props.location}/${element.id}`}  key={element.id} ><li className="font-tommylight indent-2">{element.name}</li></NavLink>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideMenu