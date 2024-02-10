import React from 'react'
import helpImg1 from '../../assets/images/help/v4.png'
import helpImg11 from '../../assets/images/help/browser-internet-web-network-diagram-1 1 (1).png'
import helpImg2 from '../../assets/images/help/Frame.png'
import helpImg3 from '../../assets/images/help/browser-internet-web-network-diagram-1 1.png'
import "../help/helpSection.css"

const HelpSection = () => {
  return (
    <div>
      <section className="help-section container">
  <div className=" help-con">
    <div className="helpVec">
      <img src={helpImg1} alt="" />
    </div>
    <div className="row help-row-up">
      <div className="col-md-6 helpUpLeft">
        <h1>I can help you in these particular areas.</h1>
      </div>
      <div className="col-md-6 helpUpRight">
        <p>
          Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore 
magna aliqua minim
          veniam.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error 
sit voluptatem
          accusantium doloremque laudantium, totam rem 
aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto 
beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
    </div>
    <div className="row help-row-down">
      <div className="col-md-4 help-row-down-con">
        <div className="vec">
          <img src={helpImg2} alt="" />
        </div>
        <h3>1:1 Coaching</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore 
magna aliqua minim
          veniam.
        </p>
      </div>
      <div className="col-md-4 help-row-down-con">
        <div className="vec">
          <img
            src={helpImg3}
            alt=""
          />
        </div>
        <h3>Consultation</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore 
magna aliqua minim
          veniam.
        </p>
      </div>
      <div className="col-md-4 help-row-down-con">
        <div className="vec">
          <img
            src={helpImg11}
            alt=""
          />
        </div>
        <h3>Group Coaching Sessions</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore 
magna aliqua minim
          veniam.
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default HelpSection