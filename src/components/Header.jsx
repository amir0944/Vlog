import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const menu = document.querySelector("#menu");
    const menuBtn = document.querySelector("#menuBtn");

    const handleClick = () => {
      menu.classList.toggle("active");
      setMenuOpen((prev) => !prev); // همراه با React state
    };

    if (menuBtn) {
      menuBtn.addEventListener("click", handleClick);
    }

    // حذف event listener وقتی کامپوننت unmount می‌شه
    return () => {
      if (menuBtn) {
        menuBtn.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <nav
      id="menu"
      className="w-full px-10 py-4 h-[80px] bg-slate-800 text-white flex flex-col md:flex-row gap-4 items-center md:items-center md:justify-start overflow-hidden duration-300"
    >
      <img
        src="/images/images.jpg"
        className="w-14 rounded-[50%] hidden md:flex"
        alt=""
      />

      <div className="w-full flex md:hidden flex-row gap-2 justify-between items-center">
        <img src="/images/images.jpg" className="w-14 rounded-[50%]" alt="" />
        <button id="menuBtn" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <ul
        id="ulMenu"
        className={`hidden md:flex gap-6 items-center justify-center ${
          menuOpen ? "active" : ""
        }`}
      >
        <a style={{ color: "#ff0066" }} href="#">
          Home
        </a>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Contact Us</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Portfolio</li>
      </ul>
    </nav>
  );
};

export default Header;
