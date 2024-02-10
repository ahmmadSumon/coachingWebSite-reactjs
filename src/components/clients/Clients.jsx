import React from 'react'
import Slider from "react-slick";
import clientImg1 from '../../assets/images/client/image 68.png'
import clientImg2 from '../../assets/images/client/image 68 (1).png'
import clientImg3 from '../../assets/images/client/image 68 (2).png'
import clientStars from '../../assets/images/client/Stars (1).png'
import clientStars2 from '../../assets/images/client/Stars.png'
import '../clients/clients.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Clients = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
        <section className="clients container-fluid">
          <div className='container'>
  <div className="">
    <h1>
      Hear out what my <br /> clients say about me.
    </h1>
    <div className="clients-row container-fluid">
    <Slider {...settings}>
      <div className="col-md-3 clients-col">
        <h4>
          "I gained so much
          <span>confidence</span> in my ability to connect and deepen my
          relationships with people. "
        </h4>
        <h3>Jane</h3>
        <div>
          <img src={clientImg1} alt="" />
          <img src={clientStars} alt="" />
        </div>
      </div>
      <div
        className="col-md-3 clients-col"
      >
        <h4>
          "I gained so much
          <span>confidence</span>
          in my ability to connect and deepen my relationships with people. "
        </h4>
        <h3>Catherine</h3>
        <div>
          <img src={clientImg2} alt="" />
          <img src={clientStars2} alt="" />
        </div>
      </div>
      <div
        className="col-md-3 
      clients-col"
      >
        <h4>
          "I gained so much
          <span>confidence</span>
          in my ability to connect and deepen my relationships with people. "
        </h4>
        <h3>Jane</h3>
        <div>
          <img src={clientImg3} alt="" />
          <img src={clientStars2} alt="" />
        </div>
      </div>
      </Slider>
    </div>
  </div>
  </div>
</section>

    </div>
  )
}

export default Clients