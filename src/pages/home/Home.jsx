import React from 'react'

import HeroSection from '../../components/heroSection/HeroSection'
import HelpSection from '../../components/help/HelpSection'
import Clients from '../../components/clients/Clients'
import Blog from "../../components/blog/Blog"
import Guide from '../../components/guide/Guide'
import Online from '../../components/online/Online'
import Notify from '../../components/notify/Notify'
const Home = () => {
  return (
    <div>
        <HeroSection/>
        <HelpSection/>
        <Clients/>
        <Blog/>
        <Guide/>
        <Online/>
        <Notify/>
        

    </div>
  )
}

export default Home