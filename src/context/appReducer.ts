import { AppActios } from "./actions"
import { AppState } from "./model";



export const reducer = ( state: AppState, {type, payload}: {type: string, payload: any})=> {
    const nPayload = payload || {};
    switch(type){
        case AppActios.SAVE_USER: 
             let questions1 = [];
            if(nPayload.questions1.length === 0){
                for(let i= 0; i< 8 ; i++){
                    questions1.push({number: i+1, answer: false});
                }
            } else {
                questions1 = nPayload.questions1;
            }
            return { ...state, name: nPayload?.name, _id: nPayload?._id, questions1: questions1, questions2: nPayload?.questions2} ;
        case AppActios.UPDATE_QUESTIONS:
            return { ...state, name: nPayload?.name, _id: nPayload?._id, questions1: nPayload?.questions1, questions2: nPayload?.questions2, average: nPayload.average };
        default: 
            return state;
    }

}