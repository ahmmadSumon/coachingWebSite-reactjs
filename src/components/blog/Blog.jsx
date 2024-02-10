import React from 'react'
import blogImg1 from '../../assets/images/blog/Image.png'
import blogImg2 from '../../assets/images/blog/Image (1).png'
import blogImg3 from '../../assets/images/blog/Image (2).png'
import '../blog/blog.scss'
import Button from '../button/Button'
const Blog = () => {
  return (
    <div>
        <section className="blog">
  <div className=" blog-con">
    <h1>
      Stay Motivated, read the <br /> weekly blog articles.
    </h1>
    <div className="row blog-row">
      <div className="col-md-4 blog-row-con ">
        <div className="blog-img">
          <img src={blogImg1} alt="" />
        </div>
        <div className="text">
          <h3>Balancing your love and work life.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
      </div>
      <div
        className="col-md-4 
        blog-row-con "
      >
        <div className="blog-img">
          <img src={blogImg2} alt="" />
        </div>
        <div className="text">
          <h3>A short break from Social Media is important.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt
            labore et dolore magna aliqua minim veniam.
          </p>
        </div>
      </div>
      <div
        className="col-md-4 
        blog-row-con "
      >
        <div className="blog-img">
          <img src={blogImg3} alt="" />
        </div>
        <div className="text">
          <h3>How to be 1% Better Every Day</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
      </div>
    </div>
    <Button insideText='Read more blogs'/>
    
  </div>
</section>

    </div>
  )
}

export default Blog