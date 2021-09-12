import { createContext } from "react";
import { initialAppState } from "./appProvider";


export const AppContext = createContext({
    ...initialAppState,
    createUser: (name: string) => {},
    updateQuestions: (name: string, questions1:Array<any>, questions2:Array<any>) => {}
    
});