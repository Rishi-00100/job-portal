"use client"
import Badge from '@/components/ui/Badge'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function page() {

  const [isEditing, setIsEditing] = useState(false)

  const [profile, setProfile] = useState({
    name: 'Udbhav Singh',
    email: 'singh.rishi.0100@email.com',
    location: 'India',
    bio: 'Full stack developer...',
    skills: ['React', 'Node.js', 'Java']
  })

  const savedCount = useSelector(
    state => state.savedJobs.savedJobs.length
  )

  return (
  <main className="px-4 py-10 max-w-3xl mx-auto">
    
    <div className="flex items-center gap-4 mb-8">
      <div className="h-16 w-16 rounded-full bg-blue-600 
                      text-white flex items-center 
                      justify-center text-2xl font-bold">
        {profile.name[0]}
      </div>
      <div>
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p className="text-gray-500 text-sm">{profile.email}</p>
        <p className="text-gray-500 text-sm">{profile.location}</p>
      </div>
      <button className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>

    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">About</h2>
      {isEditing ? (
        <textarea className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={profile.bio}
          onChange={(e) => setProfile({
            ...profile, bio: e.target.value
          })}
        />
      ) : (
        <p className="text-gray-600">{profile.bio}</p>
      )}
    </div>

    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-3">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {profile.skills.map(skill => (
          <Badge key={skill} text={skill} color="blue" />
        ))}
      </div>
    </div>

    <div>
      <p className="text-lg font-semibold">{savedCount} Saved Jobs</p>
    </div>

  </main>
)
}
