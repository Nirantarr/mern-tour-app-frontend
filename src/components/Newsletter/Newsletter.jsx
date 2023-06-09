import React from 'react'
import './Newsletter.css'
import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../../assets/images/male-tourist.png'
const Newsletter = () => {
  return (
    <section className='newsletter__section' >
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content"><h2>Subscribe to get Travellings Information</h2></div>
                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your Email'/>
                        <button className='btn newsletter__btn'>Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi voluptas sequi sed, laborum cumque vitae incidunt neque cum possimus laboriosam dolor nemo? Exercitationem cumque, aut sequi officia quos nulla!</p>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="img"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter