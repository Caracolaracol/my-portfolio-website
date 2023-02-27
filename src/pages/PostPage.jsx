import { useContext, useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { PagesContainer } from '../components/utils/PagesContainer'
import { getProjects } from '../services/services'
import PostProjectContainer from '../components/utils/PostProjectContainer'
import { GeneralContext } from '../context/general-context'
export async function postProjectsLoader() {
    const projects = await getProjects('PostProjects')
    return projects
}

function PostPage() {

    const { setProjectsContext, setParamsContext, setLocationSection} = useContext(GeneralContext)
    const params = useParams()
    const projects = useLoaderData()

    useEffect(() => {
        const setting = () => {
            setParamsContext(params.postproject ? params.postproject : 'bichos')
            setProjectsContext(projects)
            setLocationSection('/post-projects')
        }
        setting()
    },[params, projects])

    return (
        <PagesContainer>
            <PostProjectContainer location='/post-projects' projects={projects} paramsProject={params.postproject ? params.postproject : 'bichos'} />
        </PagesContainer>
    )
}

export default PostPage