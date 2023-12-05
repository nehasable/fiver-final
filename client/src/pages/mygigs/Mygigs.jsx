import { Link } from "react-router-dom"
import "./Mygigs.css"

const Mygigs = () => {
  const currentUser={
    id: 1,
    username: "Anna",
    isSeller: false,
  }
  return (
    <div className="mygigs">
    <div className="mygigs-container">
    <div className="mygigs-title">
      <h1>{currentUser.isSeller ? "Gigs" :"Orders"}</h1>
      {currentUser.isSeller && (
      <Link to="/add" className="link"> <button className="mygigs-button">Add New Gig</button></Link>
      )}</div>
      
      <table>
        <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
        </tr>
      
        <tr>
          <td> <img
                className="mygigs-image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /></td>
              <td>AI Art</td>
              <td>59.<sup>99</sup></td>
              <td>20</td>
              <td> <img  className="mygigs-delete" src="./img/delete.png"></img></td>
        </tr>

        <tr>
        <td>
              <img
                className="mygigs-image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>120.<sup>99</sup></td>
            <td>41</td>
            <td>
              <img className="mygigs-delete" src="./img/delete.png" alt="" />
            </td>
        </tr>
        <tr>
        <td>
              <img
                className="mygigs-image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            
            <td>High quality digital character</td>
            <td>79.<sup>99</sup></td>
            <td>55</td>
            <td>
              <img className="mygigs-delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
      </table>
      </div>
    </div>
  )
}

export default Mygigs
