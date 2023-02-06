import fotoyo1 from '../assets/yo.jpg'
import fotoyo2 from '../assets/yo2.jpg'
function WelcomeSection(){
    return (
        <section className='flex flex-col h-screen justify-center'>
            <div className='self-center mb-16'>
                <div className='w-72 h-72 tablet:w-72 tablet:h-72 overflow-hidden flex '>
                    <div className='w-64 h-60 relative tablet:w-64 tablet:h-60 my-0 mx-auto overflow-hidden rounded-full items-baseline self-center'>
                        <img className='welcome-section__img1' src={fotoyo2} />
                        <img className='welcome-section__img2' src={fotoyo1} />
                    </div>
                </div>
                <div className='flex flex-col flex-nowrap justify-center text-center mb-9'>
                    <h1 className="overflow-hidden text-[1.2rem] font-bold font-tommy antialiased tracking-wide tablet:text-3xl laptop:text-5xl">Caracolaracol <em className='text-naranjahover font-tommy font-black text-2xl tablet:text-3xl laptop:text-5xl'>//</em> Creative Developer</h1>
                    <p className='text-sm'># Hi there! I'm Agustín Rojas, web developer, <a className='text-naranja' href="https://open.spotify.com/album/34djgWmJuu2dNanqrupzok" target="_blank">musician</a>, <a className='text-naranja' href="https://caracolaracolracolacolcololl.blogspot.com/" target="_blank">writer</a>, photographer and motion designer.</p>
                    <h2 className='text-sm font-bold subpixel-antialiased'>welcome to my site!</h2>
                </div>

                <div className='flex flex-row justify-center mb-4 gap-5 ml-3 mr-3'>
                    <button className='bg-purpural text-sm rounded-sm hover:bg-purpuralh hover:text-texth p-3 tablet:p-5'>
                        Web development projects
                    </button>
                    <button className='bg-purpural text-sm rounded-sm hover:bg-purpuralh hover:text-texth p-3 tablet:p-5'>
                        Post & Motion Graphics projects
                    </button>
                </div>
                <div  className='flex flex-col justify-center text-center'>
                    <div className='flex gap-4 '>
                        <a className='font-chrono text-xl tablet:text-2xl'  href="https://github.com/Caracolaracol" target="_blank" >Github</a>
                        <a className='font-chrono text-xl tablet:text-2xl' href="https://www.linkedin.com/in/agustin-rojas-c4r4c01/" target="_blank">Linkedin</a>
                        <a className='font-chrono text-xl tablet:text-2xl' href="https://www.instagram.com/caracol.___/" target="_blank">Instagram</a>
                        <a className='font-chrono text-xl tablet:text-2xl' href="#" target="_blank">CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection