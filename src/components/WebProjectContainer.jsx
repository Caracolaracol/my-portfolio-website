
import SideMenu from "./SideMenu"
import WebProject from "./WebProject"


function WebProjectContainer (props) {

    return (
        <div>
            <WebProject 
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

export default WebProjectContainer