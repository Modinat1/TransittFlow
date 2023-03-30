import React from 'react'
import { Transport } from './Transport'
import './Transportation.css'

export const Transportation = () => {
  return (
    <React.Fragment>
        <section className='transportation'>

        <h4 className='heading'>Transporting Across The World</h4>
        <div className="tranport_container">
         <Transport/>  
        </div>
          <div className='transportation_footer'>

    </div>
         <button className='transport_btn'>more work</button>
        </section>
    </React.Fragment>
  )
}
