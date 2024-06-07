import React from 'react'
import "./Register.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate()

  return (
    <div className='main-container'> 
      <h2>Sign up to Newsstand</h2>
      <Form className='form-container'>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" />
          </Form.Group>
        </Row>

        {/* <div className='creds-container'> */}
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="6+ characters" />
          </Form.Group>
        {/* </div> */}
      </Form>
      <Button variant="primary" type="submit">
          Create account
      </Button>
      <div className='to-login'>
        <p>Already have an account?</p>
        <a href="" onClick={() => navigate("/login")}>Sign In</a>
      </div>
    </div>
  )
}

export default Register