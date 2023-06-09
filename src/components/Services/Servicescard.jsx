import React from 'react'
import './Services-card.css';
const Servicescard = ({item}) => {
    const {title, imgUrl, des} = item;
  return (
    <div className="service__item ">
        <div className="service__img">
            <img src={imgUrl} alt=""/>
        </div>
            <h5>{title}</h5>
            <p>{des}</p>
    </div>
  )
}

export default Servicescard