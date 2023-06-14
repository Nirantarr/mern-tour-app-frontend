import React from 'react'
import './Featuredtour.css'
import Tourcard from './Tourcard'
// import tourData from '../../assets/data/tours'
import {Col} from 'reactstrap'
import useFetch from '../../hooks/useFetch.js';
import { BASE_URL } from '../../utils/config'

const Featuredtourlist = () => {
  const {data:featuredTours, loading,error} =  useFetch(`${BASE_URL}/tours/search/getFeaturedTour`)
  const Data = featuredTours;
  console.log(featuredTours);
  return (
    <>
    {loading && <h2>Loading ..............</h2>}
    {error && <h2>An Error Occured............</h2>}
    {!loading && !error && Data?.map((el)=>(
        <Col lg='3' className='mb-4' key={el._id}>
            <Tourcard tour={el}/>
        </Col>
    ))}
    </>
  )
}

export default Featuredtourlist