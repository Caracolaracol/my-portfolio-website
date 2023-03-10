import { useEffect, useState, useContext, useRef } from "react"
import { Link, useLocation} from "react-router-dom"
import * as Tooltip from '@radix-ui/react-tooltip';

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom"
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";
import { GeneralContext } from "../context/general-context";
import { ShowProjects } from "./utils/ShowProjects";

function PostProject (props) {
    const scroll = useRef()
    const [dataProject, setDataProject] = useState({})
    const [nextData, setNextData] = useState({})
    const [prevData, setPrevData] = useState({})
    const [atEnd, setAtEnd] = useState(false)
    const [atStart, setAtStart] = useState(true)
    const [tech, setTech] = useState([])
    const [images, setImages] = useState([])
    const [description, setDescription] = useState('')
    const {language} = useContext(GeneralContext)

    const params = props.paramsProject
    const projects = props.projects

    useEffect(() => {
        console.log(scroll.current)
        scroll.current && scroll.current.scrollIntoView()
            window.scroll(0,0)
    },[dataProject])

    useEffect(()=> {
        const currentProject = ShowProjects(projects, params, setNextData, setPrevData, setAtEnd, setAtStart)
        setDataProject(currentProject)
        setImages(currentProject.images)
        setTech(currentProject.technologies)
        if (language == 'EN') {
            setDescription(currentProject.description)
        } else {
            setDescription(currentProject.descriptionES)
        }
},[params,dataProject,images,description, language])
      
    return (
        <div  key='top' ref={scroll}>
            <div className="showproject mb-4 tablet:mb-6">
                <div className="border-b-[1px] border-spacing-2 border-whitem border-opacity-20 mb-6 transicioncorta">
                    <h1 key={dataProject.name} className={`text-xl tablet:text-3xl laptop:text-4xl desktop:text-5xl leading-tight font-tommy min-h-max pl-2 pb-2 transicioncorta`}>{language == 'EN' ? dataProject.name : dataProject.nameES == undefined ? dataProject.name : dataProject.nameES}   </h1>
                </div>

                <div className="bg-[#000] rounded-tr-sm rounded-br-sm bg-opacity-20 p-1 tablet:p-4">
                    <div className="relative w-full h-0 pb-[62%] tablet:pb-[57.25%] transicioncorta ">
                        <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/${dataProject.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
                    </div>
                </div>
                
                
                <div className=' min-w-full h-6'>

                </div>
                <div className="flex justify-between flex-col bg-[#000] rounded-tr-sm rounded-br-sm bg-opacity-20 p-4">
                    <div key={dataProject.opinion} className="desktop:min-h-[5rem] transicioncorta">
                        <div className='text-[1rem] font-tommylight tracking-wide antialiased'>
                            <div className='text-[1rem] font-tommylight tracking-wide antialiased text-justify' dangerouslySetInnerHTML={{ __html: description }}></div>
                        </div>
                        <p>
                            {language == 'EN' ? dataProject.opinion : dataProject.opinionES}
                        </p>
                    </div>
                   
                    <div className="border-b-[1px] border-whitem border-opacity-20 mt-4 mb-4 desktop:mt-6 desktop:mb-6 w-[80%] flex mx-auto">

                    </div>
                    <div key={dataProject.name} className=' w-[100%] h-[100%] transicioncorta'>


                    </div>
                </div>
                
                <div className="tablet:flex tablet:justify-between bg-[#000] rounded-tr-sm rounded-br-sm bg-opacity-20 p-4">
                        <div>
                            <h2 className='font-chrono text-[1.7rem]'>
                                {props.lang == 'EN' ? 'Tools i used' : 'Herramientas utilizadas'}
                            </h2>
                            <div key={tech} className='flex flex-wrap gap-3 transicioncorta'>
                                {
                                    tech.map(s => (
                                        <div key={s.idtech}>
                                            <Tooltip.Provider delayDuration='80' skipDelayDuration='120'>
                                                <Tooltip.Root>
                                                    <Tooltip.Trigger asChild >
                                                        <img
                                                            key={s.idtech}
                                                            src={s.img}
                                                            width='40'
                                                            height='40'
                                                            rel="noreferrer noopener"
                                                            className="svg"


                                                        />
                                                    </Tooltip.Trigger>
                                                    <Tooltip.Portal>
                                                        <Tooltip.Content className="TooltipContent" sideOffset={5} aria-label={s.description} side="bottom" >
                                                            <div className="rounded-sm bg-whitem max-w-lg ">
                                                                <p className="text-purpuralh px-3 py-2">{s.description}</p>
                                                            </div>
                                                            <Tooltip.Arrow className="TooltipArrow" />
                                                        </Tooltip.Content>
                                                    </Tooltip.Portal>
                                                </Tooltip.Root>
                                            </Tooltip.Provider>
                                        </div>))
                                }
                            </div>
                        </div>
                        <div className="pt-[1.4rem]">


                        </div>
                    </div>
                
            </div>
            
            <div className='flex justify-end min-w-full gap-2'>
                <div className="w-36 tablet:w-44">
                    {atStart ? null : <Link to={`/post-projects/${prevData.id ? prevData.id : null}`}>
                        <button key={dataProject.name}  onClick={() => {
                            console.log(scroll.current)
                            scroll.current.scrollIntoView()
                            }}
                            className='tablet:w-44 p-2 w-36 h-12 tablet:h-12 font-tommyregular  tablet:text-xl bg-purpuraclaro rounded-sm hover:bg-purpuralh hover:text-texth'>
                            {language == 'EN' ? 'Previous project' : 'Ver anterior' }
                        </button>
                    </Link>
                    }
                </div>
                <div className="w-36 tablet:w-44">
                    {atEnd ? null : <Link to={`/post-projects/${nextData.id}`}>
                        <button key={dataProject.name}  onClick={() => {
                            console.log(scroll.current)
                            scroll.current.scrollIntoView()
                            }}
                        className='tablet:w-44 p-2 w-36 h-12 tablet:h-12 font-tommyregular  tablet:text-xl bg-purpuraclaro rounded-sm hover:bg-purpuralh hover:text-texth'>
                            {language == 'EN' ? 'Next project' : 'Ver siguiente' }
                        </button>
                    </Link>}
                </div>
            </div>
        </div>
    )
}

export default PostProject