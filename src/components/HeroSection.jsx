import React from "react";

const HeroSection = () => {
  return (
    <div
      id="heroSection"
      className="backImage w-full h-[300px] px-2 md:h-[800px] flex justify-center items-center text-white"
    >
      <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg flex flex-col gap-1 items-center">
        <h1
          data-aos="fade-right"
          data-aos-duration="700"
          className="lg:text-6xl md:text-3xl text-2xl font-bold duration-700 mb-3.5"
        >
          Hi, i am Amir
        </h1>
        <p
          data-aos="fade-left"
          data-aos-duration="700"
          className="duration-700"
        >
          I am a JavaScript programmer and front-end developer with three years
          of experience.
        </p>
        <button data-aos="fade-up" data-aos-duration="700" className="btn">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("aboutSection")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contect Me
          </a>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
