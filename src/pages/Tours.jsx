import React,{useState,useEffect} from 'react'
import { Container,Row,Col } from 'reactstrap'
import Commonsection from '../shared/Toursection/Commonsection'
import Tourcard from '../components/FeaturedTours/Tourcard'
// import tourData from '../assets/data/tours'
import Searchbar from '../shared/Searchbar'
import '../styles/Tour.css'
import '../components/Newsletter/Newsletter.css'
import Newsletter from '../components/Newsletter/Newsletter'
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config'
const Tours = () => {
  const [pageCount, setpageCount] = useState(0);
  const [page, setpage] = useState(0);

  const {data:tours,loading,error}= useFetch(`${BASE_URL}/tours?page=${page}`);
  const {data:tourCount}= useFetch(`${BASE_URL}/tours/search/getTourCount`);
  useEffect(()=>{
  const pages = Math.ceil(tourCount / 6);
  // console.log(pages);
  setpageCount(pages)
  // window.scrollTo(0,0);
  },[page,tourCount,tours]);
  return (
    <>
    <Commonsection title={'All Tours'}/>
    <section>
      <Container>
        <Row>
          <Searchbar/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        {loading && <h4 className='text-center pt-5'>Loading ....</h4>}
        {error && <h4 className='text-center pt-5'>Error ....</h4>}
        {!loading && !error && 
        <Row>
          {
            tours?.map(tour=>(
              <Col className='mb-4'lg='3' md='6' sm='6' key={tour._id}><Tourcard tour={tour}/></Col>
            ))}
            <Col lg='12'>
               {/* here we created and array and .keys() generates numerical value for the creatted array. */}
              {/* e.g.pagecount=1 Array(pageCount).keys() keys function will assing value 0 to that element.*/}
              <div className="pagination d-flex align-items-center justify-content-center mt-4 ">{[...Array(pageCount).keys()].map(number=>(
                <span className={page===number?"active__page":""} key={number} onClick={()=>setpage(number)}>{number+1}</span>
              ))}</div>
            </Col>
        </Row>}
      </Container>
    </section>
    {/* <section className='newsletter__section'> </section> */}
    <Newsletter className='newsletter__section'/>
    </>
  )
}

export default Tours