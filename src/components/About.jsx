import { useContext, useEffect } from 'react'
import fotoyo from '../assets/yo3.jpg'
import fotoyo2 from '../assets/yo4.jpg'
import { GeneralContext } from '../context/general-context'
import { useState, useEffect } from 'react'

function About() {
    const { language } = useContext(GeneralContext)
    const [ lang, setlang] = useState('EN')

    useEffect(() => {
        setlang(language)
    }, [language])

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
                <p className="text-justify font-tommylight tracking-wider subpixel-antialiased">{lang == 'EN' ? "Hi! I'm Agustín Rojas aka Caracol aka Caracolaracol. First of all, I want to thank you for visiting my site! Here you can see my work as a Web developer, but also, as an artist. This site is still under construction because there are a lot of things that I want to share and in time I'll update the code and of course, the content of the site." : "Hola! Soy Agustìn Rojas, te agradezco por visitar mi sitio!, Aquí podras ver mi trabajo como desarrollador y como artista. Aún lo estoy construyendo porque hay muchas cossas que quiero compartir así que con el tiempo iré actualizando el código y el contenido del sitio."} 
                </p>
                <p className="text-justify font-tommylight tracking-wider subpixel-antialiased mb-7">{lang == 'EN' ? "Sometimes I'm a macrophotographer, macrophotography its a passion that puts you in touch with nature in a meditative state that through the lens you can experience. Patience its the key in this type of photography because your subject may it be a flying insect, or a very fast one, or even an agressive one, thats why it is always important to keep the distance and maintain deference of the creatures that lives in the nature." : "A veces hago fotografía macro, con ella me sitúo en contacto on la naturaleza a través de un estado meditativo que puedes experimentar a través del lente. La paciencia es la clave en este tipo de fotografía porque you sujeto a inmortalizar puede ser un insecto volador, tal vez uno muy rápido, o incluso un bicho agresivo, por eso siempre es importante mantener la distancia y el respeto a las criaturas que viven en la naturaleza."}</p>
                <div className=" clear-both border-b-[1px] border-whitem border-opacity-20 mt-4 mb-4 desktop:mt-6 desktop:mb-6 w-[80%] flex mx-auto">

                </div>
                <img src={fotoyo} alt="el fotografo posando en un bosque de litres" />
                <div className=" font-tommylight tracking-wider subpixel-antialiased clear-both border-b-[1px] border-whitem border-opacity-20 mt-4 mb-4 desktop:mt-6 desktop:mb-6 w-[80%] flex mx-auto">

                </div>
                <p className="text-justify font-tommylight tracking-wider subpixel-antialiased">{lang == 'EN' ? "I invite you a navigate through this site and see all my works.Also if do you have an idea, a necessity, or need a Website, then feel free to contact me and we'll work together to become real that idea. Again, thank you for visiting my site, take care!" : "Te invito a navegar por este sitio y ver mis trabajos. Si tienes una idea, una necesidad, o necesitas un sitio web, siéntete libre en contactarme y trabajaremos juntxs para volver real esa idea. Nuevamente gracias por visitar mi sitio, cuidate!"}</p>
            </div>
        </div>
    )
}

export default About