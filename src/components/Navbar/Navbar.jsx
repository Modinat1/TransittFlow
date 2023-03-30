import React from 'react'
import './Navbar.css'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

const Navbar = () => {
  return (
   <>
   <nav>
   <ul>
    <li className="navlinks"><a href="#">Home</a></li>
    <li className="navlinks"><a href="#">About</a></li>
    <li className="navlinks">
        <a href="#">Pages  &#9662;</a>
            {/* <ul className="dropdown">
        <li>
        <a href="#">pages 1</a>
        <a href="#">pages 2</a>
        </li>
            </ul> */}
    </li>
    <li className="navlinks"><a href="#">Projects</a></li>
    <li className="navlinks"><a href="#">Contacts</a></li>
   </ul>


<div className='socials'>
   <div className="social-icons">
    <AiOutlineInstagram className='social-icon'/>
    <BsFacebook className='social-icon'/>
    <AiOutlineTwitter className='social-icon'/>
    <AiFillLinkedin className='social-icon'/>
   </div>

    <div className="requestBtn">

   <button>Request Quote</button>
    </div>
</div>
   </nav>
   </>
  )
}

export default Navbar;