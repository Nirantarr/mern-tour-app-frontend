import React,{useState,useContext} from 'react'
import './Bookingtour.css'
import { Form,FormGroup,ListGroup,ListGroupItem,Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext.js';
import { BASE_URL } from '../../utils/config';
// import { Link } from 'react-router-dom'
const Bookingtour = ({tour,roundedRating}) => {
    const {price,reviews,maxGroupSize,title} = tour;
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const [credentials, setcredentials] = useState({
        userId:user && user._id,
        userEmail:user && user.email,
        tourName: title,
        fullName:'',
        phone:undefined,
        guestSize:undefined,
        bookAt:''
    })
    const handleChange=(e)=>{
        setcredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    }
    const handleClick =async (e)=>{
        e.preventDefault();
        console.log("first credentials",credentials)
        if(!user|| user===undefined||user===null){
            alert("Please sign in to Book tour.")
        }
        try {
            const res = await fetch(`${BASE_URL}/booking`,{
                method:'post',
                headers:{
                    'content-type':'application/json',
                },
                credentials:'include',
                body:JSON.stringify(credentials),
            });
            const result = await res.json();
            if(res){
                alert(result.message);
              navigate('/tour-booked');
            }else{
                alert(result.message);
            }
            
        } catch (error) {
            alert(error.message);
        }
      
    }
    const serviceFee =10;
    const totalFees = Number(price)* Number(credentials.guestSize)+Number(serviceFee);
  return (
    <div className='booking'>
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>${price}<span>/Per Person</span></h3>
            <span className='tour__rating d-flex align-items-center'>
                  <i class="ri-star-fill" style={{'color':'var(--secondary-color)'}} ></i>{roundedRating===0?null:roundedRating}   ({reviews?.length})
                  </span>
        </div>
        <div className="booking__form">
            <h5>Information</h5>
            <Form onSubmit={handleClick}className='booking__info-form'>
                <FormGroup>
                    <input type='text' placeholder='Full Name ' id="fullName" required onChange={(e)=>handleChange(e)} />
                </FormGroup>
                <FormGroup>
                    <input type='number' placeholder='Phone no ' id="phone" required onChange={(e)=>handleChange(e)} />
                </FormGroup>
                <FormGroup>
                    <input type='text' placeholder='Email ' id="userEmail" required onChange={(e)=>handleChange(e)} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type='date' placeholder='' id="bookAt" required onChange={(e)=>handleChange(e)} />
                    <input type='number' placeholder='Total People' id='guestSize' required max={maxGroupSize} onChange={(e)=>handleChange(e)} />
                </FormGroup>
            </Form>
        </div>
        <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>${price}<i class="ri-close-line"></i> 1 Person</h5>
                    <span>${price}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                    <h5>Service Charge</h5>
                    <span>${serviceFee}</span>
                </ListGroupItem>
                <ListGroupItem className=' total border-0 px-0'>
                    <h5>Total</h5>
                    <span>${totalFees}</span>
                </ListGroupItem>
            </ListGroup>
            <Button className='btn primary__btn w-100 mt-4' onClick={credentials?handleClick:alert("Fill Required Values")}>Book</Button>
        </div>
    </div>
  )
}

export default Bookingtour