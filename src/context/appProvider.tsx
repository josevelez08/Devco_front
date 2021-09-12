import React, { FC, useReducer } from "react"
import { createUsersFetch } from "../apis/createUser"
import { updateQuestionFetch } from"../apis/updateQuestions"
import { AppState } from "./model"
import  {AppContext as appContext} from './appContext';
import { reducer } from "./appReducer";
import { AppActios } from "./actions";

export const initialAppState: AppState  =  {
    name: "",
    questions1: [],
    questions2: [],
    _id: "",
    average: 0
}


export const AppProvider: FC = ({children})=> {

    const [state, dispatch] = useReducer(reducer, initialAppState);

    const {name, _id, questions1, questions2, average} = state;


    const createUser = async (name: string) => {

        const {user} = await createUsersFetch(name);
        dispatch({ type : AppActios.SAVE_USER, payload: user});
    };

    const updateQuestions = async (name: string, questions1:Array<any>, questions2:Array<any>) => {


        const {response} = await updateQuestionFetch(name, questions1,questions2);
        console.log(response);
        dispatch({ type : AppActios.UPDATE_QUESTIONS, payload: response});
    }

    const AppContext = appContext;

    const contextValue = {
        name,
        _id,
        questions1,
        questions2,
        average,
        createUser: createUser,
        updateQuestions
    }

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider> ;

}