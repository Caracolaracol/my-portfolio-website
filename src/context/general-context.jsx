import React from "react";
import { createContext} from "react";
import { useState } from "react";

export const GeneralContext = createContext()

const { Provider } = GeneralContext

function MyProvider({children}) {
    const [place, setPlace] = useState('')
    const [dataProject, setDataProject] = useState({})

    return (
        <Provider value={{setPlace, place, dataProject, setDataProject}} >
            {children}
        </Provider>
    )
}
export default MyProvider