import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import worldImg from '../assets/images/world.png'
import heroVideo from '../assets/images/hero-video.mp4'
import experienceImg from '../assets/images/experience.png'
import SubTitle from '../shared/Subtitle'
import Searchbar from '../shared/Searchbar'
import Serviceslist from '../components/Services/Serviceslist'
import Featuredtourlist from '../components/FeaturedTours/Featuredtourlist'
import Masonaryimagegallery from '../components/Imagegallery/Masonaryimagegallery'
import Testimonials from '../components/Testimonials/Testimonials'
import Newsletter from '../components/Newsletter/Newsletter'
import '../styles/Home.css'

const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='col__demo'>
            <div className="hero__content">
                <div className='hero__subtitle d-flex align-items-center'>
                  <SubTitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="Word_Img"/>
                </div>
                <h1>
                  Travelling opens the door to creating {""}
                  <span className='highlight'>memories</span>
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fugit eos, officia sunt laborum, pariatur aliquid fuga maxime deserunt sequi quis quia impedit, provident quidem! Iure ad similique eveniet voluptas?
                </p>
            </div>
          </Col>
          <Col lg='2' >
            <div className="hero__img-box">
              <img src={heroImg} alt="Img"/>
            </div>
          </Col>
          <Col lg='2'  >
            <div className="hero__img-box hero__video-box mt-4">
              <video src={heroVideo} controls alt="Img"/>
            </div>
          </Col>
          <Col lg='2' className='col__demo' >
            <div className="hero__img-box">
              <img src={heroImg02} alt="Img"/>
            </div>
          </Col>
          <Searchbar/>
        </Row>
      </Container>
    </section>
    <section className='con__demo' >
      <Container className='con__demo' >
        <Row  >
          <Col lg="3" className='con__demo'>
            <h5 className='services__subtitle' >What we serve</h5>
            <h2 className='services__title' >We offer our best services</h2>     
          </Col>
          <Serviceslist/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <SubTitle subtitle={"Explore"}/>
            <h2 className='featured__tour-title' >Our featured tours</h2>
          </Col>
          <Featuredtourlist/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <SubTitle subtitle={"Experience"}/>
              <h2>Great Experience result <br/> Quality Tour</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque vero quasi facilis? Eveniet earum omnis alias pisci eos.</p>
            </div><div className='counter__wrapper d-flex align-items-center gap-5'>
            <div className="counter__box">
              <span>8k+</span>
              <h6>Successful trips</h6>
            </div>
            <div className="counter__box">
              <span>2k+</span>
              <h6>Regular Clients</h6>
            </div>
            <div className="counter__box">
              <span>120+</span>
              <h6>Tourist Destinations</h6>
            </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="img"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section >
      <Container>
        <Row>
          <Col lg='12'>
            <SubTitle subtitle={"Gallery"}/>
            <h2 className='gallery__title'>Visit our tourist Gallery</h2>
          </Col>
          <Col lg='12'>
          <Masonaryimagegallery/>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <SubTitle subtitle={"Fans Love"}/>
            <h2 className='testimonials__title'>What our fans say about us</h2>
          </Col>
          <Testimonials/>
        </Row>
      </Container>
    </section>
    {/* <Newsletter/> */}
    <section  >
      <Newsletter/>
    </section>
    </>
  )
}

export default Home