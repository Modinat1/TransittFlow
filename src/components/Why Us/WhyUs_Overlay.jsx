import React from 'react'
import whyUsIcon1 from '../../assets/icons/whyUsIcon1.png'
import whyUsIcon2 from '../../assets/icons/whyUsIcon2.png'
import whyUsPlane from '../../assets/images/whyUsPlane.png' 
import whyUsWomen from '../../assets/images/whyUsWomen.png' 
import pattern from '../../assets/icons/Pattern.png' 

export const WhyUs_Overlay = () => {
  return (
    <React.Fragment>
        <section className='whyUs_overlay_container'>
            <main className='whyUs_info'>
                <h6 className='subheading'> Why Us</h6>
                <h2>We provide full range global logistics solution</h2>
                <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>
                <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p> 
                <div className='whyUs_flex'>
                    <div className='whyUsIcon'>
                    <img src={whyUsIcon1} alt="delivery on time" />
                    </div>
                    <h5>Delivery on Time</h5>
                </div>
                <div className='whyUs_flex'>
                    <div className='whyUsIcon'>
                    <img src={whyUsIcon2} alt="Optimised Travel Cost" />
                    </div>
                    <h5>Optimised Travel Cost</h5>
                </div>
            </main>
            <main className='whyUsAside'>
                <img src={whyUsPlane} alt="plane image" />
            </main>
            <section className='whyUsWomen'>
                <img src={whyUsWomen} alt="a woman picture" />
            </section>

            <section className='statistic_counts'>
                <div className="statistics">
                   <h3>1294 </h3> 
                   <img className='divider' src={pattern} alt="division pattern"/>
                   <p>Delivered Packages</p>
                </div>

                <div className="statistics">
                   <h3>3594 </h3> 
                   <img className='divider' src={pattern} alt="division pattern"/>
                   <p>Satisfied Clients</p>
                </div>
              
            </section>
        </section>
    </React.Fragment>
  )
}
