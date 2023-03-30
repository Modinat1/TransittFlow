import React from 'react'
import whyChooseUsIcon1 from '../../assets/icons/whyChooseUsIcon1.png'
import whyChooseUsIcon2 from '../../assets/icons/whyChooseUsIcon2.png'
import whyChooseUsIcon3 from '../../assets/icons/whyChooseUsIcon3.png'
import whyChooseUsIcon4 from '../../assets/icons/whyChooseUsIcon4.png'
import whyChooseUsIcon5 from '../../assets/icons/whyChooseUsIcon5.png'
import whyChooseUsIcon6 from '../../assets/icons/whyChooseUsIcon6.png'
import './WhyChooseUs.css'


export const WhyChooseCard = () => {
  return (
    <section className='whyChooseUsCard'>
        <h6 className='subheading'> Why Choose</h6>
        <h2>We create opportunity to reach potential</h2>
        <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>
        
        <div className='whyChoose_flex_container'>
            <div className='whyChoose_flex'>
                <img src={whyChooseUsIcon1} alt="icon" />
                <h4>Safe Package</h4>
            </div>

            <div className='whyChoose_flex'>
                <img src={whyChooseUsIcon2} alt="icon" />
                <h4>Ship Everywhere</h4>
            </div>

            <div className='whyChoose_flex'>
                <img src={whyChooseUsIcon3} alt="icon" />
                <h4>Global Tracking</h4>
            </div>

            <div className='whyChoose_flex'>
                <img src={whyChooseUsIcon4} alt="icon" />
                <h4>24/7 support</h4>
            </div>

            <div className='whyChoose_flex'>
                <img src={whyChooseUsIcon5} alt="icon" />
                <h4>In Time Delivery</h4>
            </div>

            <div className='whyChoose_flex'>
                <img src={whyChooseUsIcon6} alt="icon" />
                <h4>Transparent Pricing</h4>
            </div>
        </div>
    </section>
  )
}
