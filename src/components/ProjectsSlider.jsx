// components/ProjectsSlider.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const ProjectsSlider = () => {
  const projects = [
    {
      title: "Personal Website Rezomit",
      tech: "Html & Css, Tailwind Css, JavaScript, Vite",
      image: img1,
      github: "https://github.com/amir0944/personal-website-rezomit-",
    },
    {
      title: "Rick and Morty TT",
      tech: "React, TypeScript, Vite, ESLint, Tailwind Css",
      image: img3,
      github: "https://github.com/amir0944/rick-and-mortyTT",
    },
    {
      title: "Color Note App T",
      tech: "JavaScript, Html & CSS (Custom Colors), Local Storage",
      image: img4,
      github: "https://github.com/amir0944/color-note-app-T",
    },
    {
      title: "Mega News Portal",
      tech: "Html & css, Tailwind Css, JavaScript, Swiper",
      image: img2,
      github: "https://github.com/amir0944/mega-news",
    },
  ];

  return (
    <section
      id="portfolioSection"
      className="relative p-1 border-2 m-0.5 rounded-3xl"
    >
      <div className="container mx-auto ">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={60}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          grabCursor={true}
          speed={1200}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 max-w-7xl mx-auto items-start">
                <div className="relative order-1 lg:order-1 col-span-1 lg:col-span-3">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-pink-500/30 hover:border-pink-500/60 transition-all duration-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto block object-contain bg-black/50"
                      style={{ maxHeight: "85vh" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-cyan-600/20 opacity-0 hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />
                  </div>
                </div>

                <div className="order-2 lg:order-2 flex flex-col justify-center col-span-1">
                  <div className="relative p-10 lg:p-12 bg-gradient-to-br from-slate-900/90 via-black to-purple-900/70 backdrop-blur-2xl rounded-3xl border-2 border-pink-500/30 shadow-2xl hover:shadow-pink-600/70 hover:border-pink-500/60 transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-cyan-600/20 blur-3xl opacity-70 -z-10 animate-pulse" />
                    <div className="relative z-10">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
                        {project.title}
                      </h3>
                      <hr className="hr mt-3 b" />
                      <p className="text-lg md:text-xl text-pink-200 font-medium leading-relaxed opacity-90">
                        Built with:{" "}
                        <span className="text-cyan-300">{project.tech}</span>
                      </p>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 py-1 px-5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-bold hover:shadow-2xl hover:shadow-pink-600/60 transform hover:scale-110 transition-all duration-300 group"
                      >
                        View on GitHub
                        <svg
                          className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSlider;
