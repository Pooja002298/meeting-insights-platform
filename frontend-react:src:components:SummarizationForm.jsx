import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

const SummarizationForm = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/summarization/`, { text });
      setSummary(response.data.summary);
    } catch (error) {
      console.error(error);
      setSummary("Error summarizing text");
    }
  };

  return (
    <div>
      <h2>Summarization</h2>
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} cols={50} />
      <br />
      <button onClick={handleSubmit}>Summarize</button>
      <p>{summary}</p>
    </div>
  );
};

export default SummarizationForm;
