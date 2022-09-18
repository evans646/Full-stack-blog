import {
    GET_ALL_NEWS_IN_PROGRESS,
    GET_ALL_NEWS_SUCCESS,
    GET_ALL_NEWS_ERROR
} from '../actions/newsActions';

const INITIAL_STATE = {
    loading: false,
    hasError: false,
    error: null,
    news: []
}



export const news = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_ALL_NEWS_IN_PROGRESS:
            return {
                ...state,
                loading: true
            };
        case GET_ALL_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                hasError: false,
                news: action.payload
            };

        case GET_ALL_NEWS_ERROR:
            return {
                ...state,
                loading: false,
                hasError: true,
                error:action.payload
            };
        default:
            return state;
    }
}

