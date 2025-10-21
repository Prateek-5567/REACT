import React from 'react'
import { useId } from 'react';

function InputBox({   // Remember : curly braces ke andar props aate hai...
    label, 
    amount, 
    onAmountChange,      // this is const [amount,setAmount] = useState();
    currencyOptions = [],    
    onCurrencyChange,
    selectCurrency = "usd",
    amountDisable = false,   // input feild should be disabled or not
    currencyDisable = false,
    className = "",  // add some additional css for input block. >>
}) {
   const inputId = useId(); // gives you unique id for accessiblity attributes (do not use for keys in list)

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

            <div className="w-1/2">
                <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={inputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={ (e)=> onAmountChange && onAmountChange(Number(e.target.value))} // convert to number as it will be string (jsDefault). && onCurrencyChange phle check kia h kahi pass hi na kiya ho user ne...
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={ (e)=>{
                        return onCurrencyChange && onCurrencyChange(e.target.value);
                    }}
                >
             {/* in react when you use loop you must keep attention on {key} otherwise the performance will degrade very much
                    agar aapko performance lani h inn react when you are repeating elements or repeteadily creating elements then you must use key to assosiate each element with key 
                here you will be creaing element and adding them into the dom.
                indexes bhi use kar sakte ho but they also have some drawbacks so here we use CurrencyCode ya database se fetch kar rhe ho ids also you can use.
             */}
                        {currencyOptions.map( (_currency)=> {
                            return (
                                <option key={_currency} value={_currency}>{_currency}</option>
                            )
                        } )}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

