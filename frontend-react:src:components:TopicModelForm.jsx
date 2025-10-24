import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

const TopicModelForm = () => {
  const [text, setText] = useState("");
  const [topics, setTopics] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/topics/`, { text });
      setTopics(response.data.topics);
    } catch (error) {
      console.error(error);
      setTopics([]);
    }
  };

  return (
    <div>
      <h2>Topic Modeling</h2>
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} cols={50} />
      <br />
      <button onClick={handleSubmit}>Analyze Topics</button>
      <ul>
        {topics.map((topic) => (
          <li key={topic.topic}>
            Topic {topic.topic}: {topic.words.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicModelForm;
