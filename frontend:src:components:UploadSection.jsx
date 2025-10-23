import React, { useState } from "react";
import axios from "axios";

export default function UploadSection() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    setStatus("Uploading...");
    const res = await axios.post("http://localhost:8000/upload/", formData);
    setStatus(`Uploaded: ${res.data.filename}`);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow mb-8">
      <input
        type="file"
        accept=".mp4,.mp3,.wav"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Upload
      </button>
      <p className="mt-2 text-sm text-gray-500">{status}</p>
    </div>
  );
}
