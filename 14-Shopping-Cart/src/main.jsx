import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { store } from './app/store.js'
import {Provider} from 'react-redux'
import Products from './features/products/Products.jsx'
import Cart from './features/cart/Cart.jsx'
 
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
      <Route 
        path='' element={<Products/>} 
      />
      <Route 
        path='cart' element = {<Cart/>} 
      />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
)
