import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
const GigCard = ({item}) => {
    console.log(item)
  return (
    <Link to="/gig/Ai" className="link">
    <div className="gig-card">
    <div className="gigcard-container">
        <img src={item.img} alt=""></img>
        <div className="profile">
            <img src={item.pp} alt=""></img>
            <span>{item.username}</span>
            <span>{item.desc}</span>
            <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{item.star}</span>
            </div>
        </div>
        <div className="details">
        <span>{item.price}</span>

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
