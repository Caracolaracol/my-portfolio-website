import React from "react";
import { createContext} from "react";
import { useState } from "react";

export const GeneralContext = createContext()

const { Provider } = GeneralContext

function MyProvider({children}) {
    const [dataProject, setDataProject] = useState({})
    const [scroll, setScroll] = useState(null)
    const [paramsContext, setParamsContext] = useState()
    const [projectsContext, setProjectsContext] =useState()
    const [locationSection, setLocationSection] = useState()
    const [language, setLanguage] = useState('EN')


    return (
        <Provider value={{dataProject, setDataProject, scroll, setScroll, paramsContext, setParamsContext, projectsContext, setProjectsContext, locationSection, setLocationSection, language, setLanguage}} >
            {children}
        </Provider>
    )
}
export default MyProvider