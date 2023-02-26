import BlogEntry from "../BlogEntry"
import SideMenu from "../SideMenu"



function BlogContainer(props) {

    return(
        <div>
            <BlogEntry 
                projects={props.projects}
                paramsProject={props.paramsProject}
            />
            <SideMenu
                projects={props.projects}
                location={props.location}
            />
        </div>  
    )
}


export default BlogContainer