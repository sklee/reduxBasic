import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootReducer from './reducers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(rootReducer); // redux 스토어 생성 및 초기 상태 설정
//const { getState, dispatch } = store

store.dispatch({
  type: "ADD_TODO",
  text: "USE REDUX"
})
console.log('store.getState', store.getState())

const render = () => root.render(
  <React.StrictMode>
    <App 
      value={store.getState()} // 상태를 읽어, UI를 업데이트한다.
      onIncrement={()=> store.dispatch({type: "INCREMENT"})}
      //Action을 dispatch하여 reducer를 호출한다.
      //onIncrement={()=> dispatch({type: "INCREMENT"})}
      onDecrement={()=> store.dispatch({type: "DECREMENT"})}
    />
  </React.StrictMode>
);
render();

store.subscribe(render); 
// redux store의 변경을 감지하고, 변경될 대마다 render함수호출

reportWebVitals();
