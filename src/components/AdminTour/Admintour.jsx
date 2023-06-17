import React, { useState, useEffect,useContext } from 'react'
import './Admintour.css'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { BASE_URL } from '../../utils/config'
import useFetch from '../../hooks/useFetch'
import Tourcard from '../FeaturedTours/Tourcard'
import { AuthContext } from '../../context/AuthContext'
// import '../Booking/Bookingtour.css'

export const Admintour = () => {
    const [gettour, setgettour] = useState(false);
    const [getfeaturedtour, setgetfeaturedtour] = useState(false);
    const [gettourcount, setgettourcount] = useState(false);
    const [getupdatetour, setgetupdatetour] = useState(false);
    const [getdeletetour, setgetdeletetour] = useState(false)
    const [id, setid] = useState(null);
    const [credentials, setcredentials] = useState({
        title:'',
        city:'',
        address:'',
        distance:null,
        photo: '',
        desc:'',
        price:undefined,
        maxGroupSize:undefined,
        featured:undefined
        
    })
    const {user}= useContext(AuthContext)
    const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours`)
    const { data: featuredTour } = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`)
    const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`)
    // const tour = false;

    const getTour = () => {
        setgettour(true);
        setgetfeaturedtour(false);
        setgettourcount(false);
        setgetupdatetour(false);
    }
    const getFeaturedTour = () => {
        setgettour(false);
        setgetfeaturedtour(true);
        setgettourcount(false);
        setgetupdatetour(false);
    }
    const getTourCount=()=>{
        setgettour(false);
        setgetfeaturedtour(false);
        setgettourcount(true);
        setgetupdatetour(false);
    }
    const getUpdateTour=()=>{
        setgettour(false);
        setgetfeaturedtour(false);
        setgettourcount(false);
        setgetupdatetour(true);
    }

    const handleChange=(e)=>{
        setcredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    }
   
    const handleClick=async(e)=>{
        e.preventDefault();
        if(!user|| user===undefined||user===null){
            alert("Please sign in to Book tour.")
            return ;
        }
         if( credentials.title === '' ||
        credentials.city === '' ||
        credentials.address === '' ||
        credentials.distance === undefined ||
        credentials.photo === '' ||
        credentials.desc === '' ||
        credentials.price === undefined ||
        credentials.maxGroupSize === undefined ||
        credentials.featured === undefined){
            alert("All Fields are required *");
            return ;
        }
        try {
            console.log(credentials);
            const res = await fetch(`${BASE_URL}/tours`,{
                method:'post',
                headers:{
                    'content-type':'application/json',
                },
                credentials:'include',
                body:JSON.stringify(credentials)
            })
            const result = await res.json();
            if(!result){
                alert(result.message);
            }else{
                alert(result.message);
            }
        } catch (error) {
            alert("try-catch",error.message);
        }
    }
    
    const handleChangeId=(e)=>{
        setid(e);
    }
    const handleClickDelete=async(e)=>{
        e.preventDefault();
        if(!user|| user===undefined||user===null){
            alert("Please sign in to get Tour.")
            return ;
        }
         
        try {
            const res = await fetch(`${BASE_URL}/tours/${id}`,{
                method:'get',
                headers:{
                    'content-type':'application/json',
                },
                credentials:'include'
            })
            const result = await res.json();
            if(!result){
                alert(result.message);
            }else{
                alert(result.message);
            }
        } catch (error) {
            
        }
    }
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='Admin__heading-col'>
                        <div className='heading   w-100'>
                            <h2 className='align-items-center justify-content-center ' >Fetch All your Tour Api's.</h2>
                        </div>

                    </Col>

                    <Col lg='8' className='Admin__form'>
                        <Form className='Admin__info-form ' onSubmit={handleClick} >
                            <FormGroup className='Admin__formgroup' >
                                <input type='text' placeholder='Tour Title' id='title' required onChange={(e)=>handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <input type='text' placeholder='City' id='city' required onChange={(e)=>handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <input type='text' placeholder='Address' id='address' required onChange={(e)=>handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <input type='number' placeholder='Distance' id='distance' required onChange={(e)=>handleChange(e)}  />
                            </FormGroup>
                            <FormGroup>
                                <input type='text' placeholder='Photo' id='photo' required onChange={(e)=>handleChange(e)}  />
                            </FormGroup>
                            <FormGroup>
                                <input type='text' placeholder='Description' id='desc' required onChange={(e)=>handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <input type='number' placeholder='Price' id='price' required onChange={(e)=>handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <input type='number' placeholder='Max Group Size' id='maxGroupSize' required onChange={(e)=>handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <input type='boolean' placeholder='Featured' id='featured' required onChange={(e)=>handleChange(e)} />
                            </FormGroup>
                        </Form>
                        {/* <Button className='btn btn-primary' onClick={handleClick} ></Button> */}
                    </Col>
                    <Col lg='4' className='Admin__btn-col' >
                        <div className='Admin__button' >
                            <input  placeholder='Tour Id' required id='id' onChange={(e)=>handleChangeId(e)} />
                        </div>
                        <div className='Admin__buttons d-flex ' >
                        <Button onClick={handleClick} >Create Tour </Button>
                        <Button >Update Tour </Button>
                        <Button onClick={handleClickDelete} >Delete Tour </Button>
                        <Button onClick={getTour} >Get All Tour </Button>
                        <Button>Get Single Tour </Button>
                        <Button onClick={getFeaturedTour} >Get Featured Tour </Button>
                        <Button onClick={getTourCount} >Get Tour Count </Button>
                        </div>
                    </Col>

                    {gettour &&
                        <>
                            {loading && <h2>Loading...</h2>}
                            {error && <h2>Error...</h2>}
                            {!loading && !error &&
                                <>
                                    {tour?.map(tour => (
                                        <Col className='mb-4' lg='3' key={tour._id}>
                                            <Tourcard tour={tour} />
                                        </Col>
                                    ))}
                                </>
                            }
                        </>
                    }
                    {getfeaturedtour &&
                        <>
                            {loading && <h2>Loading...</h2>}
                            {error && <h2>Error...</h2>}
                            {!loading && !error &&
                                <>
                                    {featuredTour?.map(tour => (
                                        <Col className='mb-4' lg='3' key={tour._id}>
                                            <Tourcard tour={tour} />
                                        </Col>
                                    ))}
                                </>
                            }
                        </>
                    }
                    {gettourcount &&
                        <>
                            {loading && <h2>Loading...</h2>}
                            {error && <h2>Error...</h2>}
                            {!loading && !error &&
                                <>
                                <div className='gettourcount'>
                                    <h2>{tourCount} Tours</h2>
                                </div>
                                </>
                            }
                        </>
                    }
                    {getupdatetour &&
                    <> 
                      {loading && <h2>Loading...</h2>}
                      {error && <h2>Error...</h2>}
                      {!loading && !error &&
                        <>
                        <div className='gettourcount'>
                        <h2>Tour Updated Successfully</h2>
                        </div>
                        </>
                        }
                        </>}


                </Row>
            </Container>
        </section>
    )
}
