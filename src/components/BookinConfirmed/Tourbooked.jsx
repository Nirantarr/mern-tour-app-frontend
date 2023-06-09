import React from 'react'
import './Thank-you.css'
import { Row,Container,Col,Button } from 'reactstrap'
import { Link } from 'react-router-dom'
const Tourbooked = () => {
  return (
   <section>
    <Container>
      <Row>
        <Col lg='12' className='pt-5 text-center'>
         <div className="thank__you">
          <span>
          <i class="ri-checkbox-circle-fill"></i>
          </span>
          <h1 className='mb-3 fw-semibold'>Thank You</h1>
         <h3>Hooray..!<br/>Your Tour Is Successfully Booked.</h3>
         <Button className='btn primary__btn w-30'>
          <Link to='/home'>Go to Home</Link></Button>
         </div>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Tourbooked