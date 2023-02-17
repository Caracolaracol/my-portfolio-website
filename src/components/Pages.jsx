import SideMenu from "./SideMenu"


export const PagesContainer = ({ children }) => {
    return (

            <div className="pb-[7rem]">
                <div className='top-0 h-32'>
                </div>
                <div className='ml-14 tablet:ml-[15%] laptop:ml-[18%] desktop:ml-[16%] mr-11 tablet:mr-[7%]'>
                    <div className="tablet:w-[45vw] tablet:min-w-[28rem] max-w-[45rem]">
                        {children}
                    </div>
                    <SideMenu />
                </div>
                
            </div>

    )
}