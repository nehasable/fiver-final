import Slider from "react-slick";
import CatCard from "../../components/catCard/CatCard"
import {cards} from "../../data"
const Slide = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
      <Slider>
      {cards.map((card)=>{
        <CatCard item={card} key={card._id}/>

      })}
    </Slider>
      </div>
    </Slider>
  )
}

export default Slide