import React from 'react'
import HomeImg from '../../assets/images/hero/andrea.png'
import HomeImg2 from '../../assets/images/hero/Vector (1).svg'
import HomeImg3 from '../../assets/images/hero/Frame 42906.png'
import '../heroSection/heroSection.scss'
import Button from '../button/Button'


const HeroSection = () => {
  return (
    <div>
<section className="hero-section 
container-fluid">
  <img className="heroVecLeft" src={HomeImg2} alt="" />
  <img className="heroVecRight " src={HomeImg3} alt="" />
  <div className="container hero-container">
    <div className="row hero-section-row">
      <div className=" col-12 col-md-6 
hero-left  text-nowrap">
        <p>Proven strategies backed by science 
for success.</p>
        <h1>
          Live life at the <br /> full potential
        </h1>
        <h6>
          I help people to discover their true 
potential and live a fulfilling{" "}
          <br /> life... Discover the simple 3 
steps that I discovered to hack{" "}
          <br />
          productivity. It just works and it is 
begin using backed by science.{" "}
          <br /> Wanna transform your life?
        </h6>
        
        <Button insideText='Get your free guide now'/>
        
      </div>
      <div className="col-6  hero-right">
        <img
          className="img-fluid"
          src={HomeImg}
            
          alt=""
        />
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default HeroSection