import { useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BlogContainer, PagesContainer } from "../components/utils/Containers";
import { GeneralContext } from "../context/general-context";
import { getProjects } from "../services/services";



export async function entriesLoader() {
    const projects = await getProjects('Entries')
    return projects
}

function BlogPage(){
    const { setProjectsContext, setParamsContext,setLocationSection} = useContext(GeneralContext)
    const params = useParams()
    const projects = useLoaderData()

    useEffect(() => {
        const setting = () => {
            setParamsContext(params.blogentry ? params.blogentry : 'caida')
            setProjectsContext(projects)
            setLocationSection('/blog')
        }
        setting()
    },[params, projects])
   



    return(
        <PagesContainer>
            <BlogContainer location='/blog' projects={projects} paramsProject={params.blogentry ? params.blogentry : 'caida'} />
        </PagesContainer>
    )
}

export default BlogPage