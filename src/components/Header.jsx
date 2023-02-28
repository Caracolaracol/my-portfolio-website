
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState, useRef } from 'react';

import { GeneralContext } from '../context/general-context';
import NavBar from './NavBar'



import logo1 from '../assets/logo1.png'

import '../index.css'
import MenuNav from './MenuNav';
import SideMenuNav from './SideMenuNav';

function Header() {
    const scollToRef = useRef();
    const { setScroll } = useContext(GeneralContext)


    useEffect(() => {
        setScroll(scollToRef)
    },[])
    
    return (
        <div id='header' className='fixed z-10 w-screen bg-[#0c0913]  '>
            <header className='flex flex-row justify-between items-center border-b-[1px] border-naranjaborder border-opacity-30 mx-2 tablet:mx-5 '>
                <div className='ml-2 tablet:ml-12'>
                    <Link to='/'>
                        <img ref={scollToRef} src={logo1} className='w-20 tablet:w-[7.5rem] transicion' />
                    </Link>
                </div>

                <div className="hidden tablet:mr-12 laptop:block ">
                    <NavBar />
                </div>
                <div className='laptop:hidden flex'>
                    {/* <div className='laptop:hidden mr-4 flex justify-center items-center'>
                        <SideMenuNav />
                    </div> */}
                    <div key='menunav' className='laptop:hidden mr-2  transicioncorta'>
                        <MenuNav/>
                    </div>
                    
                </div>


            </header>
        </div>
    )
}

export default Header