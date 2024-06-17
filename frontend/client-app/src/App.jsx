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
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import Logout from "./pages/logout/Logout"

function App() {
  return (
    <BrowserRouter> 
      <NavigationBar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path={routes.sports} element={<ProtectedRoute> <SportsPage /> </ProtectedRoute>} />
        <Route path={routes.travel} element={<ProtectedRoute> <TravelPage /> </ProtectedRoute>} />
        <Route path={routes.technology} element={<ProtectedRoute> <TechnologyPage /> </ProtectedRoute>} />
        <Route path={routes.health} element={<ProtectedRoute> <HealthPage /> </ProtectedRoute>} />
        <Route path={routes.entertainment} element={<ProtectedRoute> <EntertainmentPage /> </ProtectedRoute>} />
        <Route path={routes.search} element={<ProtectedRoute> <SearchPage /> </ProtectedRoute>} />
        <Route path={routes.accountFavourites} element={<ProtectedRoute> <FavouritesPage /> </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
