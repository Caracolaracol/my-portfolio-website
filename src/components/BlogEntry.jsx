import { useEffect, useState, useRef} from "react"
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ShowProjects } from "./utils/ShowProjects";
import "../index.css";


function BlogEntry(props) {
    const scroll = useRef()
    const [dataEntry, setDataEntry] = useState({})
    const [nextData, setNextData] = useState({})
    const [prevData, setPrevData] = useState({})
    const [atEnd, setAtEnd] = useState(false)
    const [atStart, setAtStart] = useState(true)
    const [content, setContent] = useState('')

    const params = props.paramsProject
    const projects = props.projects

    useEffect(() => {
        console.log(scroll.current)
        scroll.current && scroll.current.scrollIntoView()
            window.scroll(0,0)
    },[content])

      
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
        <div key='top' ref={scroll} className="showproject transicioncorta p-2 max-w-[45rem]">
            <div className="showproject">
                <div className="border-b-[1px] border-spacing-2 border-whitem border-opacity-20 mb-6 transicioncorta">
                    <h1 key={dataEntry.name} className={`text-xl tablet:text-3xl laptop:text-4xl desktop:text-5xl leading-tight font-tommy min-h-max pl-2 pb-2 transicioncorta`}>{dataEntry.name}   </h1>
                </div>
            </div>
            <div id='markdown' className="showproject">
                <ReactMarkdown className="whitespace-pre-line text-justify">{content}</ReactMarkdown>
            </div>
            <div  key={dataEntry.name} className='flex justify-end min-w-full gap-2 mt-4 transicioncorta'>
                    <div className="w-36 tablet:w-44">
                        {
                            atStart ? null : <Link to={`/blog/${prevData.id ? prevData.id : null}`}>
                                <button key={dataEntry.name}  onClick={() => {
                            
                            scroll.current.scrollIntoView()
                            }}
                                    className='tablet:w-44 p-2 w-36 h-12 tablet:h-12 font-tommyregular  tablet:text-xl bg-purpuraclaro rounded-sm hover:bg-purpuralh hover:text-texth'>
                                    Next Entry
                                </button>
                            </Link>
                        }
                    </div>
                    <div className="w-36 tablet:w-44">
                        {atEnd ? null : <Link to={`/blog/${nextData.id}`}>
                            <button key={dataEntry.name}  onClick={() => {
                            
                            scroll.current.scrollIntoView()
                            }}
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