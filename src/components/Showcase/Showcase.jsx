import React from 'react'
// import showcaseImg from '../../assets/images/showcaseImg.png'
import Navbar from '../Navbar/Navbar'
import './Showcase.css'

export const Showcase = () => {
  return (
    <>
    <div className='showcaseImg-container'>
    <Navbar/>
        <div className='overlay'>
        <div className="innerText">
            <h6 className='subheading'>Logistics & Supply Chain Solution</h6>
    <h1>
        Your Gateway to any Destination in the world
    </h1>
    <p>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. 
        </p>
    <button className='exploreBtn'>Explore More</button>
        </div>
</div>
    </div>
    </>
  )
}
