import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducer from './reducers';

const store = createStore(allReducer);


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();










// import {createStore} from 'redux';

  


// //STORE - GLOBALIZED STATE
 

// //ACTION increment 
// const increment = () => {
//     return{
//         type:'INCREMENT'
//     }
// }
// const decrement = () => {
//     return{
//         type:'DECREMENT'
//     }
// }
// //REDUCER (WILL CHECK WHICH ACTION YOU DID) aka functions
// const counter =(state =0, action) => {
//     switch(action.type){
//         case 'INCREMENT' :
//             return state + 1;
//         case "DECREMENT":
//             return state -1;
//     }
// };
// let store = createStore(counter);

// //Display it in 
// store.subscribe(() => console.log(store.getState()));

// //DISPATCH 
// store.dispatch(increment());
// store.dispatch(decrement());

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();