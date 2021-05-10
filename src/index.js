import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListComponents from './ListComponent';
import reportWebVitals from './reportWebVitals';

//function Test(){
//  return <h1>Hello Word</h1>
//}

ReactDOM.render(
  <React.StrictMode>
    <ListComponents />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
