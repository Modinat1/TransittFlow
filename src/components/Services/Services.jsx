import React from 'react'
import { ServicesArray } from './ServicesArray'
import './Services.css'

export const Services = () => {
  return (
    <React.Fragment>
        <section className='services'>
            <aside>
            <h6 className="subheading"> what we do </h6>
            <h2> Safe & Reliable Cargo Solutions </h2>
            </aside>

            <div className='service_container'>
                 {ServicesArray.map((service) =>{
            const {id, title, desc, icon} = service
            return(
                <>
                <div className='service' key={id}>
                    <div className="service_icon">
                    <img src={icon} alt={title} />

                    </div>
                    
                    <div className="service_info">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                    </div>
                </div>
                </>
            )
        })}
            </div>
       
        </section>
    </React.Fragment>
  )
}
