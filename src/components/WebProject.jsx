import { useEffect, useState, useContext, Fragment, createElement } from "react"
import { Link, useLocation} from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import * as Tooltip from '@radix-ui/react-tooltip';

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom"
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";
import { Pagination, Navigation, Zoom } from "swiper";
import { GeneralContext } from "../context/general-context";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";


function WebProject (props) {
    
    const { pathname } = useLocation()
    const [dataProject, setDataProject] = useState({})
    const [nextData, setNextData] = useState({})
    const [prevData, setPrevData] = useState({})
    const [atEnd, setAtEnd] = useState(false)
    const [atStart, setAtStart] = useState(true)
    const [images, setImages] = useState([])
    const [tech, setTech] = useState([])
    const [description, setDescription] = useState('')
    const { scroll } = useContext(GeneralContext)
    const [content, setContent] = useState(Fragment)


    const params = props.paramsProject
    const projects = props.projects

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, [pathname]);
    
 
    useEffect(()=> {
        const currentProject = projects.find((el)=>el.id === params)
        const indexCurr = projects.indexOf(currentProject)
        const nextProject = projects[indexCurr+1]
        const prevProject = projects[indexCurr-1]
        setPrevData(prevProject)
        const lastArrayIndex = projects.length - 1
        if(indexCurr - 1 < 0) {
            setAtStart(true)
        } else {
            setAtStart(false)
        }
        if (indexCurr == lastArrayIndex){
            setAtEnd(true)
        } else {
            if( prevProject == undefined ) {
            } else {
                setPrevData(prevProject)
            }
            setNextData(nextProject)
            setAtEnd(false)
        }
        setDataProject(currentProject)
        setImages(currentProject.images)
        setTech(currentProject.technologies)
        setDescription(currentProject.description)
        unified()
            .use(rehypeParse,{fragment:true})
            .use(rehypeReact, {createElement, Fragment})
            .process(`${description.replace(/["]+/g, '')}`)
            .then((file) => {
            setContent(file.result)
            })    
    },[params,dataProject,images,tech,description])


    return (
        <div>
            <div className="showproject">
                <div className="border-b-[1px] border-spacing-2 border-whitem border-opacity-20 mb-6 transicioncorta">
                    <h1 key={dataProject.name} className={`text-xl tablet:text-3xl laptop:text-4xl desktop:text-5xl leading-tight font-tommy min-h-max pl-2 pb-2 transicioncorta`}>{dataProject.name}   </h1>
                </div>


                <div key={dataProject.name} className=' w-[100%] h-[100%] border-[1px] border-spacing-2 border-whitem border-opacity-10 transicioncorta'>
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        zoom={true}
                        modules={[Pagination, Navigation, Zoom]}
                        className="mySwiper bg-negro"
                    >
                        {
                            dataProject != undefined ? (images.map((s) => <SwiperSlide data-hash={(s)} key={s} zoom='true'><img src={s} width="1280" height="720" /></SwiperSlide>)) : null
                        }

                    </Swiper>

                </div>
                <div className=' min-w-full h-6'>

                </div>
                <div className="flex justify-between flex-col   tablet:h-[14rem] desktop:h-[12rem]">
                    <div key={dataProject.opinion} className="desktop:min-h-[9rem] transicioncorta flex flex-col justify-between">
                        <div className='text-[1rem] font-tommylight tracking-wide antialiased text-justify' >{content}</div>
                        <p className='text-[1rem] font-tommyregular tracking-wide antialiased italic'>
                            {dataProject.opinion}
                        </p>
                    </div>

                    <div className="border-b-[1px] border-whitem border-opacity-20 mt-4 mb-4 desktop:mt-6 desktop:mb-6 w-[80%] flex mx-auto">

                    </div>
                    <div className="tablet:flex tablet:justify-between ">
                        <div>
                            <h2 className='font-chrono text-[1.7rem]'>
                                Technologies i used
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
                            <div className="flex justify-end">
                                <a className='font-tommyregular text-[1.2rem] text-naranja hover:text-naranjahover' href={dataProject.github} target='_blank' >
                                    Github Repository
                                </a>
                            </div>
                            {dataProject.link ? <div className="flex justify-end">
                                <a className='font-tommyregular text-[1.2rem] text-naranja hover:text-naranjahover' href={dataProject.link} target='_blank' >
                                    Go to the site
                                </a>
                            </div> : null}

                        </div>
                    </div>
                    

                </div>
                <div className=' min-w-full tablet:h-[5rem] laptop:h-[6rem]'>

                </div>

            </div>
            <div className='flex justify-end min-w-full gap-2'>
                <div className="w-36 tablet:w-44">
                    {atStart ? null : <Link to={`/web-projects/${prevData.id ? prevData.id : null}`}>
                        <button key={dataProject.name} onClick={() => scroll.current.scrollIntoView()}
                            className='tablet:w-44 p-2 w-36 h-12 tablet:h-12 font-tommyregular  tablet:text-xl bg-purpuraclaro rounded-sm hover:bg-purpuralh hover:text-texth'>
                            Previous project
                        </button>
                    </Link>
                    }
                </div>
                <div className="w-36 tablet:w-44">
                    {atEnd ? null : <Link to={`/web-projects/${nextData.id}`}>
                        <button key={dataProject.name} onClick={() => scroll.current.scrollIntoView()} 
                        className='tablet:w-44 p-2 w-36 h-12 tablet:h-12 font-tommyregular  tablet:text-xl bg-purpuraclaro rounded-sm hover:bg-purpuralh hover:text-texth'>
                            Next project
                        </button>
                    </Link>}
                </div>
            </div>
        </div>

    )
}

export default WebProject