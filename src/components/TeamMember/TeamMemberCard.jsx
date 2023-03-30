import React from 'react'
// import { TeamMemberArray } from './TeamMemberArray'
import './TeamMember.css'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

export const TeamMemberCard = () => {
  return (
    <React.Fragment>
        <section className = "teamMemberCard_container">

            <div className='teamMemberCard member1'>
                <div className='teamMemberOverlay'>
                        <h5>Jessca Arow</h5>
                        <small>Designer</small>
                </div>

            <div className="teamMemberSocials">
                <AiOutlineTwitter className='teamSocials'/>
                <BsFacebook className='teamSocials'/>
                <AiOutlineInstagram className='teamSocials'/>
            </div>

            </div>

            <div className='teamMemberCard member2'>
                <div className='teamMemberOverlay'>
                        <h5>Kathleen Smith</h5>
                        <small>Designer</small>
                </div>

                <div className="teamMemberSocials">
                    <AiFillLinkedin className='teamSocials'/>
                    <AiOutlineTwitter className='teamSocials'/>
                    <BsFacebook className='teamSocials'/>
                    <AiOutlineInstagram className='teamSocials'/>
                </div>
            </div>

            <div className='teamMemberCard member3'>
                <div className='teamMemberOverlay'>
                        <h5>Rebecca Tylor</h5>
                        <small>Designer</small>
                </div>

                <div className="teamMemberSocials">
                    <BsFacebook className='teamSocials'/>
                    <AiOutlineTwitter className='teamSocials'/>
                    <AiOutlineInstagram className='teamSocials'/>
                </div>
            </div>
                </section>
    </React.Fragment>
  )
}
