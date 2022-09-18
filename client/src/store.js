import { combineReducers } from 'redux';
// import {  persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { configureStore } from "@reduxjs/toolkit";


import { blog} from './pages/reducers';

const reducer= {
    blog,
}   
const rootReducer = combineReducers(reducer);
export const store =  configureStore({
    reducer: rootReducer
})

// const persistConfig ={
//     key:'root',
//     storage,
//     stateReconciler:autoMergeLevel2
// }
// const rootReducer = combineReducers(reducers);

