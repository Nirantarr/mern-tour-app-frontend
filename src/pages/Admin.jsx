import React from 'react'
import '../styles/Admin.css'
import { Container,Row,Col,Button } from 'reactstrap'
import Commonsection from '../shared/Toursection/Commonsection'
import Newsletter from '../components/Newsletter/Newsletter'
import '../components/Newsletter/Newsletter.css'
import { Link } from 'react-router-dom'
export const Admin = () => {

    const Admin_links=[
        {
            path:'/admin/tour',
            display:"Tour"
        },
        {
            path:'/admin/booking',
            display:"Booking"
        },
        {
            path:'/admin/user',
            display:"User"
        },
        {
            path:'/admin/review',
            display:'Review'
        }
    ]
  return (
    <>
      <Commonsection title={'Admin Panel'}/>
   <section>
    <Container>
        <Row>
          <Col lg='12' className='Admin__col' >
          <div className='Admin__container d-flex justify-content-between '>
          {Admin_links.map((el,i)=>{
            return <Link to={el.path} ><Button className='btn Admin__btn' key={i}>{el.display}</Button></Link>
          })}
          </div>
          </Col>
        </Row>
    </Container>
   </section>
   <Newsletter className='newsletter__section'/>
   </> 
  )
}
