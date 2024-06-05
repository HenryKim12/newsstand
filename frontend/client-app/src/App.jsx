import react from 'react'
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import routes from "./router/routes"
import Home from "./pages/Home"

function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
