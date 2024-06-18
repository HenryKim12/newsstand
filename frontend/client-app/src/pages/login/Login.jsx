import React, {useState, useEffect} from 'react'
import "./Login.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import Popup from '../../components/Popup/Popup';
import Cookies from "js-cookie"

function Login() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const loginUser = async (e) => {
    try {
      e.preventDefault();
      const res = await apiClient.post("/api/login", formData)
      if (res.status == 200) {
        Cookies.set("isCookieSet", true)
        navigate("/")
        // re-render home page to load account + logout button
        navigate(0)
      }
    } catch (error) {
      console.log(error)
      setErrorMessage(error.response.data.message);
      setShowPopup(true)
    }
  }

  const handleInputs = (e) => {
    const {id, value} = e.target;
    const formType = id.toLowerCase().substring(4)

    setFormData((prevData) => ({
      ...prevData,
      [formType]: value
    }))
  }

  const handlePopup = (childShow) => {
    setShowPopup(childShow)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='main-container'> 
      <h2>Sign in to Newsstand</h2>
      {showPopup && <Popup handlePopup={handlePopup} title="Try again" message={errorMessage} />}
      <div className='login-container'>
        <Form className='login-form-container' onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formEmail" onChange={handleInputs}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" size='lg'/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword" onChange={handleInputs}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" size='lg'/>
          </Form.Group>

          <Button variant="dark" type="submit" className="login-button">
            Sign in
          </Button>
        </Form>
      </div>
      <div className='to-register'>
          <p>Dont't have an account?</p>
          <a href="" onClick={() => navigate("/register")}>Sign Up</a>
      </div>
    </div>
  )
}

export default Login