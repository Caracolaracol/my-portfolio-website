import fotoyo1 from '../assets/yo.jpg'
import fotoyo2 from '../assets/yo2.jpg'
import { Link} from 'react-router-dom'
import { useContext } from 'react'
import { GeneralContext } from '../context/general-context'

function WelcomeSection(){
    const { setPlace } = useContext(GeneralContext)
    const placing = (section) => {
        setPlace(section)
    }

    return (
        <div className='bg-negro h-fit w-100'>
            <section className='flex flex-col h-screen justify-center'>
                <div className='self-center mb-40 tablet:mb-16 overflow-hidden'>
                    <div className='w-64 h-64 mx-auto tablet:w-72 tablet:h-72 overflow-hidden flex justify-center text-center'>
                        <div className='w-52 h-48 relative tablet:w-64 tablet:h-60 my-0 mx-auto overflow-hidden rounded-full items-baseline self-center'>
                            <img className='welcome-section__img1' src={fotoyo2} />
                            <img className='welcome-section__img2' src={fotoyo1} />
                        </div>
                    </div>
                    <div className='flex flex-col justify-evenly flex-nowrap text-center mb-6 tablet:mb-2 overflow-hidden px-2'>
                        <h1 className="overflow-hidden text-[2.4rem] font-bold font-tommy antialiased tablet:tracking-wide tablet:text-4xl laptop:text-6xl desktop:text-7xl laptop:tracking-normal">Caracolaracol <em className='text-naranjahover font-tommy font-black text-4xl tablet:text-3xl laptop:text-7xl'>//</em> Creative Developer</h1>
                        <p className='text-sm font-tommyregular tablet:text-lg tablet:tracking-wide'># Hi there! I'm Agustín Rojas, i'm a web developer, <a className='text-naranja' href="https://open.spotify.com/album/34djgWmJuu2dNanqrupzok" target="_blank">musician</a>, <a className='text-naranja' href="https://caracolaracolracolacolcololl.blogspot.com/" target="_blank">writer</a>, photographer and motion designer based on Chile.</p>
                        <h2 className='text-2xl font-chrono antialiased tablet:text-3xl laptop:text-4xl laptop:tracking-wide'>Welcome to my site!</h2>
                    </div>
                    <div  className='flex flex-row justify-center mb-4 gap-5 ml-3 mr-3'>
                        <Link to='web-projects' >
                            <button onClick={() => placing('WebProjectsSection')} className='font-tommyregular tablet:text-xl bg-purpural rounded-sm hover:bg-purpuralh hover:text-texth p-2 tablet:p-4 laptop:p-5'>
                                Web development projects
                            </button>
                        </Link>
                        <Link to='/post-projects'>
                            <button onClick={() => placing('PostProjectsSection')} className='font-tommyregular tablet:text-xl bg-purpural rounded-sm hover:bg-purpuralh hover:text-texth p-2 tablet:p-4 laptop:p-5'>
                                Post & Motion Graphics projects
                            </button>
                        </Link>
                    </div>
                    <div className='flex flex-col justify-center text-center'>
                        <div className='flex gap-4 shrink self-center'>
                            <a className='font-chrono text-xl tablet:text-2xl laptop:text-3xl' href="https://github.com/Caracolaracol" target="_blank" >Github</a>
                            <a className='font-chrono text-xl tablet:text-2xl laptop:text-3xl' href="https://www.linkedin.com/in/agustin-rojas-c4r4c01/" target="_blank">Linkedin</a>
                            <a className='font-chrono text-xl tablet:text-2xl laptop:text-3xl' href="https://www.instagram.com/caracol.___/" target="_blank">Instagram</a>
                            <a className='font-chrono text-xl tablet:text-2xl laptop:text-3xl' href="https://drive.google.com/file/d/1leg_c4dXK_TOjvJ2J35yD0Hf5FyeqX8f/view?usp=sharing" target="_blank">CV</a>
                        </div>
                    </div>
                </div>
                <div className='tablet:h-20 tablet:w-20'>

                </div>
            </section>
        </div>
    )
}

export default WelcomeSection