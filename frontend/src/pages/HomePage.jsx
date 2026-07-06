import React from "react";
import Navbar from "../components/Common/Navbar/Navbar";
import Hero from "../components/HomePage/Hero/Hero";
import HowItWorks from "../components/HomePage/HowItWorks/HowItWorks";
import Footer from "../components/Common/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
