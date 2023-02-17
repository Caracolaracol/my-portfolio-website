import { NavLink } from "react-router-dom"
import classes from './Header.module.css'

function NavBar() {


    return (
        <nav className='mainpage'>
            <ul className='flex space-evenly items-center flex-row gap-1 tablet:gap-6'>
                <li className='self-center text-xs text-center font-tommyregular tablet:text-lg'>
                    <NavLink
                        to='/web-projects'
                        className={({ isActive }) =>
                            isActive ? classes.active : ""
                        }
                        end>
                        Web development projects
                    </NavLink>
                </li>
                <li className='self-center text-xs text-center font-tommyregular tablet:text-lg'>
                    <NavLink to='/post-projects'
                        className={({ isActive }) =>
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
                    Contact
                </li>
            </ul>
        </nav>
    )
}

export default NavBar