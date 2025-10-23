import React from "react";
import UploadSection from "../components/UploadSection";
import Dashboard from "../components/Dashboard";

const Home = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Meeting Insights</h1>
      <UploadSection />
      <Dashboard />
    </div>
  );
};

export default Home;
