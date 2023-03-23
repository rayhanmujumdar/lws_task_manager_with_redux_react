import React from 'react'
import Projects from './projects/Projects'
import TeamMembers from './teamMembers/TeamMembers'

export default function Sidebar() {
  return (
    <div class="sidebar">
      {/* <!-- Projects List --> */}
      <Projects></Projects>

      {/* <!-- Team Members --> */}
      <TeamMembers></TeamMembers>
    </div>
  )
}
