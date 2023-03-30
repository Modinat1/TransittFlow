import React from 'react'
import { WhyChooseCard } from './WhyChooseCard'
import { WhyChooseUsOverlay } from './WhyChooseUsOverlay'

export const WhyChooseUs = () => {
  return (
    <React.Fragment>
        <section className="whyChooseUs">
            <div className='blue_Bg_Div'></div>
            <WhyChooseCard/>
            <WhyChooseUsOverlay/>
        </section>
    </React.Fragment>
  )
}
