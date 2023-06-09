import React from 'react'
import {Container, Row, Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './Header.css';
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
const Header = () => {
  return (
  <header className="header" >
    <Container>
      <Row>
        <div className='nav_wrapper d-flex align-items-center justify-content-between'>
          {/* ==========logo start========== */}
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          {/*========== Menu Start ==========*/}
          <div className="navigation">
            <ul className='menu d-flex align-items-center gap-5'>
              {
                nav__links.map((el,i)=>(
                  <li key={i} className='nav__item'>
                    <NavLink to={el.path} className={navClass=>navClass.isActive ? 'active__link':""} >{el.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* ==========menu end ============ */}
          <div className='nav__right d-flex align-items-center gap-4'>
            <div className='nav__btns d-flex align-items-center gap-4'>
              <Button className='btn secondary__btn'>
                <Link to='/login'>Login</Link>
              </Button>
              <Button className='btn primary__btn'>
                <Link to='/register'>Register</Link>
              </Button>
            </div>
            <span className='mobile__menu'>
            <i class="ri-menu-3-line"></i>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
  )
}

export default Header