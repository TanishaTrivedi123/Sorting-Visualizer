import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ExploreAlgorithmPage from "./pages/ExploreAlgorithmPage";
import MyProfilePage from "./pages/MyProfilePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/sorting" element={<HomePage />} />
        <Route path="/algorithms" element={<ExploreAlgorithmPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
