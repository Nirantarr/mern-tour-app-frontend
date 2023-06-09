import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResult from '../pages/SearchResult'
import TourDetails from '../pages/TourDetails'
import Tours from '../pages/Tours'
import Tourbooked from '../components/BookinConfirmed/Tourbooked'

const Router = () => {
  return (
 <Routes>
    <Route path='/' element={<Navigate to='/home' />} />
    <Route exact path='/home' element={<Home/>}/>
    <Route  exact path='/tours' element={<Tours/>}/>
    <Route path='/tours/:id' element={<TourDetails/>}/>
    <Route path='/tour-booked' element={<Tourbooked/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/tours/search' element={<SearchResult/>}/>
 </Routes>
  )
}

export default Router