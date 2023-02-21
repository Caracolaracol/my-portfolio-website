import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function PostProject (props) {
    const [dataProject, setDataProject] = useState({})
    const [nextData, setNextData] = useState({})
    const [prevData, setPrevData] = useState({})
    const [atEnd, setAtEnd] = useState(false)
    const [atStart, setAtStart] = useState(true)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [images, setImages] = useState([
        'https://via.placeholder.com/1500x1500?text=Image+1',
        'https://via.placeholder.com/1500x1500?text=Image+2',
        'https://via.placeholder.com/1500x1500?text=Image+3',
      ]);

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
    },[params,dataProject])

    const imageStyle = {
        maxWidth: '100%',
        maxHeight: '80vh',
      };
    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    const handleNextImage = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
      };
    
      const handlePreviousImage = () => {
        const previousIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(previousIndex);
      };
    return (

        <div>
            <div className='showproject'>
                <div className='border-b-[1px] border-naranja  mb-8'>
                    <h1 className='text-5xl leading-tight font-tommy min-h-max pl-2'>{dataProject.name}</h1>
                </div>

                <div className='bg-naranja w-72 h-72 ' onClick={handleOpenModal}>
                {isOpen && (
                        <div className="fixed z-10 left-0 top-0 w-screen h-screen bg-negro bg-opacity-80 flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
                            <div className="z-30" onClick={(e) => e.stopPropagation()}>
                                <div>
                                    <button onClick={handleCloseModal}>Close</button>
                                    <div>
                                        <button onClick={handlePreviousImage}>Previous</button>
                                        <button onClick={handleNextImage}>Next</button>
                                    </div>
                                    <img style={imageStyle} src={images[currentImageIndex]} alt="modal" />
                                </div>
                                
                            </div>
                            <div className="z-20 fixed left-0 top-0 w-screen h-screen flex justify-center items-center" onClick={handleCloseModal}>

                            </div>
                        </div>
                    )}
                </div>
                <div className=' min-w-full h-6'>

                </div>
                <div>
                    <p className='text-[1rem] font-tommylight tracking-wide antialiased'>
                        This is a music video I made for the rock band Bichonauta.
                    </p>
                    <p>
                        Bichonauta its a rock band filled with bugs and based in Santiago. Its a great band check it out!
                    </p>
                    <div className=' min-w-full h-10'>

                    </div>
                    <h2 className='font-chrono text-[1.7rem]'>
                        How I made this project?
                    </h2>
                    <div className='flex flex-wrap gap-3'>
                        <div className='bg-naranja w-12 h-12 '></div>
                        <div className='bg-naranja w-12 h-12 '></div>
                        <div className='bg-naranja w-12 h-12 '></div>
                        <div className='bg-naranja w-12 h-12 '></div>
                        <div className='bg-naranja w-12 h-12 '></div>
                    </div>
                    <p>

                    </p>
                </div>
                <div className=' min-w-full h-10'>

                </div>

            </div>
            <div className='flex justify-end min-w-full'>
                <div className="w-44">
                    {atStart ? null : <Link to={`/post-projects/${prevData.id ? prevData.id : null}`}>
                        <button className='w-44 h-12 font-tommyregular tablet:text-xl bg-purpural rounded-sm hover:bg-purpuralh hover:text-texth'>
                            Previous project
                        </button>
                    </Link>
                    }
                </div>
                <div className="w-36">
                    {atEnd ? null : <Link to={`/post-projects/${nextData.id}`}>
                        <button className='w-36 h-12 font-tommyregular tablet:text-xl bg-purpural rounded-sm hover:bg-purpuralh hover:text-texth'>
                            Next project
                        </button>
                    </Link>}
                </div>
            </div>
        </div>
        
    )
}

export default PostProject