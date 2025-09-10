// react
import { createContext, useState } from "react";
export const MainContext = createContext();


export default function MainProvider({ children }) {
    // save arr
    const [saveArr, setSaveArr] = useState([]);


    return (
        <MainContext.Provider value={{ saveArr, setSaveArr }}>
            {children}
        </MainContext.Provider>
    )
}