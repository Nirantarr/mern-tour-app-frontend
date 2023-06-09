import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import '../../styles/Home.css'
const Testimonials = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed: 1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                },
            },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
    }
  return (
    <section >
   <Slider {...settings} >
    <div className="testimonial py-4 px-3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, commodi ut facere eos sit voluptatem? Eum maxime, natus suscipit qui ratione quia doloribus nihil officiis voluptatum eligendi laudantium dicta ex!</p>
    <div className='d-flex align-items-center gap-4 mt-3'>
        <img className='w-25 h-25 rounded-2'src={ava01} alt="img"></img>
        <div>
            <h6 className='mb-0 mt-3'>Jogn Doe</h6></div></div></div>
    <div className="testimonial py-4 px-3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, commodi ut facere eos sit voluptatem? Eum maxime, natus suscipit qui ratione quia doloribus nihil officiis voluptatum eligendi laudantium dicta ex!</p>
    <div className='d-flex align-items-center gap-4 mt-3'>
        <img className='w-25 h-25 rounded-2'src={ava02} alt="img"></img>
        <div>
            <h6 className='mb-0 mt-3'>Jogn Doe</h6></div></div></div>
    <div className="testimonial py-4 px-3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, commodi ut facere eos sit voluptatem? Eum maxime, natus suscipit qui ratione quia doloribus nihil officiis voluptatum eligendi laudantium dicta ex!</p>
    <div className='d-flex align-items-center gap-4 mt-3'>
        <img className='w-25 h-25 rounded-2'src={ava03} alt="img"></img>
        <div>
            <h6 className='mb-0 mt-3'>lion fan</h6></div></div></div>
    <div className="testimonial py-4 px-3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, commodi ut facere eos sit voluptatem? Eum maxime, natus suscipit qui ratione quia doloribus nihil officiis voluptatum eligendi laudantium dicta ex!</p>
    <div className='d-flex align-items-center gap-4 mt-3'>
        <img className='w-25 h-25 rounded-2'src={ava03} alt="img"></img>
        <div>
            <h6 className='mb-0 mt-3'>americano fd</h6></div></div></div>
    <div className="testimonial py-4 px-3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, commodi ut facere eos sit voluptatem? Eum maxime, natus suscipit qui ratione quia doloribus nihil officiis voluptatum eligendi laudantium dicta ex!</p>
    <div className='d-flex align-items-center gap-4 mt-3'>
        <img className='w-25 h-25 rounded-2'src={ava03} alt="img"></img>
        <div>
            <h6 className='mb-0 mt-3'>cz binan</h6></div></div></div>
   </Slider>
   </section>
  )
}

export default Testimonials