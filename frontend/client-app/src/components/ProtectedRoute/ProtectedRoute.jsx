import React, {useState, useEffect} from 'react'
import apiClient from '../../api/apiClient'
import {Navigate} from "react-router-dom"
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator'

function ProtectedRoute({children}) {
    const [isAuthorized, setIsAuthorized] = useState(null)

    const authenticate = async () => {
        try {
            const response = await apiClient.get("/api/protected");
            setIsAuthorized(true)
        } catch (error) {
            console.log(error)
            setIsAuthorized(false)
        }
    }

    useEffect(() => {
        authenticate();
    }, [])

    if (isAuthorized == null) {
        return (
            <LoadingIndicator />
        )
    }

  return isAuthorized ? children : <Navigate to="/login" />
}

export default ProtectedRoute