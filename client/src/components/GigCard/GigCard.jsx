import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import "./GigCard.css"

const GigCard = ({item}) => {
    console.log(item)
  return (
    <Link to="/gig/Ai" className="link">
    <div className="gig-card">
    <div className="gigcard-container">
    <div className="work">
        <img  src={item.img} alt=""></img>
        </div>
        <div className="gigcard-profile">
          <div className="gigcard-user">
            <img src={item.pp} alt=""></img>
            <span>{item.username}</span>
            </div>
            <span>{item.desc}</span>
            <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{item.star}</span>
            </div>
        </div>
        <div className="gigcard-price">
        <span> STARTING AT</span>
        <h2>$ {item.price}</h2>

        </div>
    </div>
      
    </div>
    </Link>
  )
}
GigCard.propTypes = {
    item: PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      pp: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      star: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  };

export default GigCard
