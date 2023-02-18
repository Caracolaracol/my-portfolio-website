import { useParams } from "react-router-dom"
import { getSingleWebProject } from "../services/services"
import { useState, useEffect, useContext } from "react"
import WebProjectContent from "./WebProjectContent"
import { GeneralContext } from "../context/general-context"


function WebProject () {
    const {place} = useContext(GeneralContext)
    const [dataProject, setDataProject] = useState({})
    const params = useParams()

    useEffect(()=> {
        const fetchData = async () => {
            const data = await getSingleWebProject(params.webproject)
            setDataProject(data)
            console.log(dataProject)
        }
        fetchData()
    },[place,params])
 
    return (

        <div className='mainpage projectshow'>
            <WebProjectContent 
                id={dataProject.id}
                name={dataProject.name}
                description={dataProject.description}
                opinion={dataProject.opinion}
                technologies={dataProject.technologies}
            />
        </div>
    )
}

export default WebProject