
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