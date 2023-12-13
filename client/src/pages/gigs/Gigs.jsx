import { useState } from "react"
import "./Gigs.css"
import GigCard from "../../components/GigCard/GigCard"
import { gigs } from "../../data"
const Gigs = () => {
  const[sort,setSort]=useState("sales")    //since api will include sales=best selling ,createdAt=newest
  const[open,setOpen]=useState(false)     //false-close  true-open //initially open's value is set to false matlab closed
 
  const reSort =(type)=>{        //type will be assigned values ; sales or created at or any more
  setSort(type)
  setOpen(false)
 }
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
<input className="gigs-input" type="number" placeholder="min"></input>
<input className="gigs-input" type="number" placeholder="max"></input>
<button className="gigs-button">Apply</button>
</div>
      </div>
      <div className="gigs-right">
        <span className="sortby" >Sortby</span>
        
        <span className="sort" >{sort==="sales"?"Best Selling":"Newest"}</span> 
        {/* ternary operator only works for when there are two categories to sort from */}
        <img src="./img/down.png" onClick={()=>setOpen(!open)}></img>  
        {/* sets open value to true matlab open */}
        {open &&(
        <div className="gigs-right-menu">
        { sort==="sales"? <span onClick={()=>reSort("createdAt")} className="sort" >Newest</span> :
        
        <span  onClick={()=>reSort("sales")} className="sort" >Best Selling</span>}
       </div>
       ) }
      </div>
      </div>
    
    <div className="gigs-cards">
      {gigs.map(gig=>
        <GigCard item={gig} key={gig.id}/>

      )}
      </div>
      </div>
    </div>
  )
}

export default Gigs
