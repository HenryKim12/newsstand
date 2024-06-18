import React from 'react'
import Button from "react-bootstrap/Button"
import "./GoToLoginPage.css"
import { SiProbot } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

function GoToLoginPage() {
  const navigate = useNavigate();
  return (
    <div className='goToLogin-container'>
      <div className='inner-container'>
        <SiProbot size={100} style={{marginBottom: "2rem"}}/>
        <h1 style={{marginBottom: "1rem"}} >Please login to access this page.</h1>
        <div>
          <Button variant='dark' style={{marginRight: "10px"}} onClick={() => navigate("/login")} >Login</Button>
          <Button variant='light' style={{marginLeft: "10px"}} onClick={() => navigate("/register")}  >Sign Up</Button>
        </div>
      </div>
    </div>
  )
}

export default GoToLoginPage