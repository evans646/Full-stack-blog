import {combineReducers} from 'redux';
import {news} from './newsReducer';
import {upvote} from './upvoteReducer'

const rootReducer = combineReducers({
    news: news,
    upvote
});

export default rootReducer;