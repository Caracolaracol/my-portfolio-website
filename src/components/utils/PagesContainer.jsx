
export const PagesContainer = ({ children }) => {

    return (
            <div className="pb-[7rem]">
                <div className='top-0 h-32'>
                </div>
                <div className='ml-[6%]  tablet:ml-[11%] laptop:ml-[18%] desktop:ml-[16%] mr-[6%] tablet:mr-[7%]'>
                    <div className="tablet:w-[45vw] laptop:w-[49vw] tablet:min-w-[32rem] max-w-[65rem]">
                        {children}
                    </div>
                </div>
            </div>

    )
}