import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import App from './App';
import reportWebVitals from './reportWebVitals';
 */
/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1 className='text text-center text-defult'>React App</h1>
);
 */
/* // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */

const myelement = (
<h1 className='text text-center text-default'>I Love JSX!</h1>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myelement);