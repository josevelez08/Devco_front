import { AppActios } from "./actions"
import { AppState } from "./model";



export const reducer = ( state: AppState, {type, payload}: {type: string, payload: any})=> {

    switch(type){
        case AppActios.SAVE_USER: 
            const nPayload = payload || {};
            return { ...state, name: nPayload?.name, _id: nPayload?._id} ;
        default: 
            return state;
    }

}