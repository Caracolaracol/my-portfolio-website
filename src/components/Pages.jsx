

export const PagesContainer = ({ children }) => {
    return (

            <div className="pb-[7rem]">
                <div className='top-0 h-40'>
                </div>
                <div className='ml-14 tablet:ml-[20%] laptop:ml-[18%] desktop:ml-[16%] mr-11 tablet:mr-[7%]'>
                    <div>
                        {children}
                    </div>
                </div>
            </div>

    )
}