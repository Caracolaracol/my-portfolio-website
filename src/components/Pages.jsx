

export const PagesContainer = ({ children }) => {
    return (

            <div className="pb-[7rem]">
                <div className='top-0 h-32'>
                </div>
                <div className='ml-14 tablet:ml-[15%] laptop:ml-[18%] desktop:ml-[16%] mr-11 tablet:mr-[7%]'>
                    <div className="tablet:w-[45vw] tablet:min-w-[28rem] max-w-[45rem]">
                        {children}
                    </div>
                    <div className='hidden mainpage laptop:block  w-40 h-[25rem] fixed top-40 left-0'>
                        <div className="ml-2">
                            <h2 className="font-chrono text-lg antialiased tracking-wider">Index of projects</h2>
                            <div>
                                <ul>
                                    <li className="font-tommylight indent-2">Obsidian</li>
                                    <li className="font-tommylight indent-2">My Portfolio</li>
                                    <li className="font-tommylight indent-2">Ironplant.cl</li>
                                    <li className="font-tommylight indent-2">Language Spin</li>
                                    <li className="font-tommylight indent-2">My first site</li>
                                    <li className="font-tommylight indent-2">Pokemon Center</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>

    )
}