import React from 'react'
import Servicescard from './Servicescard';
import weatherImg from '../../assets/images/weather.png';
import guideImg from '../../assets/images/guide.png'
import customizationImg from '../../assets/images/customization.png'
import {Col} from 'reactstrap'

const servicesData=[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit "
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit "
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit "
    }
]
const Serviceslist = () => {
  return (
   <>
  {
    servicesData.map((el,i)=><Col lg='3' key={i} ><Servicescard item={el} /></Col>)
  }
   </>
  )
}

export default Serviceslist