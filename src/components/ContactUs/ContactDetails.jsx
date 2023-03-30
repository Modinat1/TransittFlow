import React from 'react'
import {FaRegClock} from 'react-icons/fa'
import {FaEnvelopeSquare} from 'react-icons/fa'
import {FaPhoneAlt} from 'react-icons/fa'

export const ContactDetails = () => {
  return (
    <>
        <h6 className="subheading">Contact</h6>
        <h2>Get in touch with us</h2>
        <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>

        <div className='work_time'>
<div className='header_flex'>
   
<div className='header_icon'>

   <FaRegClock />
</div>
    <div className='header_info'>
      <p>Mon - Sat 9.00 - 18.00</p>
      <p>Sunday Closed</p>
    </div>
  </div>

   <div className='header_flex'>
    <div className='header_icon'>
   <FaEnvelopeSquare />
    </div>
    <div className='header_info'>
      <p>Email</p>
      <p>contact@logistics.com</p>
    </div>
  </div>

   <div className='header_flex'>
    <div className='header_icon'>
   <FaPhoneAlt />
   </div>
    <div className='header_info'>
      <p>Call Us</p>
      <p>(00) 112 365 489</p>
    </div>
  </div>
    </div>
    </>
  )
}
