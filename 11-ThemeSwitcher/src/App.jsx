import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card'

function App() {
  const [themeMode,setThemeMode] = useState("light");

  const lightTheme = ()=> setThemeMode("light");
  const darkTheme =  ()=> setThemeMode("dark");

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      {/* Imp point : How to define these themeMode variable and lightTheme and darkTheme methods now?
      ans : just create new ones with the same name in this file they will autoConnect through react. */}

    <div>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  {/* themebtn Component */}
                  <ThemeBtn></ThemeBtn>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  {/* card component */}
                  <Card></Card>
              </div>
          </div>
      </div>

    </div>

    </ThemeProvider>
  )
}

export default App
