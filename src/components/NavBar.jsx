import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { GeneralContext } from "../context/general-context"
import classes from './NavBar.module.css'

function NavBar() {
    const {language} = useContext(GeneralContext)

    const navNames = [
        {
            name: "Web development projects",
            nameES: "Proyectos de desarrollo Web",
            direccion: "/web-projects"
        },
        {
            name: "Post & Motion Graphics",
            nameES: "Post & Motion Graphics",
            direccion: '/post-projects'
        },
        {
            name: "Blog",
            nameES: "Blog",
            direccion: '/blog'
        },
        {
            name: "About",
            nameES: "Acerca de",
            direccion: '/about'
        },
    ]
    const styles = 'tablet:text-xs laptop:text-lg self-center text-center font-tommyregular'
    
    return (
        <nav className='transicion '>
            <ul className='flex space-evenly items-center flex-row tablet:gap-3 laptop:gap-6'>
                {
                    navNames.map(s => (
                        <li key={s.name}>
                            <NavLink
                                
                                to={s.direccion}
                                className={({ isActive }) =>
                                    isActive ? `${styles} ${classes.active}` : `${styles}`
                                }
                            >
                                {language == 'EN' ? s.name : s.nameES}
                            </NavLink>
                        </li>
                    ))
                }  
            </ul>
        </nav>
    )
}

export default NavBar