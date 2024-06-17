import React, {useState, useEffect} from 'react'
import apiClient from '../../api/apiClient'

function ProtectedRoute({children}) {
    const [isAuthorized, setIsAuthorized] = useState(null)

    const authenticate = async () => {
        try {
            const response = await apiClient.get("/api/protected");
            console.log(response)
            setIsAuthorized(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        authenticate();
    }, [])

    if (isAuthorized) {
        return (
            <div>SUCCESS</div>
        )
    }

  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute