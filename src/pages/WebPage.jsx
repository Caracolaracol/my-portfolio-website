
import { useLoaderData, useParams } from 'react-router-dom'
import { PagesContainer } from '../components/PagesContainer'
import WebProjectContainer from '../components/WebProjectContainer'
import { getProjects } from '../services/services'

export async function webProjectsLoader() {
    const projects = await getProjects('WebProjects')
    return projects
}


function WebPage() {
    const params = useParams()
    const projects = useLoaderData()


    return (
        <PagesContainer>
            <WebProjectContainer location='/web-projects' projects={projects} paramsProject={params.webproject ? params.webproject : 'obsidian'} />
        </PagesContainer>
    )
}

export default WebPage