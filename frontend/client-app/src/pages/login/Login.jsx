import React from 'react'
import "./Login.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className='main-container'> 
      <h2>Sign in to Newsstand</h2>
      <div className='login-container'>
        <Form className='form-container'>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" size='lg'/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" size='lg'/>
          </Form.Group>
        </Form>

        <Button variant="dark" type="submit">
            Sign in
        </Button>

        <div className='to-register'>
          <p>Dont't have an account?</p>
          <a href="" onClick={() => navigate("/register")}>Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default Login