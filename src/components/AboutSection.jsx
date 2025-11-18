import React from "react";

const AboutSection = () => {
  return (
    <div
      id="aboutSection"
      className="px-2 lg:w-[80%] w-full mx-auto h-[800px] flex lg:flex-row flex-col justify-center items-center gap-8 text-white lg:mt-0 mt-40"
    >
      <div
        data-aos="fade-in"
        data-aos-delay="100"
        style={{ boxShadow: "-18px 18px 10px black" }}
        className="lg:w-max relative bg-[#ff0066] rounded-2xl p-5"
      >
        <img src="/images/me.png" alt="Me" />
        <div className="w-[150px] h-[150px] bg-[#ff0066] rounded-r-2xl absolute top-1/4 flex flex-col gap-2 justify-center items-center font-bold text-2xl">
          <p>3</p>
          <p>Years</p>
          <p>Experience</p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="lg:w-1/2 flex flex-col gap-8 lg:mt-0 mt-4"
      >
        <hr className="hr" />
        <h1 className="text-5xl font-bold">Introduction About Me</h1>
        <p className="leading-8 mx-4 md:mx-0">
          Hi, I'm Amirhossein Seydi. I'm a computer science student and web
          developer, passionate about creating things that matter. I work mostly
          with JavaScript, React, and Tailwind, and I love discovering new ideas
          and turning them into reality. If a project isn't finished on time,
          you'll probably find me watching a new season of my favorite anime or
          enjoying a slice of pizza.🍕☕💻
        </p>
        <div className="flex gap-4">
          <button className="btn">HIRE ME</button>
          <button className="btn">DOWNLOAD CV</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
