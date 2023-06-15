import React,{useState,useContext} from 'react'
import { Container,Row,Col,Form,FormGroup,Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/Login.css'
import registerImg from '../assets/images/register.png'
import { BASE_URL } from '../utils/config'
import userImg from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const [credentials, setcredentials] = useState({
    username:undefined,
    email:undefined,
    password:undefined,
  })
  const {dispatch}=useContext(AuthContext);
  const navigate =useNavigate();
  const handleChange=(e)=>{
 setcredentials(prev=> ({...prev,[e.target.id]:e.target.value}))
  }
  const handleClick=async(e)=>{
    e.preventDefault();
    // console.log("thi is credential",credentials);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(credentials)
      })
      const result = await res.json();
      console.log(result);
      if(!res.ok) alert(result.message);
      dispatch({type:"REGISTER_SUCCESS"});
      navigate("/Login");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
   <section>
    <Container>
      <Row>
        <Col lg='8' className='m-auto'>
          <div className="login__customer d-flex justify-content-between">
            <div className="login__img">
              <img src={registerImg} alt="loginImg"/>
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userImg} alt="userImg"/>
              </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type='userName' id="username" onChange={handleChange}placeholder='UserName' required/>
                    </FormGroup>            
                  <FormGroup>
                    <input type='email' id="email" onChange={handleChange}placeholder='Email' required/>
                    </FormGroup>            
                  <FormGroup>
                    <input type='password' id="password" onChange={handleChange}placeholder='Password' required/>
                    </FormGroup>
                    <Button className='btn secondary__btn auth__btn' type='submit'>Register</Button>
                     <p> Have a Account?<br/><Link to='/login'>Login</Link></p>
                    </Form>            
            </div>

          </div>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Register