import { useEffect, useState} from "react"
import { Link, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { ShowProjects } from "./utils/ShowProjects";
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
        const currentProject = ShowProjects(projects, params, setNextData, setPrevData, setAtEnd, setAtStart)
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