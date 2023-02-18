import { getProjects } from "../services/services";
import { useState, useContext } from "react";
import { GeneralContext } from "../context/general-context"
import { NavLink } from "react-router-dom";


function SideMenu() {
    const { place } = useContext(GeneralContext)
    const [placeData, setPlaceData] = useState('')
    let nameUrl

    
    if(place == 'PostProjectsSection') {
        const getData = async () => {
          let project = await getProjects(place);
          setPlaceData(project)
        };
        getData()
        nameUrl = 'post-projects'
    }

    if(place == 'WebProjectsSection') {
        const getData = async () => {
          let project = await getProjects(place);
          setPlaceData(project)
        };
        getData()
        nameUrl = 'web-projects'
    }

    return (
        <div className='hidden showindex laptop:block  w-40 h-[25rem] fixed top-40 left-0'>
            <div className="ml-2">
                <h2 className="font-chrono text-lg antialiased tracking-wider">{place == 'PostProjectsSection' ? 'Index of videos' : place == 'WebProjectsSection' ? 'Index of projects' : ''}</h2>
                <div>
                    <ul> 
                        { 
                           placeData && placeData.map((element) => <NavLink to={`/${nameUrl}/${element.id}`}  key={element.id} ><li className="font-tommylight indent-2">{element.name}</li></NavLink>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideMenu