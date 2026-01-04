import Home from "../pages/home/Home"
import Auth from "../pages/auth/auth"
import Login from "../components/auth/Login"
import Signup from "../components/auth/Signup"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/auth' element={ <Auth/> }>
          <Route path='login' element={ <Login/> }/>
          <Route path='signup' element={ <Signup/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
