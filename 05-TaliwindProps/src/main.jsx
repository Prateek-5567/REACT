import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import Card from './components/card.jsx'

/**
 * Props (short for “properties”) in React are read-only inputs passed from a parent component 
 * to a child component to customize or configure its behavior.
 * They make components reusable by allowing data or values to be passed dynamically.
 */
const myObj = {
  username: "Rohit",
  age: 21
}
const arr = [1,2,3,4]
const name1= 'Mark Zukerburg';
const name2= 'Jim Hopper';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App username = "Prateek HR12"/>
    <Card username = {name1} ObjProp = {myObj} />
    <Card username={name2} btnText = "AHh Touch MEe baBy <-"/>
    <Card />
    {/* username pass ni kia to ternary operator ka use karke defualt usename ajayega  */}
  </StrictMode>,
)
