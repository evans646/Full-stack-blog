so i will implement the endpoint to set the hasUpvoted to false and unset the   upvotedId field to empty based the the req the params




Also i am sure that if i tore the user data under session, the google profile will also be stored as well. 


Install wtg fetch and run npm i to install mongo types or run from the screen shot 

I want the e library to be a dropdown, so we can have ebooks 
tutorials books in pdf 



The e library should be available on both menus whether a user is logged in or not but it is a private route

instead of other articles it will be related articles 


I can also made a sub menu for the sub menu items and use css to give it the initial value of none, so we will display the sbu menu times upon hover, 


On a small screen i will give the menu items display none and make it a drawer using material ui 

Gatsby





so when a user send the unlike to the end point , it will set the hasupvoted to false and -1 from upvotes 

  upvotedId:shortid.generate(),



The share icons will be in content and i will have a share and a share icon so when you click on teh share icon it will open the menu with the icons inside 


it should also display upon scroll down of the page 

I will also paste :

useEffect(() => {
        const loadOauthUrl = async () => {
            try {
                const response = await axios.get('/auth/google/url');
                const { url } = response.data;
                setGoogleOauthUrl(url);
            } catch (e) {
                console.log(e);
            }
        }
        loadOauthUrl();
    }, []);

    On the comments list page, to see if when a suer is logged out still we can load the url 




i will use some of the bckgrounds from canva to design the bg for the second header 


chakra ui 

framer motion 

----------------------
WHY DO WE NEED REDUX : 
---------------------
The first React ecosystem tool we will look at is something called Redux: 

What is teh best way to manage state in our application ? 

Componenets managing their own state

One thing about redux is that we have one single centralized state called  the STORE, which is a single JSON obj that stores a single  source of truth for all the compnonets

So the store can hold data even about a use 
{
   user: {
    isLogggedIn,
    name,
    age,
    bio
    }
}

and other data we might hold from the server, it can also hol data like a list of articles on a blog, 
products on an ecomerce site 

Redux manages the state of the app ,

but rhere are some other tools that comes with redux :

REDUX ACTIONS 
REDUCERS 

ACTIONS - Are JSON objects consisting of two things, {type , payload}
type is the name of the string in action and payload is the data. 

eg. USER_DATA_LOADED - is the type and payload will hold teh info of the data that has been loaded, 

MESSAGE_RECEIEVED 
ITEM_ADDED_TO_CART


Where as,REDUCERS are a way of specifying what should happen to the redux store in the centralized state when a given action occurs, 


Components are only allowed to interact with the state by triggering redux actions 

So to add redux to our app , we need to install : redux react-redux redux-thunk 

so after installing , we make another dir called store.js in the src 

and import :

import {createStore,combineReducers} from 'redux';



//we make an empty object reducer
const reducers = {}

//we use teh combine reducers to create root reducer 
const rootReducer = combineReducers(reducers);



export const configureStore = ()=> createStore(rootReducer);

Now we can open the index file and wrap the whole app inside redux provider :

we import the configureStore , and pass it to the provider:


import { Provider } from "react-redux";

import { configureStore } from "./store.js";

 ReactDOM.render(
<Provider store={configureStore()}>
<App />
</Provider>,
 document.getElementById("root")
);


NOW we can create the actions and reducers to help keep track of the state:
todos/actions.js

then we can define a create Todo action that will be triggred when a user types something in the new todo form Component and hits the createTodo button. 

we start by defining  the action :

export const CREATE_TODO = 'CREATE_TODO';

now we can create the actual action that the component can dispatch :

export const createTodo = text =>({
    type:CREATE_TODO,
    payload:{text}
});

No we can create the Reducers for the action :
todos/reducers.js

anytime an action gets fired, the reducer gets called. 

when that happens the two args that we passed to the reducer are the current state of the app 

state will hold the todos, and the second arg is the acton that was triggred. 

what the reducers does is to take teh curent state and the action that was triggred and decide what should happen as a result of this action. 

and it should then return the updated state, so redux will return the state and set the current value to that  :

import { CREATE_TODO, REMOVE_TODO } from "./actions";

export const todos = (state=[], action) => {
  const { type, payload } = action;

  //switch looks at the type of action and decode what to do based on that so we can import the actions we created.
  switch (type) {
    case CREATE_TODO: {
      //we specify what should happen when teh create_todo action is fired
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    default:
      return state;
  }
};


NOW atht we have the reducers defined,we just need to add it to the store :

import {todos} from './todos/reducers';



const reducers = {
    todos,
}

it is now connected to the redux store. 

WE CAN CONNECT COMPONENTS TO THE STORE :

newTodoForm/  

import {connect} from 'react-redux';


down the bottom, instead of just exporting the newTodoForm/ we can export connect and call the higher order func 


then we can define two functions :
const mapStateToProps = state =>({

})
const mapDispatchToProps= dispatch =>({

})

export default connect()(NewTodoForm);


then we can pass this to the connect()

mapStateToProps - is an obj that represents the entire redux state 
it takes the state object and returns another object containing the piecces of state that the Componenet needs access to:


mapDispatchToProps - takes something called dispatch, is a fucntion that allows the redux state to trigger actions that the redux store will respond to so to create a new todo we need to import the 
createTodo action creator :
import {createTodo} from './actions';

const mapDispatchToProps= dispatch =>({
    onCreatePressed: text => dispatch(createTodo(text))
  })

  we can add the dispatch to the forms obj :

  ({todos,onCreatePressed})

  then then add teh onlick for the create button and pass the onCreatePressed():

  after 


  we will need to connect the todoList to teh store also: 
  todoList/

  and the todoListItem/



Now we can craete and remove todo, wbut when a users refrshes the page, the created todos will go away so we need to persist the store, 

npm i redux-persist 


now we can make chnages to the store and the indiex.js 

in store.js:
import {persistReducer} from 'redux-persist';
import {storage} from 'redux-persist/lib/storage'
import {autoMergeLevel2} from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

and then where are defining our reducer :
const persistedReducer = persistReducer(persistConfig,rootReducer)

now we pass persistedReducer to the store: 

export const configureStore = ()=> createStore(persistedReducer);

index.js/
first we import : 

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

and then :

we can add it to the app.
and when we refresh the page, it will no longer delete the todos, it will be persisted. 

REDUX-DEVTOOLS 

go back to the store :

export const configureStore = ()=> createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    we add teh devtools after adding to chrome and we can see the entire state of teh app in browser, and also dispatch actions to teh store. 



BEST PRACTICES:
--------------
1. export the connected and unconnected versions of the componenet
2. Keep actions and async ops out of the reducers such fetching data from the network 
3. Think careflly about connecting componets 



WHY DO WE NEED REDUX THUNK ?
--------------
Side effect is fetching data from external sources.


There are severalside effect libs in our react eco system 
redux-thunk, redux-saga,redux logic 
the most popular once are redux thunk and redux saga 

Redux thunk works by tapping into the basic normal ui data-flow

UI action is trigered => state is updated => componenets see updated state 

with redux thunk we can have the the data logic aside from the component 

TO add redux thunk we will need to install redux-thunk  @babel/runtime

after we can install --save-dev @babel/plugin-transform-runtime 

then we add the babelrc and add : "plugins": ["@babel/plugin-transform-runtime"]


to add THUNK . store.js we import thunk and add applyMiddleware to the import redux 

and then we can import : 
import { composeWithDevTools } from 'redux-devtools-extension';



export const configureStore = ()=> createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
    );

to create a thunk : todos/thunks.js

a THUNK is a func that returns anotehr function whihc contains the actual logic we want to perform when an action is trigered :

we make a simple thunk that displas alert :

export const displayAlert = ()=>{
    alert('Hi there')
}

so on the todo list :

import { displayAlert } from './thunks';


and add it to the mapDispatchToProps


USING THUNKS FOR ASYNC OPS:
------------------

first we create teh actions:

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = ()=>({
   type:LOAD_TODOS_IN_PROGRESS,
})

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LoadTodoSuccess = () =>({
    type:LOAD_TODOS_SUCCESS,
    payload:{todos}
})


export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = async ()=>({
   type:LOAD_TODOS_FAILURE
})

and then, in thunks.js/ and import all the actions we just created. 

import { loadTodosInProgress,loadTodoSuccess,loadTodosFailure } from "./actions";

export const loadTodos= ()=> async (dispatch,getState)=>{
     //as soon as this thunk is triggered
     dispatch(loadTodosInProgress());
    try{
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();
        dispatch(loadTodoSuccess(todos));
    }catch(e){
        dispatch(loadTodosFailure())
        dispatch(displayAlert(e))
    }
}

now we can write some code that will take these actions and make corresponding changes to the store when this actions occur 

so in reducers.js we import the three action types we created and use them:


export const isLoading = (state = false, action)=>{
    const {type} = action;
  
    switch(type){
      case LOAD_TODOS_IN_PROGRESS:{
        return true
      }
      case LOAD_TODOS_SUCCESS:
      case LOAD_TODOS_FAILURE:
      return false 
      default :
      return state;
    }
  }
  

  now we can add this to the store :

  const reducers = {
    todos,
    isLoading
}

now if we chcek the state in devtools we will see that the isLoading has been added  so we can make use of it by :
todolist/


i am adding views to the article


 i have installed 
 
   <div>
        <input value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})} />

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>

        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>


page views 
You can add a field in your database schema in which you can update it by adding 1 or something similar when a user visits a page. If you want to go further you can then store the user IP in the database or use cookies to avoid counting page visits for the same person multiple times.






When you clck on load moerebtn you should get some loading efcet 