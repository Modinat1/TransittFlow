import React from 'react'
import './ContactUs.css'
import { ContactForm } from './ContactForm'
// import { ContactDetails } from './ContactDetails'

export const ContactUs = () => {
  return (
    <React.Fragment>
        <section className='contact_section'>
        {/* <ContactDetails/> */}
        <ContactForm/>
        </section>
    </React.Fragment>
  )
}
