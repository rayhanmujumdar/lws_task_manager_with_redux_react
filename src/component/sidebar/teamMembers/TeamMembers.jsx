import React from 'react'
import TeamMember from './TeamMember'

export default function TeamMembers() {
  return (
    <div class="mt-8">
        <h3 class="text-xl font-bold">Team Members</h3>
        <div class="mt-3 space-y-4">
          <TeamMember></TeamMember>
        </div>
      </div>
  )
}
