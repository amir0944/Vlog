import React from "react";

const HeroSection = () => {
  return (
    <div className="backImage w-full h-[300px] md:h-[800px] flex flex-col gap-4 justify-center items-center text-white">
      <h1
        data-aos="fade-right"
        data-aos-duration="700"
        className="lg:text-6xl md:text-3xl text-2xl font-bold duration-700"
      >
        Hi, i am Amir
      </h1>
      <p data-aos="fade-left" data-aos-duration="700" className="duration-700">
        I am a JavaScript programmer and front-end developer with three years of
        experience.
      </p>
      <button data-aos="fade-up" data-aos-duration="700" className="btn">
        Contect Me
      </button>
    </div>
  );
};

export default HeroSection;
