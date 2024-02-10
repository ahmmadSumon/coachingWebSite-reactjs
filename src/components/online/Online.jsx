import React from 'react'
import onlineImg from '../../assets/images/meet/Image (3).png'
import '../online/online.scss'
import Button from '../button/Button'
const Online = () => {
  return (
    <div>
        <section className="online container-fluid">
  <div className="container online-con">
    <div className="row">
      <div className="col-md-6 online-col">
        <h2>Get 15-Minutes Complimentary online session.</h2>
        <p>Limited Period Offer. Claim Now.</p>
        <Button insideText='Book now'/>
        
      </div>
      <div className="col-md-6 online-img-col">
        <img src={onlineImg}alt="" />
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Online