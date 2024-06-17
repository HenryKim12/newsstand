import React, { useEffect } from 'react'
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate = useNavigate();
    const logout = () => {
        Cookies.set("isCookieSet", false)
    }

    const handleLogout = () => {
        navigate("/")
        navigate(0)
    }

    useEffect(() => {
        logout();
    }, [])

  return (
    <div>Logout
        <button onClick={() => handleLogout()}>here</button>
    </div>
  )
}

export default Logout