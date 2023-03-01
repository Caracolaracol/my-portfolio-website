import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { ScrollRestoration } from "react-router-dom"
import { useRef } from "react"
import { useContext, useEffect } from "react"
import { GeneralContext } from "../context/general-context"
const Root = () => {
    const scrollToRef = useRef();
    const { setScroll } = useContext(GeneralContext)


    useEffect(() => {
        setScroll(scrollToRef)
    },[])
    return (
        <div className='w-100 relative min-h-screen flex flex-col justify-between'>
            <ScrollRestoration />
            
            <div>
            <div ref={scrollToRef}>

            </div>
                <Header/>
                <Outlet/>
            </div>
            <Footer />
        </div>
    )
}

export default Root