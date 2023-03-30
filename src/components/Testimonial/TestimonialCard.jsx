import React from 'react'
// import { Testimonial } from './TestimonialArray'
import exClamIcon from '../../assets/icons/excIcon.png'
import starIcon from '../../assets/icons/Star 5.png'
import testimonialImg1 from '../../assets/images/testimonialImg1.png'
import testimonialImg2 from '../../assets/images/testimonialImg2.png'
import './Testimonial.css'


export const TestimonialCard = () => {
  return (
    <div className='testimonial_card_container'>
        <section className='testimonial_card'> 
                <div className='testimonial_flex'>
                <div className='testimonial_profile'>
                   
                    <img src={testimonialImg1} alt="Kathleen Smith" />
                   
                    <div className='profile_info'>
                        <h6>Kathleen Smith</h6>
                        <small>Fuel Company</small>
                    </div>

                </div>
                    <div className='excIcon'>
                    <img  src={exClamIcon} alt="icon" />

                    </div>
                        
                </div>

                <p className='remark'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                <img className='starIcon' src={starIcon} alt="" />
                <img className='starIcon' src={starIcon} alt="" />
                <img className='starIcon' src={starIcon} alt="" />
                <img className='starIcon' src={starIcon} alt="" />
                <img className='starIcon' src={starIcon} alt="" />
                
                </section>

                <section className='testimonial_card bgDark'> 
                <div className='testimonial_flex'>
                <div className='testimonial_profile'>
                   
                    <img src={testimonialImg2} alt="John Martin" />
                   
                    <div className='profile_info'>
                        <h6>John Martin</h6>
                        <small>Restoration Company</small>
                    </div>

                </div>
                    <div className='excIcon'>
                    <img  src={exClamIcon} alt="icon" />

                    </div>
                        
                </div>

                <p className='remark'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                <img className='starIcon' src={starIcon} alt="" />
                <img className='starIcon' src={starIcon} alt="" />
                <img className='starIcon' src={starIcon} alt="" />
                <img className='starIcon' src={starIcon} alt="" />
                <img className='starIcon' src={starIcon} alt="" />
                
                </section>


        {/* later */}
        {/* {Testimonial.map((testimonial) => {
            const {id, name, company, remark, image} = testimonial
            return(
                <section className='testimonial_card'> 
                <div className='testimonial_flex'>
                <div key={id} className='testimonial_profile'>
                   
                    <img src={image} alt={name} />
                   
                    <div className='profile_info'>
                        <h6>{name}</h6>
                        <small>{company}</small>
                    </div>

                </div>
                    <div className='excIcon'>
                    <img  src={exClamIcon} alt="icon" />

                    </div>
                        
                </div>

                <p className='remark'>{remark}</p>
                <img className='starIcon' src={starIcon} alt="" />
                <img className='starIcon' src={starIcon} alt="" />
                <img className='starIcon' src={starIcon} alt="" />
                <img className='starIcon' src={starIcon} alt="" />
                <img className='starIcon' src={starIcon} alt="" />
                
                </section>
            )
        })} */}
    </div>
  )
}
