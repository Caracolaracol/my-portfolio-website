import { useContext, useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

import { getProjects } from '../services/services'
import { GeneralContext } from "../context/general-context";
import { PagesContainer, WebProjectContainer } from '../components/utils/Containers'

export async function webProjectsLoader() {
    const projects = await getProjects('WebProjects')
    return projects
}

function WebPage() {
    const { setProjectsContext, setParamsContext, setLocationSection} = useContext(GeneralContext)
    const params = useParams()
    const projects = useLoaderData()

    useEffect(() => {
        const setting = () => {
            setParamsContext(params.webproject ? params.webproject : 'obsidian')
            setProjectsContext(projects)
            setLocationSection('/web-projects')
        }
        setting()
    },[projects,params])
    


    return (
        <PagesContainer>
            <WebProjectContainer location='/web-projects' projects={projects} paramsProject={params.webproject ? params.webproject : 'obsidian'} />
        </PagesContainer>
    )
}

export default WebPage



