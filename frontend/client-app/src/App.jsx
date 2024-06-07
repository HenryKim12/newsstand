import react from 'react'
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import routes from "./router/routes"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
