import React,{useState,useEffect} from 'react'
import { Container,Row,Col } from 'reactstrap'
import Commonsection from '../shared/Toursection/Commonsection'
import Tourcard from '../components/FeaturedTours/Tourcard'
import tourData from '../assets/data/tours'
import Searchbar from '../shared/Searchbar'
import '../styles/Tour.css'
import '../components/Newsletter/Newsletter.css'
import Newsletter from '../components/Newsletter/Newsletter'
const Tours = () => {
  const [pageCount, setpageCount] = useState(0);
  const [page, setpage] = useState(0);

  useEffect(()=>{
  const pages = Math.ceil(15 / 5);
  // console.log(pages);
  setpageCount(pages)
  },[page]);
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
        <Row>
          {
            tourData?.map(tour=>(
              <Col className='mb-4'lg='3'key={tour.id}><Tourcard tour={tour}/></Col>
            ))}
            <Col lg='12'>
               {/* here we created and array and .keys() generates numerical value for the creatted array. */}
              {/* e.g.pagecount=1 Array(pageCount).keys() keys function will assing value 0 to that element.*/}
              <div className="pagination d-flex align-items-center justify-content-center mt-4 ">{[...Array(pageCount).keys()].map(number=>(
                <span className={page===number?"active__page":""} key={number} onClick={()=>setpage(number)}>{number+1}</span>
              ))}</div>
            </Col>
        </Row>
      </Container>
    </section>
    {/* <section className='newsletter__section'> </section> */}
    <Newsletter className='newsletter__section'/>
    </>
  )
}

export default Tours