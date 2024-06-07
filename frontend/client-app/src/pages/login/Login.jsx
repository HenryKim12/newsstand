import React from 'react'
import "./Login.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className='main-container'> 
      <h2>Sign in to Newsstand</h2>
      
      <Form className='form-container'>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Form>

      <Button variant="primary" type="submit">
          Sign in
      </Button>

      <div className='to-register'>
        <p>Dont't have an account?</p>
        <a href="" onClick={() => navigate("/register")}>Sign Up</a>
      </div>
    </div>
  )
}

export default Login