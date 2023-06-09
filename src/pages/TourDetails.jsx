import React,{useState,useRef} from 'react'
import { Container,Row,Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import avatar from '../assets/images/avatar.jpg'
import calculateAvgRating from '../utils/avgRating'
import Bookingtour from '../components/Booking/Bookingtour'
import '../styles/TourDetails.css'
const TourDetails = () => {
  const params = useParams();
  const id = params.id;
  const tour = tourData.find(tour=>tour.id===id);
  const {photo,title,desc,price,reviews,city,distance,maxGroupSize}=tour;
  const {roundedRating,totalRating} = calculateAvgRating(reviews)
  const options = {day:"numeric", month:'long', year:'numeric'};
 const date = new Date("06-08-2023").toLocaleDateString("en-US",options);

 const reviewRef = useRef("");
 const [tourRating, settourRating] = useState(null);
 const submitHandler=(e)=>{
  e.preventDefault();
  const reviewText = reviewRef.current.value;
  alert(`${tourRating} and ${reviewText}`);
 }
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className='tour__content'>
              <img src={photo} alt="img"/>
              <div className='tour__info'>
                <h2>{title}</h2>
                <div className='d-flex align-items-center gap-5'>
                  <span className='tour__rating d-flex align-items-center gap-1'>
                  <i class="ri-star-fill" style={{'color':'var(--secondary-color)'}} ></i>{roundedRating===0?null:roundedRating}{totalRating===0?'Not Rated':<span>({reviews?.length})</span>}
                  </span>
                  <span><i class="ri-map-pin-line"></i>{city}</span>
                </div>
                  <div className="tour__extra-details">
                    <span><i class="ri-money-dollar-circle-line"></i>{price}/Per Person</span>
                  <span><i class="ri-group-line"></i>{maxGroupSize}/ Max People per tour</span>
                  <span><i class="ri-pin-distance-line"></i>{distance} /km</span>
                 </div>
                  <h5>Description</h5>
                  <p>{desc?desc:"No Description"}</p>
              </div>
              <div className="tour__reviews mt-4">
                <h4>Reviews({reviews?.length}reviews)</h4>
                <Form onSubmit={submitHandler} >
                  <div className="tour__rating  d-flex text-align-center gap-3 ">
                    <span onClick={()=>settourRating(1)}>1<i class="ri-star-fill"></i></span>
                    <span onClick={()=>settourRating(2)}>2<i class="ri-star-fill"></i></span>
                    <span onClick={()=>settourRating(3)}>3<i class="ri-star-fill"></i></span>
                    <span onClick={()=>settourRating(4)}>4<i class="ri-star-fill"></i></span>
                    <span onClick={()=>settourRating(5)}>5<i class="ri-star-fill"></i></span>
                  </div>
                  <div className="review__input  ">
                    <input ref={reviewRef}type="text"placeholder='Share your experience' required />
                    <button className='btn primary__btn text white' type="submit">Submit</button>
                    
                  </div>
                </Form>
                <ListGroup className='user__reviews'>
                  {reviews?.map(el=>(
                    <div className="review__item">
                      <img src={avatar} alt="img"/>
                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>{el.name}</h5>
                            <p>{date}</p>
                          </div>
                          <span className='d-flex align-items-center'>5<i class="ri-star-fill"></i></span>
                        </div>
                        <h6>{el.comment}</h6>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <Bookingtour tour={tour} roundedRating={roundedRating} />
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default TourDetails