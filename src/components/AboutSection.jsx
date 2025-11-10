import React from "react";

const AboutSection = () => {
  return (
    <div className="lg:w-[80%] w-full mx-auto h-[800px] flex lg:flex-row flex-col justify-center items-center gap-8 text-white lg:mt-0 mt-40">
      <div
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
      <div className="lg:w-1/2 flex flex-col gap-8 lg:mt-0 mt-4">
        <hr className="hr" />
        <h1 className="text-5xl font-bold">Introduction About Us</h1>
        <p className="text-[#ff0066]">
        I’ve spent 3 years turning coffee into code and dreams into UI.☕💻 
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
