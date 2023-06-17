import React from 'react'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footercomponent = () => {
  const nav__links=[
    {
      path:'/home',
      display:'Home'
    },
    {
      path:'/about',
      display:'About'
    },
    {
      path:'/tours',
      display:'Tours'
    }
  ];
  const quick__links=[
    {
      path:'/gallery',
      display:'Gallery'
    },
    {
      path:'/login',
      display:'Login'
    },
    {
      path:'/register',
      display:'Register'
    }
  ];
  const date = new Date().getFullYear();

  return (
  
  <section className='footer'>
    <Container >
      <Row>
        <Col lg='3'>
          <div className='logo'>
            <img src={logo} alt="img"/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, voluptatum molestiast?</p>
            <div className='social__links d-flex align-items-center gap-4'>
              <span><Link  to='#'><i class="ri-github-fill"></i></Link></span>
              <span><Link  to='#'><i class="ri-linkedin-box-fill"></i></Link></span>
              <span><Link  to='#'><i class="ri-medium-fill"></i></Link></span>
            </div>
          </div>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'>Discover</h5>
          <ListGroup className='footer__quick-links'>
            {
              nav__links.map((el,i)=>(
                <ListGroupItem key={i} className='ps-0 border-0'><Link to={el.path}>{el.display}</Link></ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3' >
        <h5 className='footer__link-title'>Links</h5>
          <ListGroup className='footer__quick-links '>
            {
              quick__links.map((el,i)=>(
                <ListGroupItem key={i} className='ps-0 border-0 '><Link to={el.path}>{el.display}</Link></ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
        <h5 className='footer__link-title'>Contact</h5>
          <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'><h6 className='mb-0 d-flex aling-items-center gap-2'><span><i class="ri-map-pin-5-fill"></i></span>Address:</h6>
            <p className='mb-0'>Maharashtra,India.</p></ListGroupItem>

          <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'><h6 className='mb-0 d-flex aling-items-center gap-2'><span><i class="ri-mail-fill"></i></span>Email:</h6>
            <p className='mb-0'>nirantar.m844@gmail.com</p></ListGroupItem>

          <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'><h6 className='mb-0 d-flex aling-items-center gap-2'><span><i class="ri-phone-fill"></i></span>Phone:</h6>
            <p className='mb-0'>+91 1234512345</p></ListGroupItem>
        </Col>
        <Col lg='12' className='text-center pt-3'>
             <p className='footer__copyright'>Copyright {date} Made with love by Nirantar<span><i class="ri-heart-fill"></i></span> </p>
        </Col>
      </Row>
    </Container>
    </section>

  )
}

export default Footercomponent