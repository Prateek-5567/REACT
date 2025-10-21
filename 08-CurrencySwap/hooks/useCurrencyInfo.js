// coustom hook are mostly made pure js
// a hook returns a array with 2 members [variable,fn reference] so it is pure js.

import { useState, useEffect } from "react";

function useCurrencyInfo(currencyCode){
    const [data,setData] = useState({}); // initialsed data by empty array.
    useEffect( ()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode}.json`)
        .then((response)=>response.json())
        .then((response)=>setData(response[currencyCode]))
    },[currencyCode])

    console.log(data);
    return data; // we return only data and data currencyCode as input so it is a coustomHook.
}

// fetch returns a promise so we can do .then and .catch chaining 
// this api always holds latest currencies conversion rates.

export default useCurrencyInfo;