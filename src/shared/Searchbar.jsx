import React,{useRef} from 'react'
import './Searchbar.css'
import {Col, Form, FormGroup} from 'reactstrap'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {

   const locationRef= useRef('');
   const distanceRef=useRef(null);
   const groupSizeRef= useRef(null);
   const navigate = useNavigate();

    const searchHandler =async ()=>{
      const location = locationRef.current;
      const distance = distanceRef.current;
      const size = groupSizeRef.current;
      if(!location|| !distance ||!size){
        alert("Fields cannot be Empty!");
        // return;
     }
     const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${size}`);

     if(!res.ok) {
        return alert("something went wrong");
     }
     const result = await res.json();
     navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${size}`,{state:result.data});
}

  return (
    <Col lg='12'>
        <div className="search__bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast' >
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type='text' placeholder='Where are you going?' onChange={(e)=>locationRef.current=e.target.value} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast' >
                    <span><i class="ri-pin-distance-line"></i></span>
                    <div>
                        <h6>Distance</h6>
                        <input type='number' placeholder='0 Kms'  onChange={(e)=>distanceRef.current=e.target.value} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group' >
                    <span><i class="ri-group-line"></i></span>
                    <div>
                        <h6>Max People</h6>
                        <input type='number' placeholder='0' onChange={(e)=>groupSizeRef.current = e.target.value} />
                    </div>
                </FormGroup>
                <span className='search__icon' onClick={()=>searchHandler()} ><i class="ri-search-2-line"></i></span>
                
            </Form>
        </div>
    </Col>
  )
}

export default Searchbar