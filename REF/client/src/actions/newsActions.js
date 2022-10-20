import axios from 'axios';
export const GET_ALL_NEWS_IN_PROGRESS = 'GET_ALL_NEWS_IN_PROGRESS';
export const GET_ALL_NEWS_SUCCESS = 'GET_ALL_NEWS_SUCCESS';
export const GET_ALL_NEWS_ERROR = 'GET_ALL_NEWS_ERROR';

const key = 'fb95e2c7f55b4402ad060bee57afce8c'
let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`
  





export const loadNewsInProgress = (payload)=> ({
   type:GET_ALL_NEWS_IN_PROGRESS,
   payload
});

export const loadNewsSuccess = (payload) => ({
   type:GET_ALL_NEWS_SUCCESS,
   payload
});

export const loadNewsFailure = (payload)=>({
   type:GET_ALL_NEWS_ERROR,
   payload
});

export const loadFirstNews = () => async dispatch => {
   dispatch({type:GET_ALL_NEWS_IN_PROGRESS})
   console.log('dispatched')
   await axios.get(url)
 .then(function (response) {
   const news = JSON.parse(JSON.stringify(response.data));
   console.log(news)
   dispatch(loadNewsSuccess(news))
 })
 .catch(function (error) {
   dispatch(loadNewsFailure())
   console.log(error);
});
}






