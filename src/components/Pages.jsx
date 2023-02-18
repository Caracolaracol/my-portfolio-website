import SideMenu from "./SideMenu"
import { useEffect } from "react"
import { useContext } from "react"
import { GeneralContext } from "../context/general-context"

export const PagesContainer = ({ children }) => {
    const { setPlace } = useContext(GeneralContext)

    useEffect(() => {
        if (children.type.name == 'PostProject') {
            setPlace('PostProjectsSection')
        }
        if (children.type.name == 'WebProject') {
            setPlace('WebProjectsSection')
        }
    },[])

    return (

            <div className="pb-[7rem]">
                <div className='top-0 h-32'>
                </div>
                <div className='ml-14 tablet:ml-[15%] laptop:ml-[18%] desktop:ml-[16%] mr-11 tablet:mr-[7%]'>
                    <div className="tablet:w-[45vw] tablet:min-w-[28rem] max-w-[45rem]">
                        {children}
                    </div>
                    <SideMenu somedata={children} />
                </div>
                
            </div>

    )
}