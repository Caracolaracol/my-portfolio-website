import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { ScrollRestoration } from "react-router-dom"

const Root = () => {




    return (
        <div className='w-100 relative min-h-screen flex flex-col justify-between' >
            <ScrollRestoration />
            
            <div>

                <Header/>
                <Outlet/>
            </div>
            <Footer />
        </div>
    )
}

export default Root