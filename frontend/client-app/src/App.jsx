import {BrowserRouter, Routes, Route } from "react-router-dom"
import routes from "./router/routes"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import NavigationBar from './components/NavigationBar/NavigationBar'

function App() {
  return (
    <BrowserRouter> 
      <NavigationBar />
      <div style={{marginTop: 0, paddingLeft: "2rem", paddingRight: "2rem"}}>
        <hr style={{marginBottom: "2px", backgroundColor: "black"}}></hr>
        <hr style={{border: "2px solid", margin: "0px"}}></hr>
      </div>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
