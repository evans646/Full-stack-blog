import {
    SET_USER_UPVOTE_SUCCESS 
} from '../actions/upvoteActions';



const INITIAL_STATE = {
   SetUserUpvote: false,
   upvotes:[]
}


export const upvote = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SET_USER_UPVOTE_SUCCESS:
            return {
                ...state,
               setUserUpvote:true,
                upvote: action.payload
            };
            default:
                return state;
    }
};
