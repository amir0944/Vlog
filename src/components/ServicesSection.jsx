import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Frontend Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
          />
        </svg>
      ),
      desc: "Building fast, responsive and modern web apps with React, Next.js, TypeScript and Tailwind CSS.",
    },
    {
      title: "UI/UX Implementation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
          />
        </svg>
      ),
      desc: "Pixel-perfect, accessible and user-friendly interfaces with modern design systems.",
    },
    {
      title: "Performance & SEO",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      ),
      desc: "Lighthouse 95+, Core Web Vitals optimized, blazing-fast load times.",
    },
    {
      title: "Portfolio & Landing Pages",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-14 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      ),
      desc: "Professional personal websites that help developers and freelancers get hired.",
    },
  ];

  return (
    <div
      id="servicesSection"
      className="w-full my-2.5 mt-40 lg:mt-0 flex flex-col gap-8 px-2.5"
    >
      <div className="flex flex-col gap-8 text-white mb-8">
        <hr className="hr my-4" />
        <h1 className="font-bold text-center text-4xl">Services</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 100}
            data-aos-duration="800"
            className="pSerLogo bg-white text-black rounded-xl px-6 flex flex-col gap-4 shadow-2xl hover:shadow-pink-500/50 transition-all duration-500"
          >
            <div className="serLogo mt-[-50px] flex justify-center">
              <div className="bg-pink-600 p-4 rounded-full shadow-lg duration-300">
                {service.icon}
              </div>
            </div>
            <h1 className="text-3xl font-bold text-pink-600">
              {service.title}
            </h1>
            <p className="pb-4 text-gray-700 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
