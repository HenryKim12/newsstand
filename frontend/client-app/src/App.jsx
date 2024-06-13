import {BrowserRouter, Routes, Route } from "react-router-dom"
import routes from "./router/routes"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import NavigationBar from './components/NavigationBar/NavigationBar'
import SportsPage from "./pages/subpages/SportsPage"
import TravelPage from "./pages/subpages/TravelPage"
import TechnologyPage from "./pages/subpages/TechnologyPage"
import EntertainmentPage from "./pages/subpages/EntertainmentPage"
import HealthPage from "./pages/subpages/HealthPage"

function App() {
  return (
    <BrowserRouter> 
      <NavigationBar />
      {/* <div style={{marginTop: 0, paddingLeft: "2rem", paddingRight: "2rem"}}>
        <hr style={{marginBottom: "2px", backgroundColor: "black"}}></hr>
        <hr style={{border: "2px solid", margin: "0px"}}></hr>
      </div> */}
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.sports} element={<SportsPage />} />
        <Route path={routes.travel} element={<TravelPage />} />
        <Route path={routes.technology} element={<TechnologyPage />} />
        <Route path={routes.health} element={<HealthPage />} />
        <Route path={routes.entertainment} element={<EntertainmentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
