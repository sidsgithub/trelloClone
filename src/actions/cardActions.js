import { CONSTANTS } from '../actions';

export const addCard = (listID, text)=>{
    console.log("in add card action",text,listID)
    return {
        type : CONSTANTS.ADD_CARD,
        payload : {listID,text}
    };
};