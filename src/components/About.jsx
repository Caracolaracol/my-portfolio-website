import fotoyo from '../assets/yo3.jpg'
import fotoyo2 from '../assets/yo4.jpg'

function About() {


    return (
        <div className="max-w-[45rem] showproject">
            <div className="mb-6">
                <div className="border-b-[1px] border-spacing-2 border-whitem border-opacity-20 mb-6 transicioncorta">
                    <h1 key='About Me' className={`text-xl tablet:text-3xl laptop:text-4xl desktop:text-5xl leading-tight font-tommy min-h-max pl-2 pb-2 transicioncorta`}>About  </h1>
                </div>
            </div>

            <div>
                <div className="text-left">
                    <img src={fotoyo2} className='w-[45vw] tablet:w-[20vw] laptop:w-[25vw]  h-auto float-right ml-3 desktop:mb-4 max-w-[290px] ' alt="el fotografo posando en un bosque de litres" />
                </div>
                <p className="text-justify font-tommylight tracking-wider subpixel-antialiased">Hi! I'm Agustín Rojas aka Caracol aka Caracolaracol. First of all, I want to thank you for visiting my site! Here you can see my work as a Web developer, but also, as an artist. This site is still under construction because there are a lot of things that I want to share and in time I'll update the code and of course, the content of the site.
                </p>
                <p className="text-justify font-tommylight tracking-wider subpixel-antialiased mb-7">Sometimes I'm a macrophotographer, macrophotography its a passion that puts you in touch with nature in a meditative state that through the lens you can experience. Patience its the key in this type of photography because your subject may it be a flying insect, or a very fast one, or even an agressive one, thats why it is always important to keep the distance and maintain deference of the creatures that lives in the nature.</p>
                <div className=" clear-both border-b-[1px] border-whitem border-opacity-20 mt-4 mb-4 desktop:mt-6 desktop:mb-6 w-[80%] flex mx-auto">

                </div>
                <img src={fotoyo} alt="el fotografo posando en un bosque de litres" />
                <div className=" font-tommylight tracking-wider subpixel-antialiased clear-both border-b-[1px] border-whitem border-opacity-20 mt-4 mb-4 desktop:mt-6 desktop:mb-6 w-[80%] flex mx-auto">

                </div>
                <p className="text-justify font-tommylight tracking-wider subpixel-antialiased">I invite you a navigate through this site and see all my works.Also if do you have an idea, a necessity, or need a Website, then feel free to contact me and we'll work together to become real that idea. Again, thank you for visiting my site, take care!</p>
            </div>
        </div>
    )
}

export default About