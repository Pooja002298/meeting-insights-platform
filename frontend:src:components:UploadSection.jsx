import React, {useState} from 'react'
import { uploadMeeting } from '../api'

export default function UploadForm({onUploaded}){
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e){
    e.preventDefault()
    if(!file) return
    setLoading(true)
    const resp = await uploadMeeting(file, title || file.name)
    setLoading(false)
    if(onUploaded) onUploaded(resp)
  }

  return (
    <form onSubmit={submit} className="p-4 bg-white rounded shadow">
      <input className="mb-2 w-full" type="text" placeholder="Meeting title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input className="mb-2 w-full" type="file" accept="audio/*,video/mp4" onChange={e=>setFile(e.target.files[0])} />
      <button className="px-4 py-2 bg-blue-600 text-white rounded" disabled={loading}>{loading? 'Uploading...':'Upload'}</button>
    </form>
  )
}
