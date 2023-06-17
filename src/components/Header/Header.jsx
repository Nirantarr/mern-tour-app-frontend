import React, { useContext, useRef, useState,useEffect } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './Header.css';
import { AuthContext } from '../../context/AuthContext';
// import Togglebutton from '../ThemeButton/Themebutton.js';
import '../ThemeButton/themebutton.css';
const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
  {
    path:'/admin',
    display:'Admin'
  }
];
const Header = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const menuRef = useRef(null);
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/');
  }

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu")
  }

  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <header className="header1" >
      <Container>
        <Row>
          <div className='nav_wrapper d-flex align-items-center'>
            {/* ==========logo start========== */}
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            {/*========== Menu Start ==========*/}
            <div className="navigation" ref={menuRef} onClick={toggleMenu} >
              <ul className='menu d-flex align-items-center gap-5'>
                {
                  nav__links.map((el, i) => (
                    <li key={i} className='nav__item'>
                      <NavLink to={el.path} className={navClass => navClass.isActive ? 'active__link' : ""} >{el.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* ==========menu end ============ */}
            <div className='nav__right d-flex align-items-center gap-4'>
              <div className='nav__btns d-flex align-items-center gap-4'>
                {user ?
                  (<><h5 className='mb-0'>{user.username}</h5><Button onClick={logout} >Logout</Button></>) : (<> <Button className='btn secondary__btn'>
                    <Link to='/login'>Login</Link>
                  </Button>
                    <Button className='btn primary__btn'>
                      <Link to='/register'>Register</Link>
                    </Button></>)
                }
              </div>
              {/* ======================Dark mode button ================== */}
              <span className='theme__button' >
                <label className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`}>
                  <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
                  <span className="slider round"></span>
                </label>
              </span>
              {/* ======================Dark mode end ================== */}
              <span className='mobile__menu' onClick={toggleMenu} >
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