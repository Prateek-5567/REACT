import { useEffect, useState } from 'react'
import './App.css'
import React from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import InputBox from '../components/inputBox'


function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const [convertedAmount,setConvertedAmount]=useState(0);
  const [to,setTo]=useState("inr");
  
  const currencyData = useCurrencyInfo(from);  
  // - Doubt hai yaha ; jese hi currency chng hogi to useEffect ke through doabara api call jayegi to ye currencyData state kese update hoga.
  // ans : at end.
  const options = Object.keys(currencyData); // get all keys; keys here means currrencies

  const swap=()=>{
    setTo(from);
    setFrom(to);
    setAmount(0);
    setConvertedAmount(0);
  }

  const converter = ()=>{
    setConvertedAmount(amount * Number(currencyData[to]))
  }

  const bgUrl = 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?_gl=1*wc8r7f*_ga*NDgxMTA1NjMzLjE3NjA4NTQ4ODg.*_ga_8JE65Q40S6*czE3NjA4NTQ4ODckbzEkZzEkdDE3NjA4NTQ5MTkkajI4JGwwJGgw';
    
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{backgroundImage:`url('${bgUrl}')`}}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            converter();
                        }}
                    >
                        <div className="w-full mb-2">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={ (amt)=>setAmount(amt)}
                                currencyOptions={options}
                                selectCurrency={from}
                                onCurrencyChange={(curr)=>setFrom(curr)}
                            />
                        </div>


                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>

                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                selectCurrency={to}
                                onCurrencyChange={(curr)=>setTo(curr)}
                                amountDisable={true}
                                
                            />    
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>


                    </form>
                </div>
            </div>
        </div>
    );

  }
export default App



// When you change the state : from
// Let’s say you select "eur" from dropdown, and this line runs:
    // setFrom("eur");
// That causes your main App component to re-render.  when any state changes entire component re-renders ; so App.jsx will re-render.
// Now React again calls:
// const currencyData = useCurrencyInfo("eur");
// ➡️ Because the dependency [currencyCode] in the hook changed from "usd" → "eur",
// React will re-run the useEffect inside the hook.