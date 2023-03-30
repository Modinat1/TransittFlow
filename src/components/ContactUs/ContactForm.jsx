import React from 'react'
import './ContactUs.css'

export const ContactForm = () => {
  return (
    <React.Fragment>
        <form className='contact_form'>
            <div className="form_flex">
                <input type="text" placeholder='Your Name' required />
                <input type="Email" placeholder='Email' required />
            </div>

            <div className="form_flex">
                <input type="text" placeholder='Phone Number' required />
                <input type="City" placeholder='City' required />
            </div>

            <textarea name="message" cols="30" rows="10" placeholder='Your Message'></textarea>
            <button type='submit'> Submit Message</button>
        </form>
    </React.Fragment>
  )
}
