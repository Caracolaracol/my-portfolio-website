import { NavLink } from "react-router-dom"
import classes from './NavBar.module.css'

function NavBar() {


    return (
        <nav className='transicion '>
            <ul className='flex space-evenly items-center flex-row tablet:gap-3 laptop:gap-6'>
                <li>
                    <NavLink
                        to='/web-projects'
                        className={({ isActive }) =>
                            isActive ? `tablet:text-xs laptop:text-lg self-center text-center font-tommyregular ${classes.active}` : `tablet:text-xs laptop:text-lg self-center text-center font-tommyregular`
                        }
                        >
                        Web development projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/post-projects'
                        className={({ isActive }) =>
                            isActive ? `tablet:text-xs laptop:text-lg self-center text-center font-tommyregular ${classes.active}` : `tablet:text-xs laptop:text-lg self-center text-center font-tommyregular`
                        }
                        >
                        Post & Motion Graphics
                    </NavLink>
                </li>
                <li >
                <NavLink to='/blog'
                        className={({ isActive }) =>
                            isActive ? `tablet:text-xs laptop:text-lg self-center text-center font-tommyregular ${classes.active}` : `tablet:text-xs laptop:text-lg self-center text-center font-tommyregular`
                        }
                        >
                        Blog
                    </NavLink>
                </li>
                <li>
                <NavLink to='/about'
                        className={({ isActive }) =>
                            isActive ? `tablet:text-xs laptop:text-lg self-center text-center font-tommyregular ${classes.active}` : `tablet:text-xs laptop:text-lg self-center text-center font-tommyregular`
                        }
                        >
                        About
                    </NavLink>
                </li>
                    
            </ul>
        </nav>
    )
}

export default NavBar