// react
import { createContext } from "react";
export const MainContext = createContext();


export default function MainProvider({ children }) {
    return (
        <MainContext.Provider>
            {children}
        </MainContext.Provider>
    )
}