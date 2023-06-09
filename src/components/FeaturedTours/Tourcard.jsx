import React from 'react'
import { Card,CardBody } from 'reactstrap'
import {Link} from 'react-router-dom'
import './Featuredtour.css'
import calculateAvgRating from '../../utils/avgRating'
const Tourcard = ({tour}) => {
  const {_id, title, city, price,reviews, featured, photo} = tour;
  const {totalRating, roundedRating} = calculateAvgRating(reviews);
  return (
   <>
   <div className='tour__card'>
    <Card>
      <div className="tour__img">
        <img src={photo} alt="img"/>
        {featured &&<span>Featured</span>}
      </div>
    </Card>
    <CardBody>
      <div className="card__top d-flex align-items-center justify-content-between">
        <span className='tour__location d-flex align-items-center gap-1'>
        <i class="ri-map-pin-line"></i>{city}
          </span> 
        <span className='tour__rating d-flex align-items-center gap-1'>
        <i class="ri-star-fill"></i>{roundedRating===0?null:roundedRating}{totalRating===0?'Not Rated':<span>({reviews.length})</span>}
          </span> 
      </div>
      <h5 className='tour__title'>
        <Link to={`/tours/${_id}`}>{title}</Link>
      </h5>
      <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
        <h5>${price}<span>/Per Person</span></h5>
        <button className='booking__btn'><Link to={`/tours/${_id}`}>Book Now</Link></button>
      </div>
    </CardBody>
   </div>
   </>
  )
}

export default Tourcard