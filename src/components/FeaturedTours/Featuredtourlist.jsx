import React from 'react'
import './Featuredtour.css'
import Tourcard from './Tourcard'
import tourData from '../../assets/data/tours'
import {Col} from 'reactstrap'
const Featuredtourlist = () => {
  return (
    <>
    {tourData?.map((el)=>(
        <Col lg='3' className='mb-4' key={el.id}>
            <Tourcard tour={el}/>
        </Col>
    ))}
    </>
  )
}

export default Featuredtourlist