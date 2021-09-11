import { createContext } from "react";
import { initialAppState } from "./appProvider";


export const AppContext = createContext({
    ...initialAppState,
    createUser: (name: string) => {}
    
});