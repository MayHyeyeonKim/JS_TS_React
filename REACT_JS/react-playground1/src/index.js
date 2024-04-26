import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Practice from './ch1/Practice';
import Destructuring from './ch1/Destructuring';
import RestParam from './ch1/RestParam';
import TernaryOperator from './ch1/TernaryOperator';
import State from './ch2/State';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Practice />
    <br />
    <div>-------------------</div>
    <Destructuring />
    <br />
    <div>-------------------</div>
    <RestParam />
    <br />
    <div>-------------------</div>
    <TernaryOperator />
    <br />
    <div>-------------------</div>
    <State />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// npx create-react-app my-app
// npm start