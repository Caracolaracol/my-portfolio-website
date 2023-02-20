

import { useLoaderData, useParams } from 'react-router-dom'
import { PagesContainer } from '../components/PagesContainer'
import { getProjects } from '../services/services'
import PostProjectContainer from '../components/PostProjectContainer'

export async function postProjectsLoader() {
    const projects = await getProjects('PostProjects')
    return projects
}


function PostPage() {
    const params = useParams()
    const projects = useLoaderData()


    return (
        <PagesContainer>
            <PostProjectContainer location='/post-projects' projects={projects} paramsProject={params.webproject ? params.webproject : 'bichos'} />
        </PagesContainer>
    )
}

export default PostPage