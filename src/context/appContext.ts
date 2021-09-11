import { createContext } from "react";
import { initialAppState } from "./appProvider";


export const AppContext = createContext({
    ...initialAppState,
    createUser: (name: string) => {},
    updateQuestions: (name: string, _id:string, questions1:Array<object>, questions2:Array<object>) => {}
    
});