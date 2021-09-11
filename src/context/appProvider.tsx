import React, { FC, useReducer } from "react"
import { createUsersFetch } from "../apis/api"
import { AppState } from "./model"
import  {AppContext as appContext} from './appContext';
import { reducer } from "./appReducer";
import { AppActios } from "./actions";

export const initialAppState: AppState  =  {
    name: "",
    questions1: [],
    questions2: [],
    _id: ""
}


export const AppProvider: FC = ({children})=> {

    const [state, dispatch] = useReducer(reducer, initialAppState);

    const {name, _id, questions1, questions2} = state;
    const createUser = async (name: string) => {

        const user = await createUsersFetch(name);
        dispatch({ type : AppActios.SAVE_USER, payload: user});


    }
    const AppContext = appContext;
    const contextValue = {
        name,
        _id,
        questions1,
        questions2,
        createUser: createUser,

    }
    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider> ;

}