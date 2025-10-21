import './App.css'
import UserContextProvider from "./context/UserContextProvider"
import Login from './Components/login'
import Profile from './Components/Profile'
function App() {
  return (
  <UserContextProvider>
    <Login />
    <Profile />
  </UserContextProvider>
  )
}

export default App
