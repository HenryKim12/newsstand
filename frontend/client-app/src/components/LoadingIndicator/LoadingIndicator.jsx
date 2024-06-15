import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import "./LoadingIndicator.css"

function LoadingIndicator() {
  return (
    <div className='spinner-container'>
        <Spinner animation="border" role="status" className='spinner' >
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
    
  )
}

export default LoadingIndicator