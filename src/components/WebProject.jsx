import { useEffect, useState, Fragment, createElement, useContext } from "react"
import { Link} from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { GeneralContext } from "../context/general-context";
import { Pagination, Navigation, Zoom } from "swiper";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom"
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";
import TechAndLinks from "./TechAndLinks";
import { ShowProjects } from "./utils/ShowProjects";



function WebProject (props) {
    const [dataProject, setDataProject] = useState({})
    const [nextData, setNextData] = useState({})
    const [prevData, setPrevData] = useState({})
    const [atEnd, setAtEnd] = useState(false)
    const [atStart, setAtStart] = useState(true)
    const [images, setImages] = useState([])
    const [imagesMobile, setImagesMobile] = useState([])
    const [tech, setTech] = useState([])
    const [description, setDescription] = useState('')
    const [content, setContent] = useState(Fragment)
    const { scroll } = useContext(GeneralContext)

    const params = props.paramsProject
    const projects = props.projects

    
 
    useEffect(()=> {
        const currentProject = ShowProjects(projects, params, setNextData, setPrevData, setAtEnd, setAtStart)
        setDataProject(currentProject)
        setImages(currentProject.images)
        setImagesMobile(currentProject.imagesmobile)
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
            <div className="showproject ">
                <div className="border-b-[1px] border-spacing-2 border-whitem border-opacity-20 mb-6 transicioncorta flex justify-between">
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
                        className="mySwiper bg-negro hidden tablet:block"
                    >
                        {
                            dataProject != undefined ? (images.map((s) => <SwiperSlide data-hash={(s)} key={s} zoom='true'><img  src={s} width="1280" height="720" /></SwiperSlide>)) : null
                        }
                    </Swiper>
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        zoom={true}
                        modules={[Pagination, Navigation, Zoom]}
                        className="mySwiper bg-negro tablet:hidden"
                    >
                        {
                            dataProject != undefined ? (imagesMobile.map((s) => <SwiperSlide data-hash={(s)} key={s} zoom='true'><img src={s} width="1280" height="720" /></SwiperSlide>)) : null
                        }
                    </Swiper>

                </div>
                <div className=' min-w-full h-6'>
                </div>

                <div className="flex flex-col   tablet:min-h-[21rem] laptop:min-h-[18rem]">
                    <div key={dataProject.opinion} className="desktop:min-h-[9rem] transicioncorta">
                        <div className="text-left">
                            <img src={dataProject.illustrations} className='w-44 tablet:w-[13rem] float-right ml-4 svg mr-5' />
                        </div>
                        <p className='text-[1rem] font-tommylight tracking-wider antialiased text-justify' >{content}</p>
                        
                        
                    </div>
                    <p className='text-[1rem] font-tommyregular tracking-wider antialiased italic'>
                            {dataProject.opinion}
                        </p>
                    <div className="border-b-[1px] border-whitem border-opacity-20 mt-4 mb-4 desktop:mt-6 desktop:mb-6 w-[80%] flex mx-auto">
                    </div>
                    <TechAndLinks tech={tech} dataProject={dataProject}/>
                </div>


            </div>
            <div className=" mt-4 mb-4 desktop:mt-6 desktop:mb-6 w-[50%] flex mx-auto">
                    </div>
            <div className='flex justify-end min-w-full gap-2'>
                <div className="w-36 tablet:w-44">
                    {atStart ? null : <Link  to={`/web-projects/${prevData.id ? prevData.id : null}`}>
                        <button key={dataProject.name}  onClick={() => scroll.current.scrollIntoView()}
                            className='tablet:w-44 p-2 w-36 h-12 tablet:h-12 font-tommyregular  tablet:text-xl bg-purpuraclaro rounded-sm hover:bg-purpuralh hover:text-texth'>
                            Previous project
                        </button>
                    </Link>
                    }
                </div>
                <div className="w-36 tablet:w-44">
                    {atEnd ? null : <Link to={`/web-projects/${nextData.id}`} >
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