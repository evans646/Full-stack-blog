import {
    LOAD_BLOG_IN_PROGRESS,
    LOAD_BLOG_SUCCESS,
    LOAD_BLOG_ERROR
} from './actions';

const initialState= {
    isLoading:false,
    data:[]
};

export const blog = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
    case LOAD_BLOG_SUCCESS: {
        const { blog } = payload;
        return{
            ...state,
            isLoading: false,
            data:blog
        };
    };
    case LOAD_BLOG_IN_PROGRESS:
        return {
            ...state,
            isLoading: true,
        };

    case LOAD_BLOG_ERROR:
        return {
            ...state,
            isLoading: false,
        }
    default:
        return state;
    };
};
