import React from "react";
import { createContext} from "react";
import { useState } from "react";

export const GeneralContext = createContext()

const { Provider } = GeneralContext

function MyProvider({children}) {
    const [isEntered, setIsEntered] = useState(false)
    
    return (
        <Provider value={{isEntered}} >
            {children}
        </Provider>
    )
}
export default MyProvider