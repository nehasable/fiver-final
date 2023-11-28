// import Slide from "../../components/slide/Slide"
import Featured from "../../components/featured/Featured"
import Slide from "../../components/slide/Slide"
import TrustedBy from "../../components/trustedby/TrustedBy"
import "./Home.css"

import CatCard from "../../components/catCard/CatCard"
import {cards, projects} from "../../data"
import ProjectCard from "../../components/projectCard/projectCard"

// import { SwiperSlide } from 'swiper/react'
// import 'swiper/css';


const Home = () => {
  return (
    <div>
    <Featured/>
    <TrustedBy/>
    <Slide data={cards} CardComponent={CatCard}/>

    <div className="features">
    <h1>A Whole New World of Freelancing, right at your screen. </h1>
      <div className="features-container">
        
        <div className="left">
        <div className="item">
        <div className="title">
          <img src="./img/check.png" alt=""/>
          Best of budget.
          </div>
          <p> Find high-quality services at every price point. No hourly rates,
              just project-based pricing.</p>
        </div>
        <div className="item">
        <div className="title">
          <img src="./img/check.png" alt=""/>
          
          Quality work done quickly
          </div>
          <p> Find the right freelancer to begin working on your project within
              minutes.</p>
        </div>
        <div className="item">
        <div className="title">
          <img src="./img/check.png" alt="">
          </img>
          Protected payments, every time.
          </div>
          <p>Always know what you will pay upfront. Your payment is not released
              until you approve the work.</p>
        </div>
        </div>

        <div className="right">
        <video src="./img/Video.mp4" controls ></video></div>
        </div>
      </div>
    
    <div className="explore">
      <div className="explore-container">
      <div className="explore-left">
        <div className="items">
        <div className="explore-title">
          <img src="./img/check.png" alt=""/>
          Freelance Pro.
          </div>
          <p> Access top freelancers and professional business tools for any project</p>
        </div>
        <div className="items">
        <div className="explore-title">
          <img src="./img/check.png" alt=""/>
          
          Freelance Certified
          </div>
          <p> Build your own branded marketplace of certified experts</p>
        </div>
        <div className="items">
        <div className="explore-title">
          <img src="./img/check.png" alt="">
          </img>
          Freelance Workplace
          </div>
          <p>Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution
</p>
        </div>
        <button className="button">Explore</button>
        </div>
        


        <div className="right">
        <img src="./img/R.png" alt="" ></img></div>
      </div>
    </div>
    <Slide data={projects} CardComponent={ProjectCard}/>
    

    </div>
  )
}

export default Home
