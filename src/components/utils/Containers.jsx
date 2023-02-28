import SideMenu from "../SideMenu"
import WebProject from "../WebProject"
import PostProject from "../PostProject"
import BlogEntry from "../BlogEntry"

export const  WebProjectContainer = (props) => {

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


export const PostProjectContainer =  (props) => {

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

export const BlogContainer = (props) => {

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

export const AboutContainer =  ()  => {

    return(
        <div>

        </div>
    )
}

export const PagesContainer = ({ children }) => {

    return (
            <div className="pb-[7rem]">
                <div className='top-0 h-20 tablet:h-[6.8rem]'>
                </div>
                <div className='ml-[6%]  tablet:ml-[11%] laptop:ml-[19vw] desktop:ml-[17vw] mr-[6%] tablet:mr-[7%]'>
                    <div className="tablet:w-[45vw] laptop:w-[41vw] tablet:min-w-[90%] laptop:min-w-[32rem] max-w-[60rem]">
                        {children}
                    </div>
                </div>
            </div>

    )
}