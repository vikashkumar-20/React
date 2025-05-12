import { createContext } from "react";

export const Context = createContext();

export const Provider = ({children}) => {
    const myName = "Vikash";
    
    return <Context.Provider value={myName} >
        {children} 
    </Context.Provider>
}