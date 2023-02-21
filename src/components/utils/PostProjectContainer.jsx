
import SideMenu from "../SideMenu"
import PostProject from '../PostProject'


function PostProjectContainer (props) {

    return (
        <div>
            <PostProject 
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

export default PostProjectContainer