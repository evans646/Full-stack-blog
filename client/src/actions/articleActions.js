import { useEffect } from 'react';


export const GET_ALL_ARTICLES_REQUEST = 'GET_ALL_ARTICLES_REQUEST';
export const GET_ALL_ARTICLES_SUCCESS = 'GET_ALL_ARTICLES_SUCCESS';
export const GET_ALL_ARTICLES_ERROR = 'GET_ALL_ARTICLES_ERROR';






export const getArticlesLoading = state => state.articles.Loading;

const getArticlesSuccess = payload => ({
    type: GET_ALL_ARTICLES_SUCCESS,
    payload
});


const getArticlesError = payload => ({
    type: GET_ALL_ARTICLES_ERROR,
    payload
});


export const getAllArticles = (name) => async dispatch => {
    dispatch({type:GET_ALL_ARTICLES_REQUEST });
 try {
   useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(`/api/articles/${name}`);
        const body = await result.json();
        console.log(body)
        dispatch(getArticlesSuccess(body));
    };
    fetchData();
},)
    } catch (error) {
        dispatch(getArticlesError("Something went wrong!"));
        return await Promise.reject({});
    };
};