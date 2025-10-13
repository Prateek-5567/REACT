// ye file index.js jesi hi hai aapki. -> jese javascript me index.js hoti thi.
// index.jsx or main.jsx is you starting Node of React .which is imported in index.html.
// it is mostly called index.jsx or main.jsx ie your main react file starts from here.
// har component jo aap root me renderkarna chahte ho uska first letter capital hona chahiye

// current folder se kuch import karna hoto start with './  '
// durse folder se import karna ho jo same level par h .:-    '/folder/file.xyz' 

import './index.css';  // cuz ye file current folder me h.
import App from './App.jsx'  // react ka component ekk tag ki trah use hota h joki hamesha esse import hote h.
// import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Prateek from './Prateek.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

// React 02 part.
function MyApp(){
    return (<h1> My Coustom React</h1>)
}

const myVar="Injected Varibale as Evaluated expression"
const finalReactComponent = React.createElement(
  'a',
  {
    href:"https://google.com",
    target:"_blank"
  },
  "click here to visit google.com  ",
  myVar
)

root.render(
  <StrictMode>
      <Prateek/>
      <App/>
  </StrictMode>
)

// use only one render.; if many the final one is considered.
// root.render(
//   finalReactComponent
// ) 



// abhi to ham index.jsx ko import kar rahe h lekin 
// kuch cases me mostly when you use `npm create react app folderName`
//  h to package.json me under dependencies you will see script that script is 
// also responsible for importing you index.js inside you index.html internally .




