import "./projectCard.css"
// import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
const ProjectCard = ({item}) => {
    console.log(item);
    // console.log(item.title, item.desc);
    return (
      
      <div className="project-card">
  <img src={item.img}alt=""></img>
  <div className="info">
  <h2>{item.cat}</h2>
  <div className="text">
  <img src={item.pp}alt=""></img>
  
  
  <span>{item.username}</span>
  </div>
  </div>
      </div>
      
    )
  }
  ProjectCard.propTypes = {
    item: PropTypes.shape({
      img: PropTypes.string.isRequired,
      pp: PropTypes.string.isRequired,
      cat: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
  };
export default ProjectCard