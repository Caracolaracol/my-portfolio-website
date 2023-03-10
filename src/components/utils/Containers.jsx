import SideMenu from "../SideMenu"
import WebProject from "../WebProject"
import PostProject from "../PostProject"
import BlogEntry from "../BlogEntry"
import About from "../About"

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

export const AboutContainer =  (props)  => {

    return(
        <div>
            <About/>
            <SideMenu location={props.location}/>
        </div>
    )
}

export const PagesContainer = ({ children }) => {

    return (
            <div className="pb-[7rem]">
                <div className='top-0 h-20 tablet:h-[6.8rem]'>
                </div>
                <div className='ml-[4%]  tablet:ml-[11%] laptop:ml-[23vw] desktop:ml-[20rem]  mr-[4%] tablet:mr-[7%]'>
                    <div className="tablet:w-[45vw] laptop:w-[41vw] tablet:min-w-[90%] laptop:min-w-[44rem] desktop:min-w-[50rem] max-w-[60rem]">
                        {children}
                    </div>
                </div>
            </div>

    )
}