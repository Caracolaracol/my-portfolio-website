import logo1 from '../assets/logo1.png'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { useContext, useEffect } from 'react';
import { GeneralContext } from '../context/general-context';
import { useRef } from 'react';
function Header() {
    const scollToRef = useRef();
    const { setScroll } = useContext(GeneralContext)
    useEffect(() => {
        setScroll(scollToRef)
    },[])
    
    return(
        <div  className='fixed z-10 w-screen bg-[#0c0913]  '>
            <header className='flex flex-row justify-between items-center border-b-[1px] border-naranjaborder border-opacity-30 mx-2 tablet:mx-5 '>
                <div className='ml-2 tablet:ml-12'>
                    <Link to='/'>
                        <img ref={scollToRef} src={logo1} className='w-20 tablet:w-[7.5rem] transicion'/>
                    </Link>
                </div>
                
                <div className="hidden tablet:mr-12 tablet:block ">
                    <NavBar />
                </div>
                <div className='tablet:hidden'> 
                    burger menu
                </div>
            </header>
        </div>
    )
}

export default Header