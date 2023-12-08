import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import UnController from './uncontroller';
// import Controller from './controller';
import ShoppingPage from './ShoppingPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 {/* <Controller/>
 <UnController/> */}
    {/* <App /> */}
    <ShoppingPage/>
  </React.StrictMode>
);

