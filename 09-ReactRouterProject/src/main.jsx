import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import React from 'react'
import Components from './allComponents.js'
import { githubDataLoader } from './components/github/Github.jsx'


const { Layout, Home, About , Contact ,Github ,User} = Components

// 1. first way of routing :-
// pass your components as element of array. 
/*
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    // yeto aapka base page hogya iske upar hai Home About Contact Github etc pages ke routes : they will come under children.
    children : [
      {
        path:"",
        element: <Home />
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element: <Contact/>
      }
    ]
  }
])
 */

// 2nd. way of Routing:-
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='' element={<Home/>  } />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact/>} />
        <Route 
         loader={githubDataLoader}
         path='Github'
         element= { <Github />} />
        <Route path='user/:randomId' element={ <User/> } /> 
{/* this randomId is what we want to fetch this randomId is now a identifier for that ... */}

    </Route>
  )
)
// note : only Home will not work : it is a component => to render components use them as tags. <Home /> 
// if you ever forget this note : recall the props class : <App number=num , isDisabled = disabled , chars=usechars etc.. /> 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
