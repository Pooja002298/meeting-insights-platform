import React, {useEffect, useState} from 'react'
import UploadForm from '../components/UploadForm'
import { fetchMeetings } from '../api'

export default function Dashboard(){
  const [meetings, setMeetings] = useState([])

  useEffect(()=>{ fetchMeetings().then(setMeetings) },[])

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Meetings</h1>
      <div className="mb-4">
        <UploadForm onUploaded={(r)=>{ fetchMeetings().then(setMeetings) }} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {meetings.map(m=> (
          <div key={m.id} className="p-4 bg-white rounded shadow">
            <h3 className="font-bold">{m.title}</h3>
            <p className="text-sm">Filename: {m.filename}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
