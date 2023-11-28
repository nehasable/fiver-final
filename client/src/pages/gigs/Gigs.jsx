import "./Gigs.css"

const Gigs = () => {
  return (
    <div className="gigs">
    <div className="gigs-container">
      <span className="title">FREELANCE - AI SERVICES</span>
      <div className="gigs-menu">
      <div className="left">
<h2>AI Artists</h2>
<span>Explore with Freelance</span>
<div className="budget">
<span>Budget</span>
<input type="number" placeholder="min"></input>
<input type="number" placeholder="max"></input>
<button>Apply</button>
</div>
      </div>
      <div className="right">
        <span className="sortby" >Sortby</span>
        <span className="sortby" >Popular</span>
        <img src="./img/down.png"></img>
        <span className="sortby" >Newest</span>

      </div>
      </div>
    </div>
   
    </div>
  )
}

export default Gigs
