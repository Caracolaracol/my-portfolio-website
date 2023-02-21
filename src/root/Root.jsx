import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Root = () => {

    return (
        <div className='w-100 relative min-h-screen flex flex-col justify-between'>
            <div>
                <Header/>
                <Outlet/>
            </div>
            <Footer />
        </div>
    )
}

export default Root