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
import SearchPage from "./pages/subpages/SearchPage"
import FavouritesPage from "./pages/subpages/account/FavouritesPage"

function App() {
  return (
    <BrowserRouter> 
      <NavigationBar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.sports} element={<SportsPage />} />
        <Route path={routes.travel} element={<TravelPage />} />
        <Route path={routes.technology} element={<TechnologyPage />} />
        <Route path={routes.health} element={<HealthPage />} />
        <Route path={routes.entertainment} element={<EntertainmentPage />} />
        <Route path={routes.search} element={<SearchPage />} />
        <Route path={routes.accountFavourites} element={<FavouritesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
