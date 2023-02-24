import { useEffect, useState } from "react"
import { Link} from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";

import * as Tooltip from '@radix-ui/react-tooltip';

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom"
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";
import { Pagination, Navigation, HashNavigation, EffectFade, Zoom } from "swiper";


function WebProject (props) {
    
    const [dataProject, setDataProject] = useState({})
    const [nextData, setNextData] = useState({})
    const [prevData, setPrevData] = useState({})
    const [atEnd, setAtEnd] = useState(false)
    const [atStart, setAtStart] = useState(true)
    const [images, setImages] = useState([])
    const [tech, setTech] = useState([])
    const [asd, setAsd] = useState('')
  


    const params = props.paramsProject
    const projects = props.projects

    

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
            setAsd(currentProject.description)
        
        
    },[params,dataProject,images,tech,asd])

    return (
        <div>
            <div className="showproject">
                <div className="border-b-[1px] border-spacing-2 border-whitem border-opacity-20 mb-6">
                    <h1 className='text-3xl tablet:text-5xl leading-tight font-tommy min-h-max pl-2 pb-2'>{dataProject.name}   </h1>
                </div>


                <div className=' w-[100%] h-[100%] '>
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
                <div className="flex justify-between flex-col   tablet:h-[13rem] desktop:h-[10rem]">
                    <div className="desktop:min-h-[6.5rem]">
                        <div className='text-[1rem] font-tommylight tracking-wide antialiased'>
                            <div className='text-[1rem] font-tommylight tracking-wide antialiased' dangerouslySetInnerHTML={{ __html: asd }}></div>
                        </div>
                        <p>
                            {dataProject.opinion}
                        </p>
                    </div>
                    

                    <div className="tablet:flex tablet:justify-between ">
                        <div>
                            <h2 className='font-chrono text-[1.7rem]'>
                                Technologies i used
                            </h2>
                            <div className='flex flex-wrap gap-3'>
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
                        <div className="pt-[1.7rem]">
                            {dataProject.link ? <div className="flex justify-end">
                                <a className='font-tommyregular text-[1.2rem] text-naranja hover:text-naranjahover' href={dataProject.link} target='_blank' >
                                    Go to the site
                                </a>
                            </div> : null}
                            <div className="flex justify-end">
                                <a className='font-tommyregular text-[1.2rem] text-naranja hover:text-naranjahover' href={dataProject.github} target='_blank' >
                                    Github Repository
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=' min-w-full h-10'>

                    </div>

                </div>
                <div className=' min-w-full h-10'>

                </div>

            </div>
            <div className='flex justify-end min-w-full gap-2'>
                <div className="w-44">
                    {atStart ? null : <Link to={`/web-projects/${prevData.id ? prevData.id : null}`}>
                        <button className='w-44 h-12 font-tommyregular tablet:text-xl bg-purpuraclaro rounded-sm hover:bg-purpuralh hover:text-texth'>
                            Previous project
                        </button>
                    </Link>
                    }
                </div>
                <div className="w-44">
                    {atEnd ? null : <Link to={`/web-projects/${nextData.id}`}>
                        <button className='w-44 h-12 font-tommyregular tablet:text-xl bg-purpuraclaro rounded-sm hover:bg-purpuralh hover:text-texth'>
                            Next project
                        </button>
                    </Link>}
                </div>
            </div>
        </div>

    )
}

export default WebProject