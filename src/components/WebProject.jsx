import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";
import { Pagination, Navigation, HashNavigation, EffectFade } from "swiper";

function WebProject (props) {
    const [dataProject, setDataProject] = useState({})
    const [nextData, setNextData] = useState({})
    const [prevData, setPrevData] = useState({})
    const [atEnd, setAtEnd] = useState(false)
    const [atStart, setAtStart] = useState(true)
    const [images, setImages] = useState([])
    const params = props.paramsProject
    const projects = props.projects

    useEffect(()=> {
        const currentProject = projects.find((el)=>el.id === params)
        const indexCurr = projects.indexOf(currentProject)
        const nextProject = projects[indexCurr+1]
        const prevProject = projects[indexCurr-1]
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
        
    },[params,dataProject,images])

    return (
        <div>
            <div className="showproject">
                <div className="border-b-[1px] border-spacing-2 border-naranjahover mb-6">
                    <h1 className='text-5xl leading-tight font-tommy min-h-max pl-2 '>{dataProject.name}   </h1>   
                </div>
                

                <div className=' w-[100%] h-[100%]'>
                    <Swiper
                        spaceBetween={30}
                        
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        
                        modules={[Pagination, Navigation, HashNavigation, EffectFade]}
                        effect={"fade"}
                        className="mySwiper bg-negro"
                    >
                        {
                                dataProject != undefined ? (images.map((s) => <SwiperSlide data-hash={s}><img key={s} src={s} zoom='true' /></SwiperSlide>)) : null
                        }

                    </Swiper>
                </div>
                <div className=' min-w-full h-6'>

                </div>
                <div>
                    <p className='text-[1rem] font-tommylight tracking-wide antialiased'>
                        This is a clone of the <a className='text-naranja hover:text-naranjahover' href='https://obsidian.md/' target='_blank' >Obsidian website</a>, made for improving my developing skills. It is the landing page of the site. I tried to made this page without seeing the original html because i thought that doing it this way would make it harder to clone.
                    </p>
                    <p>
                        {dataProject.opinion}
                    </p>
                    <div className=' min-w-full h-10'>

                    </div>
                    
                    <h2 className='font-chrono text-[1.7rem]'>
                        Technologies i used
                    </h2>
                    <div className='flex flex-wrap gap-3'>
                        <div className='bg-naranja w-12 h-12 '></div>
                        <div className='bg-naranja w-12 h-12 '></div>
                        <div className='bg-naranja w-12 h-12 '></div>
                        <div className='bg-naranja w-12 h-12 '></div>
                        <div className='bg-naranja w-12 h-12 '></div>
                    </div>
                    <div className=' min-w-full h-10'>

                    </div>
                    <div className="flex justify-end">
                        <a className='font-tommyregular text-[1.2rem] text-naranja hover:text-naranjahover' href={dataProject.github} target='_blank' >
                            Github Repository
                        </a>
                    </div>
                    
                    <p>

                    </p>
                </div>
                <div className=' min-w-full h-10'>

                </div>

            </div>
            <div className='flex justify-end min-w-full gap-2'>
                <div className="w-44">
                    {atStart ? null : <Link to={`/web-projects/${prevData.id ? prevData.id : null}`}>
                        <button className='w-44 h-12 font-tommyregular tablet:text-xl bg-purpural rounded-sm hover:bg-purpuralh hover:text-texth'>
                            Previous project
                        </button>
                    </Link>
                    }
                </div>
                <div className="w-36">
                    {atEnd ? null : <Link to={`/web-projects/${nextData.id}`}>
                        <button className='w-36 h-12 font-tommyregular tablet:text-xl bg-purpural rounded-sm hover:bg-purpuralh hover:text-texth'>
                            Next project
                        </button>
                    </Link>}
                </div>
            </div>
        </div>
        
    )
}

export default WebProject