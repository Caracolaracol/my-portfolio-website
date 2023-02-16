import logo1 from '../assets/logo1.png'
import { Link, NavLink } from 'react-router-dom'
import classes from './Header.module.css'

function Header() {

    return(
        <div className='fixed z-10 w-screen bg-negro'>
            <header className='flex flex-row justify-between items-center border-b-[1px] border-naranjaborder mx-5'>
                <div className='ml-2 tablet:ml-12'>
                    <Link to='/'>
                        <img src={logo1} className='w-20 tablet:w-32 mainpage'/>
                    </Link>
                </div>
                
                <div className="hidden tablet:mr-12 tablet:block">
                    <nav className='mainpage'>
                        <ul className='flex space-evenly items-center flex-row gap-1 tablet:gap-6'>
                            <li className='self-center text-xs text-center font-tommyregular tablet:text-lg'>
                                <NavLink 
                                    to='/web-projects'
                                    className={({isActive}) =>
                                    isActive ? classes.active : ""
                                    }    
                                end>
                                   Web development projects
                                </NavLink>
                            </li>
                            <li className='self-center text-xs text-center font-tommyregular tablet:text-lg'>
                                <NavLink to='/post-projects'
                                className={({isActive}) =>
                                isActive ? classes.active : ""
                                }    
                            end>
                                Post & Motion Graphics
                                </NavLink>
                            </li>
                            <li className='self-center text-xs text-center font-tommyregular tablet:text-lg'>
                                Blog
                            </li>
                            <li className='self-center text-xs text-center font-tommyregular tablet:text-lg'>
                                Store
                            </li>
                            <li className='self-center text-xs text-center font-tommyregular tablet:text-lg'>
                                Contact
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header