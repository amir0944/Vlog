import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        id="header"
        className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-slate-800 text-white backdrop-blur-sm z-50"
      >
        {/* Hamburger Button */}
        <button
          className="text-3xl cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Profile Image */}
        <img src="/images/images.jpg" alt="" className="w-14 rounded-full" />
      </header>

      {/* Overlay */}
      <div
        style={{ zIndex: 2 }}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-400 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-slate-800 text-white z-50 transform transition-transform duration-[400ms] ease-in-out flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            X
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-6 p-6">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("heroSection")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
              className="text-[#ff0066]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#heroSection"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("heroSection")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#aboutSection"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("aboutSection")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              Contact Me
            </a>
          </li>
          <li>
            <a
              href="#servicesSection"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("servicesSection")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#statsSection"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("header")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
