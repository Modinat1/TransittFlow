import React from 'react'
import { TeamMemberCard } from './TeamMemberCard'
import './TeamMember.css'

export const TeamMember = () => {
  return (
    <React.Fragment>
        <section className="teamMembers_container">
        <h6 className='team_subheading'>The Transporters</h6>
        <h2>Meet Expert Team</h2>

        <article>
            <TeamMemberCard/>
        </article>
        </section>
    </React.Fragment>
  )
}
