import React from "react";
import { createContext} from "react";
import { useState } from "react";

export const GeneralContext = createContext()

const { Provider } = GeneralContext

function MyProvider({children}) {
    const [dataProject, setDataProject] = useState({})
    const [scroll, setScroll] = useState(null)
    return (
        <Provider value={{dataProject, setDataProject, scroll, setScroll}} >
            {children}
        </Provider>
    )
}
export default MyProvider