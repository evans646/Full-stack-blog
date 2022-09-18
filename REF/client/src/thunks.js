import axios from 'axios';
import { loadNewsInProgress,loadNewsSuccess, loadNewsFailure  } from "./actions/newsActions";
import {setUpvoteOnArticle} from './actions/upvoteActions';

const key = 'fb95e2c7f55b4402ad060bee57afce8c'
let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`
  




export const upvoteOnArticle = (articleName,id) => async(dispatch, getState) =>{
  const response = await axios.post(`/api/articles/${articleName}/${id}/upvote`);
  const body = response.data;
  dispatch(setUpvoteOnArticle(body))
} 

export const loadFirstNews = () => async (dispatch, getState) => {
     dispatch(loadNewsInProgress())
     console.log('dispatched')
     await axios.get(url)
   .then(function (response) {
     const news = JSON.parse(JSON.stringify(response.data.articles[4]));
     console.log(news)
     dispatch(loadNewsSuccess(news))
   })
   .catch(function (error) {
     dispatch(loadNewsFailure())
     console.log(error);
  });
 }

export const displayAlert = () =>{
    alert('Hi there')
}
