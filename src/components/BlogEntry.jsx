import { useEffect, useState} from "react"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
import ReactMarkdown from "react-markdown";
import "../index.css";

function BlogEntry(props) {
    const { pathname } = useLocation()
    const [dataEntry, setDataEntry] = useState({})
    const [nextData, setNextData] = useState({})
    const [prevData, setPrevData] = useState({})
    const [atEnd, setAtEnd] = useState(false)
    const [atStart, setAtStart] = useState(true)
    const [content, setContent] = useState('')

    const params = props.paramsProject
    const projects = props.projects

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, [pathname]);

      
    useEffect(() => {
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
        setDataEntry(currentProject)
         
    },[params,dataEntry])

    const fetchdata = () => {
        fetch(`${dataEntry.paragraphs}`)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
    fetchdata()
       

    return (
        <div className="showproject transicioncorta p-2 max-w-[45rem]">
            <div className="showproject">
                <h1 key={dataEntry.name} className="transicioncorta ">{dataEntry.name}</h1>
                </div>
            <div id='markdown' className="showproject">
                <ReactMarkdown className="whitespace-pre-line text-justify">{content}</ReactMarkdown>
            </div>
            <div  key={dataEntry.name} className='flex justify-end min-w-full gap-2 mt-4 transicioncorta'>
                    <div className="w-36 tablet:w-44">
                        {
                            atStart ? null : <Link to={`/blog/${prevData.id ? prevData.id : null}`}>
                                <button key={dataEntry.name} onClick={() => scroll.current.scrollIntoView()}
                                    className='tablet:w-44 p-2 w-36 h-12 tablet:h-12 font-tommyregular  tablet:text-xl bg-purpuraclaro rounded-sm hover:bg-purpuralh hover:text-texth'>
                                    Next Entry
                                </button>
                            </Link>
                        }
                    </div>
                    <div className="w-36 tablet:w-44">
                        {atEnd ? null : <Link to={`/blog/${nextData.id}`}>
                            <button key={dataEntry.name} onClick={() => scroll.current.scrollIntoView()}
                                className='tablet:w-44 p-2 w-36 h-12 tablet:h-12 font-tommyregular  tablet:text-xl bg-purpuraclaro rounded-sm hover:bg-purpuralh hover:text-texth'>
                                Previous Entry
                            </button>
                        </Link>
                        }
                    </div>
                </div>
        </div>
       
    )
}
export default BlogEntry