import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        id="header"
        className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-slate-800 text-white backdrop-blur-sm z-50"
      >
        {/* Hamburger Button — فقط تو موبایل نمایش داده می‌شه */}
        <button
          className="text-3xl cursor-pointer z-50 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* Profile Image */}
        <img
          src="/images/images.jpg"
          alt=""
          className="w-14 rounded-full border-2 border-[#ffffff]"
        />

        {/* منوی افقی دسکتاپ — فقط تو دسکتاپ نمایش داده می‌شه */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#heroSection"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("heroSection")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </a>
          <a
            href="#aboutSection"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("aboutSection")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Me
          </a>
          <a
            href="#servicesSection"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("servicesSection")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Services
          </a>
          <a
            href="#portfolioSection"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("portfolioSection")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Portfolio
          </a>
          <a
            href="#heroSection"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("heroSection")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </a>
        </nav>
      </header>

      {/* Overlay — فقط تو موبایل */}
      <div
        style={{ zIndex: 2 }}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-400 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* منوی موبایل — فقط تو موبایل نمایش داده می‌شه */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-slate-800 text-white z-50 transform transition-transform duration-[400ms] ease-in-out flex flex-col md:hidden ${
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
              href="#heroSection"
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
              href="#aboutSection"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("aboutSection")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#contactSection"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contactSection")
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
              href="#portfolioSection"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("portfolioSection")
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
