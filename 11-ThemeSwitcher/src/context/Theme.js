import { useContext,createContext } from "react";
// step1
export const themeContext =  createContext({
    themeMode:"light",
    lightTheme: ()=>{},
    darkTheme: ()=>{}
} 
); 
//step2
export const ThemeProvider = themeContext.Provider;
//step3
export const useTheme= () => {
    return useContext(themeContext);
}

// now we have a coustom hook useTheme() => call this hook whenEver you want to access your Centeral Store.