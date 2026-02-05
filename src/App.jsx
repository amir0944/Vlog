import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import ScrollButton from "./components/ScrollButton";
import "./index.css";
import Footer from "./components/Footer";
import ProjectsSlider from "./components/ProjectsSlider";

const App = () => {
  return (
    <>
      <ScrollButton />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSlider />
      <Footer />
    </>
  );
};

export default App;
