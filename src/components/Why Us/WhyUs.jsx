import React from 'react'
import './WhyUs.css'
import { WhyUs_Overlay } from './WhyUs_Overlay'
import { Transportation } from '../TransportationType/Transportation'

export const WhyUs = () => {
  return (
    <React.Fragment>
        <section className='why_us'>
        <div className='whyUs_overlay'></div>
        <WhyUs_Overlay/>
        <Transportation/>
    {/* <div className='whyUs_footer'>

    </div> */}
        </section>
    </React.Fragment>
  )
}
