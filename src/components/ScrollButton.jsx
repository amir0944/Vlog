import React, { useEffect } from "react";

const ScrollButton = () => {
  useEffect(() => {
    const flash = document.querySelector("#flash");

    const handleScroll = () => {
      if (window.scrollY >= 120) {
        flash.style.opacity = 1;
      } else {
        flash.style.opacity = 0;
      }
    };

    const handleClick = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("scroll", handleScroll);
    flash?.addEventListener("click", handleClick);

    // حذف event listener وقتی کامپوننت unmount می‌شه
    return () => {
      window.removeEventListener("scroll", handleScroll);
      flash?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      id="flash"
      style={{ opacity: 0 }} // مقدار اولیه
      className="duration-700 w-[40px] h-[40px] rounded-4xl bg-[#ff0066] fixed top-[80%] right-9 z-10 flex justify-center items-center text-white cursor-pointer hover:bg-white hover:text-[#ff0066]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="size-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>
    </div>
  );
};

export default ScrollButton;
