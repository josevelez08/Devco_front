import { AppActios } from "./actions"
import { AppState } from "./model";



export const reducer = ( state: AppState, {type, payload}: {type: string, payload: any})=> {

    switch(type){
        case AppActios.SAVE_USER: 
            const nPayload = payload || {};
            return { ...state, name: nPayload?.name, _id: nPayload?._id} ;
        case AppActios.UPDATE_QUESTIONS:
            return { ...state, name: nPayload?.name, _id: nPayload?._id, questions1: nPayload?.questions1, questions2: nPayload?.questions2 }
        default: 
            return state;
    }

}