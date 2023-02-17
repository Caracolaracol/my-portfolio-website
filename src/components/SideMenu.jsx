


function SideMenu() {
    return (
        <div className='hidden showindex laptop:block  w-40 h-[25rem] fixed top-40 left-0'>
            <div className="ml-2">
                <h2 className="font-chrono text-lg antialiased tracking-wider">Index of projects</h2>
                <div>
                    <ul>
                        <li className="font-tommylight indent-2">Obsidian</li>
                        <li className="font-tommylight indent-2">Ironplant.cl</li>
                        <li className="font-tommylight indent-2">My Portfolio</li>
                        <li className="font-tommylight indent-2">Language Spin</li>
                        <li className="font-tommylight indent-2">My first site</li>
                        <li className="font-tommylight indent-2">Pokemon Center</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideMenu