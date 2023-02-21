
import { useLoaderData, useParams } from 'react-router-dom'
import { PagesContainer } from '../components/utils/PagesContainer'
import { getProjects } from '../services/services'
import PostProjectContainer from '../components/utils/PostProjectContainer'

export async function postProjectsLoader() {
    const projects = await getProjects('PostProjects')
    return projects
}

function PostPage() {
    const params = useParams()
    const projects = useLoaderData()

    return (
        <PagesContainer>
            <PostProjectContainer location='/post-projects' projects={projects} paramsProject={params.postproject ? params.postproject : 'bichos'} />
        </PagesContainer>
    )
}

export default PostPage