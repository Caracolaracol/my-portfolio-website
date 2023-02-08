import { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { GeneralContext } from "../context/general-context"
const Root = () => {

    //useEffect(()=> {
    //    localStorage.setItem('entered', JSON.stringify(false));
    //},[])
    
    return (
        <div className='bg-negro h-screen w-screen'>
            <nav>
            </nav>
            <div>
                <Outlet />
            </div>
            <div>
            </div>
        </div>
    )
}

export default Root