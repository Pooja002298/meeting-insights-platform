import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

const TranscriptionForm = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(`${API_BASE_URL}/transcription/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setText(response.data.transcription);
    } catch (error) {
      console.error(error);
      setText("Error transcribing audio");
    }
  };

  return (
    <div>
      <h2>Transcription</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
      <p>{text}</p>
    </div>
  );
};

export default TranscriptionForm;
