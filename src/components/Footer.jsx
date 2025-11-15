// ContactSection.jsx or ContactSection.tsx
import React from "react";

const Footer = () => {
  return (
    <section className="px-2">
      <hr className="hr mb-7" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 hover">
          <div
            className="bg-[#ff0066] text-white text-center py-4 rounded-lg shadow-md hover:bg-gray-100 hover:text-[red] duration-700"
            style={{ boxShadow: "black -18px 18px 10px" }}
          >
            <div className="flex justify-center mb-4">
              <i className="fas fa-map-marked text-4xl text-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </i>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-3 capitalize">address</h2>
              <span className="block ">Esfahan, Kashan</span>
              <span className="block  ">Faz2 ,baharestan S,plak 15</span>
            </div>
          </div>

          <div
            className="bg-[#ff0066] text-white text-center py-4 rounded-lg shadow-md hover:bg-gray-100 hover:text-[red] duration-700"
            style={{ boxShadow: "black -18px 18px 10px" }}
          >
            <div className="flex justify-center mb-4">
              <i className="fas fa-envelope text-4xl text-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </i>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-3 capitalize">e-mail</h2>
              <span className="block  ">amirseyyedi944@gmail.com</span>
            </div>
          </div>

          <div
            className="bg-[#ff0066] text-white text-center py-4 rounded-lg shadow-md hover:bg-gray-100 hover:text-[red] duration-700"
            style={{ boxShadow: "black -18px 18px 10px" }}
          >
            <div className="flex justify-center mb-4">
              <i className="fas fa-clock text-4xl text-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </i>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-3 capitalize">
                telegram & eitaa id
              </h2>
              <span className="block  ">@amirseyyedi0944</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
