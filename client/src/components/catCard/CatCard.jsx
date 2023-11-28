import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import "./CatCard.css"

const CatCard = ({item}) => {
  console.log(item);
  console.log(item.title, item.desc);
  return (
    <Link to="/gigs?cat=design">
    <div className="cat-card">
<img src={item.img}alt=""></img>
<span className="title">{item.title}</span>
<span className="desc">{item.desc}</span>
    </div>
    </Link>
  )
}
CatCard.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default CatCard