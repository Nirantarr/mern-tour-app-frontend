import React,{useState} from 'react'
import Commonsection from '../shared/Toursection/Commonsection'
import { Container,Row,Col } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import Tourcard from '../components/FeaturedTours/Tourcard'
const SearchResult = () => {
    const location = useLocation();
    const [data] = useState(location.state);
    console.log(data);
  return (
    <>
    <Commonsection title="Tour Search Result"/>
    <section>
        <Container>
            <Row>
                {data.length===0?(<h4 className='text-center' >No tour found</h4>):(data?.map(tour=>(
                    <Col lg='3' className='mb-4' key={tour._id}><Tourcard tour={tour}/></Col>
                )))}
            </Row>
        </Container>
    </section>
    </>
  )
}

export default SearchResult