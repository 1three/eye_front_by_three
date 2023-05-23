import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import MainScreen from './MainScreen';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <MainScreen />
  </React.StrictMode>
);

reportWebVitals();

// ReactDOM.render(
//   <React.StrictMode>
//     <MainScreen />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
