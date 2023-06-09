import React from 'react'
import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
import Footercomponent from '../Footer/Footercomponent'
import Routes from '../../routes/Router'
const Layout = () => {
  return (
 <>
 <Header/>
 <Routes/>
 <Footercomponent/>
 {/* <Footer/> */}
 </>
  )
}

export default Layout