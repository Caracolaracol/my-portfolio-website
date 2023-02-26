import { useLoaderData, useParams } from "react-router-dom";
import BlogContainer from "../components/utils/BlogContainer";
import { PagesContainer } from "../components/utils/PagesContainer";
import { getProjects } from "../services/services";

export async function entriesLoader() {
    const projects = await getProjects('Entries')
    return projects
}

function BlogPage(){
    const params = useParams()
    const projects = useLoaderData()

    return(
        <PagesContainer>
            <BlogContainer location='/blog' projects={projects} paramsProject={params.blogentry ? params.blogentry : 'caida'} />
        </PagesContainer>
    )
}

export default BlogPage