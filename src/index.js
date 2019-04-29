import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import reducer from "./Redux/reducer";
import { Provider } from "react-redux";


var store = createStore(reducer);


store.dispatch({
    type: "INIT"
});

store.dispatch({
    type: "ADD_COLUMN"
});

store.dispatch({
    type: "SET_TITLE",
    index: 0,
    title: "List 1"
});

for(let i=0; i<10; i++){
    store.dispatch({
        type: "ADD_ITEM",
        index: 0,
        text: `Hello №${i}`
    });
}

store.dispatch({
    type: "ADD_COLUMN"
});

store.dispatch({
    type: "SET_TITLE",
    index: 1,
    title: "List 2"
});

for(let i=0; i<35; i++){
    store.dispatch({
        type: "ADD_ITEM",
        index: 1,
        text: `Hello №${i+10}`
    });
}

store.dispatch({
  type: "ADD_COLUMN"
});

store.dispatch({
  type: "SET_TITLE",
  index: 2,
  title: "List 3"
});

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
