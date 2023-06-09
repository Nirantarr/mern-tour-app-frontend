import React from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImage from './ImageGallery'
import '../../styles/Home.css'
const Masonaryimagegallery = () => {
  return (
   <ResponsiveMasonry  columnsCountBreakPoints={{350:1, 768:3, 992:3}}>
    {/* <!-- columnsCountBreakPoinst tell that at below 350px 1 column will show , 350px-768px 3columns, 768-992px 4 columns --> */}
     <Masonry gutter='1rem'>
        {galleryImage.map((el,i)=>(
            <img className='masonry__img' src={el} key={i} alt="img" style={{'width':'100%', 'display':'block','borderRadius':'10px'}}></img>
        ))}
     </Masonry>
   </ResponsiveMasonry>
  )
}

export default Masonaryimagegallery