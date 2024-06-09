import React, {useState} from 'react'
import "./Register.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../api/apiClient';

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "", 
    username: "",
    email: "",
    password: ""
  })

  const registerUser = async (e) => {
    try {
      e.preventDefault();
      const res = await apiClient.post("/api/signup", formData)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    const {id, value} = e.target;
    const formType = id.toLowerCase().substring(4)

    setFormData((prevData) => ({
      ...prevData,
      [formType]: value
    }))
  }

  return (
    <div className='main-container'> 
      <h2>Sign up to Newsstand</h2>
      <Form className='form-container' onSubmit={registerUser}>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" onChange={handleChange} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="6+ characters" onChange={handleChange}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Create account
        </Button>
      </Form>

      <div className='to-login'>
        <p>Already have an account?</p>
        <a href="" onClick={() => navigate("/login")}>Sign In</a>
      </div>
    </div>
  )
}

export default Register