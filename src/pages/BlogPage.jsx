import { useLoaderData, useParams } from "react-router-dom";
import BlogContainer from "../components/utils/BlogContainer";
import { PagesContainer } from "../components/utils/PagesContainer";
import { GeneralContext } from "../context/general-context";
import { getProjects } from "../services/services";
import { useContext, useEffect } from "react";
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