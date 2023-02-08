import React, { useEffect } from "react";
import { createContext} from "react";
import { useState } from "react";

export const GeneralContext = createContext()

const { Provider } = GeneralContext

function MyProvider({children}) {
    const [isEntered, setIsEntered] = useState(false)
    function enterHandler(){
        if(isEntered == false){
            setIsEntered(true)

            
        } else {
            setIsEntered(false)
        }

    }
 
    

    
    return (
        <Provider value={{isEntered, setIsEntered, enterHandler}} >
            {children}
        </Provider>
    )
}
export default MyProvider