import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

const SentimentForm = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/sentiment/`, { text });
      setResult(response.data.sentiment);
    } catch (error) {
      console.error("Error calling backend:", error);
      setResult({ error: "Failed to fetch sentiment" });
    }
  };

  return (
    <div>
      <h2>Sentiment Analysis</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          cols={50}
          placeholder="Enter text here..."
        />
        <br />
        <button type="submit">Analyze Sentiment</button>
      </form>
      {result && (
        <div style={{ marginTop: "20px" }}>
          {result.error ? (
            <p style={{ color: "red" }}>{result.error}</p>
          ) : (
            <>
              <p>Label: {result.label}</p>
              <p>Polarity: {result.polarity}</p>
              <p>Subjectivity: {result.subjectivity}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SentimentForm;
