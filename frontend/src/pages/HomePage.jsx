import React from "react";
import Navbar from "../components/Common/Navbar/Navbar";
import Hero from "../components/HomePage/Hero/Hero";
import HowItWorks from "../components/HomePage/HowItWorks/HowItWorks";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
      </main>
    </>
  );
};

export default HomePage;
