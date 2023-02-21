import { NavLink } from "react-router-dom"
import classes from './NavBar.module.css'

function NavBar() {


    return (
        <nav className='transicion'>
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
                <NavLink to='/blog'
                        className={({ isActive }) =>
                            isActive ? classes.active : ""
                        }
                        end>
                        Blog
                    </NavLink>
                    <NavLink to='/about'
                        className={({ isActive }) =>
                            isActive ? classes.active : ""
                        }
                        end>
                        About
                    </NavLink>
            </ul>
        </nav>
    )
}

export default NavBar