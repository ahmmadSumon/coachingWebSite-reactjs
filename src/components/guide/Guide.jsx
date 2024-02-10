import React from 'react'
import guideImg from '../../assets/images/potential/Group.png'
import '../guide/guide.scss'
import Button from '../button/Button'
const Guide = () => {
  return (
    <div>
        <section className="guide">
  <div className="container guide-con">
    <div className="row guide-row">
      <div className="col-md-6 guide-col">
        <h1>
          Don’t miss out on my ‘Live life at the full potential’ free guide
        </h1>
        <p className="upper">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.{" "}
        </p>
        <p className="lowwer">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.{" "}
        </p>
        <Button insideText='Get your free guide now'/>
       
      </div>
      <div className="col-md-6 guide-img-col">
        <img className="img-fluid" src={guideImg} alt="" />
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Guide