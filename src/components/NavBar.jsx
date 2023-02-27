import { NavLink } from "react-router-dom"
import classes from './NavBar.module.css'

function NavBar() {
    const navNames = [
        {
            name: "Web development projects",
            direccion: "/web-projects"
        },
        {
            name: "Post & Motion Graphics",
            direccion: '/post-projects'
        },
        {
            name: "Blog",
            direccion: '/blog'
        },
        {
            name: "About",
            direccion: '/about'
        },
    ]
    const styles = 'tablet:text-xs laptop:text-lg self-center text-center font-tommyregular'
    
    return (
        <nav className='transicion '>
            <ul className='flex space-evenly items-center flex-row tablet:gap-3 laptop:gap-6'>
                {
                    navNames.map(s => (
                        <li>
                            <NavLink
                                key={s.name}
                                to={s.direccion}
                                className={({ isActive }) =>
                                    isActive ? `${styles} ${classes.active}` : `${styles}`
                                }
                            >
                                {s.name}
                            </NavLink>
                        </li>
                    ))
                }  
            </ul>
        </nav>
    )
}

export default NavBar