import React,{useState} from 'react'
import { Container,Row,Col,Form,FormGroup,Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/Login.css'
import loginImg from '../assets/images/login.png'
import userImg from '../assets/images/user.png'
const Login = () => {
  const [credentials, setcredentials] = useState({
    email:undefined,
    password:undefined
  })
  const handleChange=(e)=>{
 setcredentials(prev=> ({...prev,[e.target.id]:e.target.value}))
  }
  const handleClick=(e)=>{
    e.preventDefault();
  }
  return (
   <section>
    <Container>
      <Row>
        <Col lg='8' className='m-auto'>
          <div className="login__customer d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt="loginImg"/>
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userImg} alt="userImg"/>
              </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type='email' id="email" onChange={handleChange}placeholder='Email' required/>
                    </FormGroup>            
                  <FormGroup>
                    <input type='password' id="password" onChange={handleChange}placeholder='Password' required/>
                    </FormGroup>
                    <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                     <p>Don't have Account?<br/><Link to='/register'>Create Account</Link></p>
                    </Form>            
            </div>

          </div>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Login