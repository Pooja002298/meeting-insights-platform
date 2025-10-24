import React from "react";
import SentimentForm from "./components/SentimentForm";
import TranscriptionForm from "./components/TranscriptionForm";
import SummarizationForm from "./components/SummarizationForm";
import TopicModelForm from "./components/TopicModelForm";

function App() {
  return (
    <div className="App">
      <h1>Meeting Insights Platform</h1>
      <SentimentForm />
      <TranscriptionForm />
      <SummarizationForm />
      <TopicModelForm />
    </div>
  );
}

export default App;
