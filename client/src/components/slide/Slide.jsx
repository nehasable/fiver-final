// import Slider from "react-slick";
// import CatCard from "../../components/catCard/CatCard"
import {cards} from "../../data"
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Pagination, Scrollbar } from 'swiper/modules'
import "./Slide.css"
import PropTypes from 'prop-types';
// import { Navigation } from 'swiper';
// Swiper.use([Navigation]);
const Slide = ({data, CardComponent}) => {
  console.log(cards)
  return (
    <>
    <div className="slide">
    <div className="slide-container">
       <Swiper
        modules={[ Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    
    >  
    
    {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CardComponent item={item} />
            </SwiperSlide>
          ))}
         
      
      
    </Swiper>
    
    </div>
    </div>
    </>
  )
}
Slide.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  CardComponent: PropTypes.elementType.isRequired,
};

export default Slide