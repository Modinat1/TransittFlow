import React from 'react'
// import { useState } from 'react'
import { TestimonialCard } from './TestimonialCard'
import './Testimonial.css'

export const Testimonial = () => {
    // const[bgDark, setBgDark] = useState(true)
    const darkBg = true
  return (
    <React.Fragment>
        <section className='testimonial'>
        <h6 className="subheading">Testimonial</h6>
        <h2>What Our Customer Say</h2>
        <TestimonialCard darkBg={darkBg}/>
        </section>
    </React.Fragment>
  )
}
