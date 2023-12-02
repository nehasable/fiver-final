// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Gig.css"
// Import Swiper styles
import 'swiper/css';
//----------------selected gig is displayed here------------------
const Gig = () => {
  return (
    <div className="gig">
      <div className="gig-container">
      <div className="left">
      <span className="title">FREELANCE - AI SERVICES</span>
      <h2>I like to create AI generative art </h2>
      <div className="gig-user">
      
        <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="pp" />
        <span>Neha Sable</span>
        </div>
        <div className="stars">
        <img src="/img/star.png" />
        <img src="/img/star.png" />
        <img src="/img/star.png" />
        <img src="/img/star.png" />
        <img src="/img/star.png" />
        <span>5</span>
        </div>
        
        <div className='work' >
        <Swiper 
      spaceBetween={50}
      slidesPerView={1}
     
    >
      <SwiperSlide>
        <img src='https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg'></img>
      </SwiperSlide>
      <SwiperSlide>
       <img src='https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg'></img>
      </SwiperSlide>
      <SwiperSlide> 
      <img src='https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg'></img>
      </SwiperSlide>
     
    
    </Swiper>
    </div>
    <div className='para'>
    <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things Ive found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. E-sports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you are more than
            welcome to send me a message.
          </p>
    </div>
    <div className="seller">
    <span>About the Seller</span>
      <div className="seller-profile">
    
 <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="" />
        <span>Anna Bell</span>
      
      </div>
      <div className="box">
      <div className="box-items">
                <div className="box-item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="box-item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="box-item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="box-item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="box-item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
            <div className="reviews">
            <h2>Reviews</h2>
            <div className="reviews-item">
              <div className="reviews-user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              
              <p>
                I just want to say that art with ai was the first, and after
                this, the only artist Ill be using on Fiver. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="reviews-item">
              <div className="reviews-user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
            
              <p>
                I just want to say that art with ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr/>
            <div className="reviews-item">
              <div className="reviews-user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
             
              <p>
                I just want to say that art with ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
              </div>
            </div>
            </div>

     
    </div>
    <div className="right">
      <div className="price">
        <h3>1 AI generated image</h3>
        <span>$ 39.99</span>
       <p> I will create a unique high quality AI generated image based on a
            description that you give me</p>
            <div className="price-details">
            <div className="details-item">
              <img src="/img/clock.png" alt="" className="" />
              <span>2 Days Delivery</span></div>
              <div className="features">
              <div className="price-item">
              <img src="/img/greencheck.png" alt="" className="" /> 
              <span>Immersive Outlook</span></div>
              <div className="price-item">
              <img src="/img/greencheck.png" alt="" className="" /> 
              <span>Additional Designs</span></div>
              <div className="price-item">
              <img src="/img/greencheck.png" alt="" className="" /> 
              <span>Prompt Service</span></div>
              </div>
            </div>
            <button className="price-btn">Continue</button>
      </div>
    </div>
      </div>
      </div>
  
  )
}

export default Gig
