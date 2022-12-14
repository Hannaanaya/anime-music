//ANTES
//import React from 'react';
// import ReactDOM from 'react-dom';
//import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


//AHORA
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const divRoot = document.getElementById('root')
const root = createRoot(divRoot);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);